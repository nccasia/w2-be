import { createModel } from 'xstate/lib/model';
import * as jsonPointer from 'json-pointer';
import * as machineSchema from './machine.schema.json';
import Ajv from 'ajv';
import { Task } from '@prisma/client';

const initialContext = {};

const DEFAULT_TASK_SCHEMA = {
  id: 'Task machine',
  context: initialContext,
  initial: 'NEW',
  states: {
    NEW: {
      type: 'atomic',
      invoke: {
        src: 'setupTask',
        onDone: {
          target: 'TODO',
        },
      },
    },
    TODO: {
      id: 'TODO',
      type: 'atomic',
      invoke: {
        src: 'checkTodo',
        onDone: {
          target: 'DOING',
        },
      },
      on: {
        changeStatus: [
          {
            cond: 'isDoing',
            target: 'DOING',
          },
          {
            cond: 'isDiscarded',
            target: '#DISCARDED',
          },
        ],
      },
    },
    DOING: {
      type: 'atomic',
      id: 'DOING',
      on: {
        changeStatus: [
          {
            cond: 'isTodo',
            target: '#TODO',
          },
          {
            cond: 'isDiscarded',
            target: '#DISCARDED',
          },
        ],
        FORM_SUBMITTED: [
          {
            cond: 'inValid',
            target: '#DONE',
          },
        ],
        TASK_SUBMITTED: [
          {
            cond: 'isCompleted',
            target: '#DONE',
          },
        ],
      },
    },
    DONE: {
      id: 'DONE',
      type: 'final',
      invoke: {
        src: 'checkDone',
        onErr: {
          target: 'DOING',
        },
      },
    },
    DISCARDED: {
      id: 'DISCARDED',
      type: 'final',
    },
  },
  on: {
    SET_ACTIVE: {
      actions: 'setActive',
    },
    CHANGE_STATUS: [
      {
        cond: 'isTodo',
        target: '#TODO',
      },
      {
        cond: 'isDiscarded',
        target: '#DISCARDED',
      },
    ],
  },
};

const ajv = new Ajv();
ajv.addKeyword('definition');

export class TaskSchema {
  schema = null;
  validateFn = ajv.compile(machineSchema);

  constructor(initSchema: any = DEFAULT_TASK_SCHEMA) {
    const validation = initSchema && initSchema.states;
    if (!validation) {
      console.error('Invalid schema', initSchema);
      throw new Error('Invalid schema');
    }
    this.init(initSchema);
  }

  init(initSchema: any = DEFAULT_TASK_SCHEMA) {
    this.schema = JSON.parse(JSON.stringify(initSchema));
    return this;
  }

  name(name: string) {
    jsonPointer.set(this.schema, '/id', name);
    return this;
  }

  validate() {
    this.validateFn(this.schema);
    return this;
  }

  compund() {
    jsonPointer.set(this.schema, `/states/DOING/type`, 'compound');
    this.ensureSubState();

    return this;
  }

  enableParallelSubTasks() {
    jsonPointer.set(this.schema, `/states/DOING/type`, 'parallel');
    jsonPointer.set(this.schema, `/states/DOING/on`, {
      '': {
        target: '#DONE',
        cond: 'allTasksCompleted',
      },
    });

    this.ensureSubState();

    return this;
  }

  ensureSubState() {
    if (!jsonPointer.has(this.schema, `/states/DOING/states`)) {
      jsonPointer.set(this.schema, `/states/DOING/states`, {});
    }
    return this;
  }

  getDoingType() {
    return jsonPointer.get(this.schema, `/states/DOING/type`);
  }

  hasDoingSubState(stateName: string) {
    return jsonPointer.has(this.schema, `/states/DOING/states/${stateName}`);
  }

  addSubTask(task: Task) {
    const stateName = task.key;
    jsonPointer.set(this.schema, `/states/DOING/states/${stateName}`, {
      type: 'compound',
      initial: 'TODO',
      states: {
        TODO: {
          type: 'atomic',
          on: {
            [`START_${stateName}`]: {
              target: 'DOING',
            },
          },
        },
        DOING: {
          type: 'atomic',
          on: {
            [`FORM_SUBMIT_${stateName}`]: [
              {
                target: 'COMPLETED',
              },
            ],
          },
        },
        COMPLETED: {
          type: 'final',
        },
      },
    });
    return this;
  }

  addTransition(stateName, { eventName, handlers }) {
    jsonPointer.set(this.schema, `/states/DOING/states/${stateName}/on`, {
      [eventName]: handlers,
    });
    return this;
  }

  getSchema() {
    return this.schema;
  }
}
