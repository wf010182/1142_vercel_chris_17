'use client'

import { useEffect, useState } from 'react'
import Product_17 from '../../_components/Product_17'
import Wrapper from '../../_assets/wrappers/Shop_17'

import { useParams } from 'next/navigation'

const FetchProductsByCategory_17 = () => {
  const [shop_17, setShop_17] = useState([])
  const params = useParams()
  const cat = params.category

  const fetchProductsFromNode = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/shop_17/${cat}`)
      const data = await response.json()
      console.log('shop_17 data', data)
      if (data.length !== 0) {
        setShop_17(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProductsFromNode()
  }, [])

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> 陳穎玄, 211417117 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title capitalize'>{cat}</h1>
          <div className='items'>
            {shop_17?.map((item) => {
              const { id, img_url, name, price } = item
              return (
                <Product_17
                  key={id}
                  img_url={img_url}
                  name={name}
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
