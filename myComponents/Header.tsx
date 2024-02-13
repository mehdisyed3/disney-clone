import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header >
      <Link href='/'>
        <Image
        width={120}
        height={100}
         src='https://links.papareact.com/a943ae'
         alt='Logo'
         className='cursor-pointer invert'
         />
      </Link>

      <div className='flex space-x-2 '>

      </div>

    </header>
  )
}

export default Header