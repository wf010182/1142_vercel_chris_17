'use client'

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
import Link from 'next/link'

import { ModeToggle } from './ModeToggle'

const NavbarMain_17 = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <Link href='/'>
        <div className='text-[18px]'>TKUdemo_17</div>
      </Link>
      <Menubar className='w-72'>
        <MenubarMenu>
          <MenubarTrigger>Demo</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/Counter_17'>Counter_17</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/Tours_17'>Tours_17</Link>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <Link href='/users_db_17'>Users_db_17</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/grocery_17'>Grocery_17</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/grocery_db_17'>Grocery_db_17</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Quiz1</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/blog_17'>Blog_17</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/blog_db_17'>Blog_db_17</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Midtem</MenubarTrigger>
          <MenubarContent className='w-44'>
            <MenubarGroup>
              <MenubarCheckboxItem>Bookmarks Bar</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>Full URLs</MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Quiz2</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value='benoit'>
              <MenubarRadioItem value='andy'>Andy</MenubarRadioItem>
              <MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>
              <MenubarRadioItem value='Luis'>Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Edit...</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Final</MenubarTrigger>
          <MenubarContent className='w-44'>
            <MenubarGroup>
              <MenubarCheckboxItem>Bookmarks Bar</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>Full URLs</MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div>
        <ModeToggle />
      </div>
    </div>
  )
}

export default NavbarMain_17
