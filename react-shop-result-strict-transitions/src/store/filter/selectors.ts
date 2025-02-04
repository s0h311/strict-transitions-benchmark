import { filterSlice } from './store.ts'
import { FilterState } from './type.ts'

export const selectFilter = ({ filters }: { [filterSlice]: FilterState }) => filters
