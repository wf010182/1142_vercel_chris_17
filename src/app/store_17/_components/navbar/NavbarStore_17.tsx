'use client'

import { ModeToggle } from './ModeToggle'
import LogoStore_17 from './LogoStore_17'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const NavbarStore_17 = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <LogoStore_17 />
      <div className='flex items-center gap-4'>
        <Link href='/'>
          <Button variant='secondary'>TKUdemo</Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  )
}

export default NavbarStore_17
