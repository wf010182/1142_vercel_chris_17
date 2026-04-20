import { createGrocery } from '@/actions/grocery.action_17'

const Form_17 = () => {
  return (
    <form action={createGrocery}>
      <h4>grocery bud (DB)</h4>
      <div className='form-control'>
        <input type='text ' className='form-input' name='name' />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  )
}
export default Form_17
