import SingleItem_17 from './SingleItem_17'
import { fetchGrocery } from '@/actions/grocery.action_17'

const Items_17 = async () => {
  const items = await fetchGrocery()
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem_17 key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items_17
