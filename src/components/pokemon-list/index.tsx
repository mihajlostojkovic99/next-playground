'use client'

import { useAppSelector } from '@/store/hooks'
import React, { ReactNode } from 'react'
import { Button } from '../ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const PokemonListClient: React.FC<{
  children?: ReactNode | ReactNode[]
}> = ({ children }) => {
  const message = useAppSelector((state) => state.app.textMessage)

  return (
    <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Pokemons (redux message is {message ?? 'no message'}):
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4">{children}</div>
    </div>
  )
}

export default PokemonListClient
