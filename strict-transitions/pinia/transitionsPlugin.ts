import {createPinia} from 'pinia'
import {TransitionsByStoreId} from './types.ts'
import {validateTransition} from './validateTransition.ts'

type PiniaUseCallback = Parameters<ReturnType<typeof createPinia>['use']>[0]
type PiniaUseCallbackArgs = Parameters<PiniaUseCallback>[0]

export function transitions(transitionsByStoreId: TransitionsByStoreId): PiniaUseCallback {
  return ({ store }: PiniaUseCallbackArgs) => {
    const transitions = transitionsByStoreId[store.$id]

    if (transitions) {
      store.$onAction(({ name, store }) => {
        validateTransition(store.$state, name, transitions)
      })
    }
  }
}
