import { NavLinks } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from '../AuthProviders'

const Header = () => {
  const session = {}
  return (
    <nav>
      <div className="flext-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={115} height={43} />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
           
              <Link href={link.href} key={link.text}>
               {link.text}
              </Link>
           
          ))}

        </ul>
      </div>
      <div className="flexCenter gap-4">
        {
          session ? (
            <>
              userPhoto
              <Link href="/create-project">
                share work
              </Link>
            </>
          ) : (
              <AuthProviders></AuthProviders>
            )
        }
      </div>
    </nav>
  )
}

export default Header
