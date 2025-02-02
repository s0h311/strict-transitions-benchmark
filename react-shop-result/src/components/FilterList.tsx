import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductTags } from '../store/product/selectors.ts'

export default function FilterList() {
  const tags = useSelector(selectProductTags)

  const dispatch = useDispatch()

  function updateSearchQuery(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target
    const query = input.value

    dispatch({
      type: 'filter/search',
      payload: query === '' ? null : query,
    })
  }

  function updateMaxPrice(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target
    const maxPrice = input.valueAsNumber

    dispatch({
      type: 'filter/maxPrice',
      payload: maxPrice,
    })
  }

  function updateMinRating(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target
    const minRating = input.valueAsNumber

    dispatch({
      type: 'filter/minRating',
      payload: minRating,
    })
  }

  function updateOnlyInStock(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target
    const onlyInStock = input.checked

    dispatch({
      type: 'filter/onlyInStock',
      payload: onlyInStock,
    })
  }

  let enabledTags: string[] = []

  function updateTags(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target
    const tagName = input.name

    if (enabledTags.includes(tagName)) {
      enabledTags = enabledTags.filter((tag) => tag !== tagName)
    } else {
      enabledTags.push(tagName)
    }

    dispatch({
      type: 'filter/tags',
      payload: enabledTags,
    })
  }

  return (
    <form>
      <input placeholder="search" type="text" onChange={updateSearchQuery} />

      <input placeholder="max price" type="number" onChange={updateMaxPrice} />

      <input placeholder="min rating" type="number" min={0} max={5} onChange={updateMinRating} />

      <input id="onlyInStockCheckbox" type="checkbox" onChange={updateOnlyInStock} />
      <label htmlFor="onlyInStockCheckbox">only in stock</label>

      <div>
        {tags.map((tag) => (
          <div key={tag}>
            <input id={tag + 'checkbox'} type="checkbox" name={tag} onChange={updateTags} />
            <label htmlFor={tag + 'checkbox'}>{tag}</label>
          </div>
        ))}
      </div>
    </form>
  )
}
