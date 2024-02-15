import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreDropDown from './GenreDropDown'

function Header() {
  return (
    <header className="fixed w-full z-10 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
  <div className="flex items-center"> {/* Container for left side */}
    <Link href='/'>
      <Image
        src='https://links.papareact.com/a943ae'
        alt='Logo'
        width={120}
        height={100}
        className="cursor-pointer invert-0 dark:invert-100"
      />
    </Link>
  </div>

  <div className=" flex ml-auto space-x-2"> {/* Container for right side */}
  <GenreDropDown />
    <SearchInput />
    <ThemeToggle />
  </div>
</header>

  
  )
}

export default Header