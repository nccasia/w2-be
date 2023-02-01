import { createModel } from 'xstate/lib/model';

import { createMachine, interpret, assign, spawn } from 'xstate';
import { TaskSchema } from './task-schema';
import { PrismaClient } from '@prisma/client';
import { Injector } from '@nestjs/core/injector/injector';
import { ModuleRef } from '@nestjs/core';
import { TaskService } from '../tasks.service';
import { TaskState } from './task-state';
import { Logger } from '@nestjs/common';

export class TaskMachine {
  engine: any;
  task: any;
  service: any;
  schema: TaskSchema;
  state: any;
  config: any;
  key: any;
  private readonly logger = new Logger(TaskMachine.name);

  constructor(public taskId: number, private readonly prisma: PrismaClient) {}

  async loadTask() {
    // fetch the task and its subtasks from the database
    this.task = await this.prisma.task.findUnique({
      where: { id: this.taskId },
      include: { subTasks: true, parentTask: true },
    });
  }

  async init() {
    await this.loadTask();
    this.key = this.task.key;
    this.config = this.task.machineConfig;
    this.schema = new TaskSchema(this.config);

    this.createTaskMachine();
    await this.createInterpretor();
    this.logger.log(`TaskMachine created ${this.taskId} ${this.key}`);
    this.state = this.task.stateConfig || this.engine.initialState;
  }

  createInterpretor() {
    this.service = interpret(this.engine, {
      execute: false,
    });
    this.service.onTransition(async (state) => {
      console.log(
        'onTransition',
        this.taskId,
        this.key,
        state.event,
        state.value
      );
      this.state = new TaskState(state);
      await this.saveState(state);
      this.service.execute(state);
    });
  }

  async saveState(taskState: TaskState<any, any, any, any>) {
    const states = taskState.toStrings();
    this.logger.log(`saveState ${this.taskId} ${this.key} ${states}`);
    const state = JSON.parse(JSON.stringify(taskState));
    await this.prisma.task.update({
      where: { id: this.task.id },
      data: {
        isActive: taskState.context.isActive,
        status: states[0],
        stateConfig: state,
      },
    });
    for (const subTask of this.task.subTasks) {
      const isActive = states.includes(`DOING.${subTask.key}`);
      const data = { isActive };
      this.logger.log(
        `save SubState ${this.taskId} ${this.key} - ${subTask.id} ${
          subTask.key
        } ${JSON.stringify(data)}`
      );
      await this.prisma.task.update({
        where: { id: subTask.id },
        data,
      });
    }
  }

  createTaskMachine() {
    const machineSchema = this.schema.getSchema();

    const machine = createMachine(machineSchema, {
      actions: {
        setActive: assign({
          isActive: (context, event) => {
            return (event as any).value;
          },
        }),
        summitTask: (context, event) => {
          console.log('summitTask', context, event);
          // update the task properties based on the event
        },
        sendEmailUpdate: (context, event) => {
          // update the task properties based on the event
        },
      },
      services: {
        setupTask: (context, event) => {
          // update the task properties based on the event
          return Promise.resolve(true);
        },
        checkTodo: (context, event) => {
          // update the task properties based on the event
          // update the task properties based on the event
          return Promise.resolve(true);
        },
      },
      guards: {
        isApproved: (context, event) => {
          console.log('isApproved', event);
          if (!event['data']) {
            return false;
          }
          const isApproved =
            (event as any)?.data.value?.approval === 'Approved';
          this.logger.log(
            `guard isApproved ${this.taskId} ${this.key} - ${JSON.stringify(
              event
            )} - ${isApproved}`
          );
          return isApproved;
        },
        isRejected: (context, event) => {
          if (!event['data']) {
            return false;
          }
          const isRejected =
            (event as any)?.data.value?.approval === 'Rejected';
          this.logger.log(
            `guard isRejected ${this.taskId} ${this.key} - ${JSON.stringify(
              event
            )} - ${isRejected}`
          );
          return isRejected;
        },
        allTasksCompleted: (context, event) => {
          return false;
        },
      },
    });
    this.engine = machine;
  }

  triggerEvent(event: any, value: any) {
    this.logger.log(
      `triggerEvent ${this.taskId} ${this.key} ${event} ${JSON.stringify(
        value
      )}`
    );
    this.service.send({
      data: value,
      type: event,
    });
  }

  run() {
    this.logger.log(`run ${this.taskId} ${this.key}`);
    // Start the service
    this.service.start(this.state);
  }

  stop() {
    this.logger.log(`stop ${this.taskId} ${this.key}`);
    this.service.stop();
  }

  async sendSetActive(isActive: boolean) {
    this.logger.log(`sendSetActive ${this.taskId} ${this.key} ${isActive}`);
    await this.service.send({ type: 'SET_ACTIVE', value: isActive });
  }
}
