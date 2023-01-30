import { State, EventObject, StateSchema, Typestate } from 'xstate';

export class TaskState<
  TContext,
  TEvent extends EventObject = EventObject,
  TStateSchema extends StateSchema<TContext> = any,
  TTypestate extends Typestate<TContext> = any
> extends State<TContext, TEvent, TStateSchema, TTypestate> {}
