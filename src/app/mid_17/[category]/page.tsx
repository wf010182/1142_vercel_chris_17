import Product_17 from '../_components/Product_17'
import Wrapper from '../_assets/wrappers/Shop_17'

import { prisma } from '@/lib/prisma'

type Product = {
  pid: number
  pname: string | null
  cat_id: number | null
  price: number | null
  img_url: string | null
  remote_img_url: string | null
}

const FetchProductsByCategory_17 = async ({
  params,
}: {
  params: Promise<{ category: string }>
}) => {
  const { category } = await params
  // console.log('category param:', category);

  const categoryRecord = await prisma.category_17.findFirst({
    where: { cname: category },
  })

  if (!categoryRecord) {
    return <div>Category not found</div>
  }

  const shop_17 = await prisma.shop_17.findMany({
    where: { cat_id: categoryRecord.cid },
  })

  // console.log('Products by category :', shop_17);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> 陳穎玄, 211417117 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_17?.map((item: Product) => {
              const { pid, img_url, pname, price } = item
              return (
                <Product_17
                  key={pid}
                  pid={pid}
                  img_url={img_url}
                  pname={pname}
                  price={price}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default FetchProductsByCategory_17
