import { createModel } from 'xstate/lib/model';

import { createMachine, interpret, assign, spawn } from 'xstate';
import { TaskSchema } from './task-schema';
import { PrismaClient } from '@prisma/client';
import { Injector } from '@nestjs/core/injector/injector';
import { ModuleRef } from '@nestjs/core';
import { TaskService } from '../tasks.service';
import { TaskState } from './task-state';

export class TaskMachine {
  engine: any;
  task: any;
  service: any;
  schema: TaskSchema;
  state: any;
  config: any;
  key: any;

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
    console.log('init task', this.taskId, this.key);
    this.state = this.task.stateConfig || this.engine.initialState;
  }

  createInterpretor() {
    this.service = interpret(this.engine, { execute: false });
    this.service.onTransition(async (state) => {
      if (state.changed) {
        console.log('state changed', this.taskId, state.value);
        this.state = new TaskState(state);
        await this.saveState(state);
      }
      this.service.execute(state);
    });
  }

  async saveState(taskState: TaskState<any, any, any, any>) {
    const states = taskState.toStrings();
    console.log('saveState', this.taskId, states);
    const state = JSON.parse(JSON.stringify(taskState));
    await this.prisma.task.update({
      where: { id: this.task.id },
      data: {
        isActive: taskState.context.isActive,
        status: states[0],
        stateConfig: state,
      },
    });
    this.updateTaskState(this.taskId, taskState);
  }

  async updateTaskState(taskId: number, state: TaskState<any, any, any, any>) {
    const activeStates = state.toStrings();
    console.log('updateTaskState', taskId, activeStates);
    for (const subTask of this.task.subTasks) {
      const isActive = activeStates.includes(`DOING.${subTask.key}`);
      await this.prisma.task.update({
        where: { id: subTask.id },
        data: { isActive },
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
          if (!event['value']) {
            return false;
          }
          return (event as any)?.value?.approval === 'APPROVED';
        },
      },
    });
    this.engine = machine;
  }

  triggerEvent(event: any, value: any) {
    console.log('triggerEvent', this.taskId, event, value);
    this.service.send(event, value);
  }

  run() {
    console.log('run', this.taskId);
    // Start the service
    this.service.start(this.state);
  }

  async sendSetActive(isActive: boolean) {
    console.log('sendSetActive', this.taskId, isActive);
    await this.service.send({ type: 'SET_ACTIVE', value: isActive });
  }
}
