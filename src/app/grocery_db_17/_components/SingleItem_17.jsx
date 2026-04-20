'use client'
import DeleteButton_17 from './DeleteButton_17'
import { editGrocery } from '@/actions/grocery.action_17'

const SingleItem_17 = ({ item }) => {
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
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <DeleteButton_17 id={item.id} />
    </div>
  )
}
export default SingleItem_17
