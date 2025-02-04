import {Transitions} from './types.ts'

export function createTransitions<S ,A = string>(transitions: Transitions<S, A>): Transitions<S, A> {
  return transitions
}
