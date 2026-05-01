import Blog2_17 from '../_components/Blog2_17'
import Wrapper from '../_assets/wrapper/Blog2_17'
import Alert_17 from '../_components/Alert_17'
import DeleteAllBlogs_17 from '../_components/DeleteAllBlogs_17'
import SeedAllBlogs_17 from '../_components/SeedBlogs_17'

import { prisma } from '@/lib/prisma'

type Blog = {
  id: number
  img: string | null
  category: string | null
  title: string | null
  descrip: string | null
}

export const fetchBlog_17 = async () => {
  const blogs = await prisma.blog_17.findMany()
  return blogs
}

const P1_17 = async () => {
  const blogs_17: Blog[] = await fetchBlog_17()
  // console.log('blogs_17:', blogs_17);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from local PosgreSQL -- htchung, 123456789</h2>
        </div>
        <div className='blogs-center2'>
          {blogs_17?.map((item) => {
            const { id, title, descrip, category, img } = item
            return (
              <Blog2_17
                key={id}
                id={id}
                title={title || 'Untitled'}
                descrip={descrip || 'No description'}
                category={category || 'Uncategorized'}
                img={img || '/default-blog.jpg'}
              />
            )
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <DeleteAllBlogs_17 />
          <SeedAllBlogs_17 />
        </div>
      </section>
    </Wrapper>
  )
}

export default P1_17
