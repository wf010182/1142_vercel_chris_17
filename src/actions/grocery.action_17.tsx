'use server'

import { prisma } from '@/lib/prisma'
import { nanoid } from 'nanoid'
import { revalidatePath } from 'next/cache'

export const fetchGrocery = async () => {
  const items = await prisma.grocery.findMany()
  return items
}

export const createGrocery = async (formData: FormData) => {
  const name = formData.get('name') as string
  const id = nanoid()
  const completed = false
  const newItem = { id, name, completed }
  try {
    const result = await prisma.grocery.create({
      data: newItem,
    })
    revalidatePath('/grocery_db_17')
  } catch (error) {
    console.error(error)
  }
}

export const removeGrocery = async (formData: FormData) => {
  const id = formData.get('id') as string
  await prisma.grocery.delete({ where: { id } })
  revalidatePath('/grocery_db_17')
}

export const editGrocery = async (id: string, completed: boolean) => {
  try {
    const updateGrocery = await prisma.grocery.update({
      where: { id },
      data: {
        completed,
      },
    })
  } catch (error) {
    console.log('Error updateing grocery:', error)
    throw error
  }
}
