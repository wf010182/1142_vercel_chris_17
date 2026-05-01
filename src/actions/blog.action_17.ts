'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { blogData2_17 } from './data/blogData'

export const deleteBlog_17 = async (id: number) => {
  await prisma.blog_17.delete({ where: { id } })
  revalidatePath('/quiz1_17/p1_17')
}

export const deleteAllBlog_17 = async () => {
  await prisma.blog_17.deleteMany()
  revalidatePath('/quiz1_17/p1_17')
}

export const SeedBlog_17 = async () => {
  // console.log('blogData2_17:', blogData2_17);
  await prisma.blog_17.createMany({
    data: blogData2_17,
    skipDuplicates: true,
  })
  revalidatePath('/quiz1_17/p1_17')
}
