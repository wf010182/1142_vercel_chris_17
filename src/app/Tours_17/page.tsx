'use client'

import Link from 'next/link'
import Image from 'next/image'
const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

const fetchTours = async () => {
  const reponse = await fetch(url)
  const data: Tour[] = await reponse.json()
  return data
}

const ToursPage_17 = async () => {
  const tours = await fetchTours()
  // console.log('tours', tours)
  return (
    <section>
      <h1 className='text-3xl mb-4'>Tours_17</h1>
      <div className='grid md:grid-cols-2 gap-x-8'>
        {tours?.map((tour) => {
          const { id, name, image } = tour
          return (
            <Link key={id} href={`/Tours_17/${id}`}>
              <div className='relative h-48 mb-2'>
                {/* <img src={image} /> */}
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw 33vw'
                  priority
                  className='object-cover rounded'
                />
              </div>
              <h2>{name}</h2>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default ToursPage_17
