import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

export default function FilterList() {
  const dispatch = useDispatch()

  function updateSearchQuery(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target
    const query = input.value

    dispatch({
      type: 'filter/search',
      payload: query === '' ? null : query,
    })
  }

  return (
    <form>
      <input placeholder="Search" type="text" onChange={updateSearchQuery} />
    </form>
  )
}
