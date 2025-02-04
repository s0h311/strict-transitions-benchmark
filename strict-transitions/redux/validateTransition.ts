import {BasicAction, Transitions} from './types.ts'
import {IllegalTransitionError} from '../core/IllegalTransitionError.ts'
import {TransitionNotFoundError} from '../core/TransitionNotFoundError.ts'

export function validateTransition<S, A extends BasicAction>(state: S, action: A, transitions: Transitions<S, A['type']>): void {
  for (const transition of transitions) {
    if (transition.identityFn && transition.identityFn(state)) {
      if (transition.actionTypes.includes(action.type)) {
        return
      }

      throw new IllegalTransitionError(state, action.type)
    }
  }

  throw new TransitionNotFoundError(state)
}
