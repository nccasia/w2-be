import { createModel } from 'xstate/lib/model';
import * as jsonPointer from 'json-pointer';
import * as machineSchema from './machine.schema.json';
import Ajv from 'ajv';
import { Task } from '@prisma/client';

const initialContext = {};

const DEFAULT_TASK_SCHEMA = {
  key: 'Task machine',
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
  },
};

const ajv = new Ajv();
ajv.addKeyword('definition');

export class TaskSchema {
  schema = null;
  validateFn = ajv.compile(machineSchema);

  init(initSchema: any = DEFAULT_TASK_SCHEMA) {
    this.schema = { ...initSchema };
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

  parallel() {
    jsonPointer.set(this.schema, `/states/DOING/type`, 'parallel');

    this.ensureSubState();

    return this;
  }

  ensureSubState() {
    if (!jsonPointer.has(this.schema, `/states/DOING/states`)) {
      jsonPointer.set(this.schema, `/states/DOING/states`, {});
    }
    return this;
  }

  addSubTask(task: Task) {
    const stateName = task.key;
    jsonPointer.set(this.schema, `/states/DOING/states/${stateName}`, {
      type: 'atomic',
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
