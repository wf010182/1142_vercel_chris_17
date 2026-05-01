'use client'
import DeleteButton_17 from './DeleteButton_17'
import { editGrocery } from '@/actions/grocery.action_17'

type GroceryItem = {
  id: string
  name: string
  completed: boolean
}

const SingleItem_17 = ({ item }: { item: GroceryItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        name='completed'
        onChange={() => editGrocery(item.id, !item.completed)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed ? 'line-through' : undefined,
        }}
      >
        {item.name}
      </p>
      <DeleteButton_17 id={item.id} />
    </div>
  )
}
export default SingleItem_17
