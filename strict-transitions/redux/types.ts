import {Store} from 'redux'

export type Transition<S, A> = {
  identityFn: (state: S) => boolean
  actionTypes: A[]
}

export type Transitions<S, A> = Transition<S, A>[]

export type BasicAction = {
  type: string
}

export type TransitionStore<S = unknown, A extends BasicAction = { type: string }> = {
  validateTransition: (state: S, action: A, transitions: Transitions<S, A['type']>) => void
  transitions: Transitions<S, A['type']>
  dispatchTransition: (this: TransitionStore<S, A>, action: BasicAction) => void
} & Store
