import { Task } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { interpret, Machine } from 'xstate';

export class TaskService {
  constructor(private prisma: PrismaService) {}

  async updateTask(taskId: number, newState: string) {
    // fetch the task and its subtasks from the database
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
      include: { subTasks: true },
    });
    // create the state machine using the schema stored in the database
    const taskMachine = Machine(task.stateConfig as any, {
      actions: {
        updateTaskProperties: (context, event) => {
          // update the task properties based on the event
          switch (event.type) {
            case 'START':
              task.status = 'IN_PROGRESS';
              break;
            case 'FINISH':
              task.status = 'COMPLETED';
              break;
            default:
              break;
          }
        },
        updateSubtasks: (context, event) => {
          task.subTasks.forEach((subtask) => {
            const isActive = (subtask.config as any).activeWhen === task.state;
            // if (subtask.isActive !== isActive) {
            //   this.updateSubtask(subtask.id, isActive);
            // }
          });
        },
      },
    });
    // create the interpreter and start the machine
    const taskInterpreter = interpret(taskMachine)
      .onTransition((state) => {
        if (state.changed) {
          this.prisma.task.update({
            where: { id: taskId },
            data: { state: taskInterpreter.state.value, status: task.status },
          });
        //   this.updateSubtask(task.id, taskInterpreter.state.value);
          this.runTrigger(task);
        }
      })
      .start();
    // send the transition event to the machine
    taskInterpreter.send(newState);
  }

  async updateSubtask(subtaskId: number, isActive: boolean) {
    const subtask = await this.prisma.task.findUnique({
      where: { id: subtaskId },
    });
    // await this.prisma.task.update({
    //   where: { id: subtaskId },
    //   data: { isActive },
    // });

    this.runTrigger(subtask);
  }

  async runTrigger(taskOrSubtask: Task) {
    // const trigger = taskOrSubtask.trigger;
    if (!trigger) {
      return;
    }
    // if (trigger.condition === 'isActive' && taskOrSubtask.isActive === true) {
    // //   await axios.post(trigger.webhook, taskOrSubtask);
    // }
    // You can add more conditions here to check before sending the webhook request
  }
}
