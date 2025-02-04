export type Transition<S> = {
  identityFn: (state: S) => boolean
  actions: string[]
}

export type Transitions<S> = Transition<S>[]

export type TransitionsByStoreId<S = any> = {
  [storeId: string]: Transitions<S>
}
