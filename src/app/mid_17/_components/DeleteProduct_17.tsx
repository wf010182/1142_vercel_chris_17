import { deleteProduct_17 } from '@/actions/shop.action_17';

type DeleteProductProps = {
  pid: number;
};

const DeleteProduct_17 = ({ pid }: DeleteProductProps) => {
  return (
    <form action={deleteProduct_17}>
      <input type='hidden' name='id' value={pid} />
      <button
        type='submit'
        className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
      >
        delete
      </button>
    </form>
  );
};

export default DeleteProduct_17;
