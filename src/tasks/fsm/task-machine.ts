import { createModel } from 'xstate/lib/model';

import { interpret } from 'xstate';
import { TaskSchema } from './task-schema';
import { PrismaClient } from '@prisma/client';

export class TaskMachine {
  model: any;
  engine: any;
  task: any;

  constructor(public taskId: number, private prisma: PrismaClient) {}

  async loadTask() {
    // fetch the task and its subtasks from the database
    this.task = await this.prisma.task.findUnique({
      where: { id: this.taskId },
      include: { subTasks: true, parentTask: true },
    });
  }

  configure() {
    const schema = new TaskSchema();
    const machineSchema = schema.getSchema();
    this.engine = this.model.createMachine(machineSchema, {
      actions: {
        summitTask: (context, event) => {
          // update the task properties based on the event
        },
        sendEmailUpdate: (context, event) => {
          // update the task properties based on the event
        },
      },
      services: {
        setupTask: () => {
          return Promise.resolve(true);
        },
      },
      guards: {
        isApproved: (context, event) => {
          if (!event['value']) {
            return false;
          }
          return (event as any)?.value?.approval === 'APPROVED';
        },
      },
    });
  }

  excute() {
    const machine = this.engine;

    // Interpret the machine, and add a listener for whenever a transition occurs.
    const service = interpret(machine);

    // service.onTransition((ctx) => setTimeout(() => service.execute(ctx), 3000));

    // call db to get the initial state
    const prevState = machine.initialState;

    // Start the service
    service.start(prevState);

    // Send events
    service.send('submitForm', { value: 'David' });

    // persist the state to the db
    const persistedState = service.getSnapshot();

    // Stop the service when you are no longer using it.
    service.stop();
  }
}
