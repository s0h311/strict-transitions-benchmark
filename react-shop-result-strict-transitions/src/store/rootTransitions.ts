import { productTransitions } from './product/transitions'
import { filterTransitions } from './filter/transitions'

export const rootTransitions = [...productTransitions, ...filterTransitions]
