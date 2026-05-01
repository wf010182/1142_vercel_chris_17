'use client'

import { useState } from 'react'

import blogData_17 from '../_assets/data/blogData.json'
import Blog2_17 from '../_components/Blog2_17'
import Wrapper from '../_assets/wrapper/Blog2_17'
import Alert_17 from '../_components/Alert_17'

const BlogLocalJsonPage2_17 = () => {
  const [name, setName] = useState('htchung')
  const [id, setId] = useState(123456789)
  const [blogs_17, setBlogs_17] = useState(blogData_17)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger')
    setBlogs_17(blogs_17.filter((blog) => blog.id !== id))
  }

  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger')
    setBlogs_17([])
  }

  const loadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success')
    setBlogs_17([])
    setBlogs_17(blogData_17)
  }

  return (
    <Wrapper>
      {alert.show && <Alert_17 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json -- {name}, {id}{' '}
          </h2>
        </div>
        <div className='blogs-center2'>
          {blogs_17.map((item) => {
            const { id, title, descrip, category, img } = item
            return (
              <Blog2_17
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
                removeItem={removeItem}
              />
            )
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button
            type='button'
            className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
            onClick={clearAllBlogs}
          >
            clear all blogs
          </button>
          <button
            type='button'
            className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded'
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogLocalJsonPage2_17
