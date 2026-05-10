import Wrapper from './_assets/wrappers/Shop_17'
import Link from 'next/link'

import { prisma } from '@/lib/prisma'

const fetchCategory_17 = async () => {
  const categories = await prisma.category_17.findMany()
  return categories
}

const StaticPage_17 = async () => {
  const categories_17 = await fetchCategory_17()
  // console.log('Fetched categories:', categories_17);
  return (
    <Wrapper>
      <div className='max-w-4xl mx-auto shop-page'>
        <div className='section-title'>
          <h4> 陳穎玄, 211417117 </h4>
        </div>
        <div className='homepage'>
          <div className='directory-menu'>
            {categories_17?.map((item) => {
              const { cid, cname, size, image_url } = item
              return (
                <div className={`${size} menu-item`} key={cid}>
                  <img
                    className='background-image'
                    src={image_url || 'default.jpg'}
                    alt=''
                  />
                  <Link href={`/mid_17/${cname}`} className='content'>
                    <h1 className='title'>{item.cname}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default StaticPage_17
