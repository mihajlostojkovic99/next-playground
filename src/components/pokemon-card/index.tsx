import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const PokemonCardServer: React.FC<{ pokemon: { name: string; url: string } }> = async ({ pokemon }) => {
  const details: {
    height: number
    weight: number
    sprites: {
      front_default?: string
    }
    stats: Array<{
      base_stat: number
      stat: {
        name: string
      }
    }>
  } = await (await fetch(pokemon.url)).json()
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{pokemon.name}</CardTitle>
        <CardDescription>
          This pokemon weights {details.weight}kg and has a height of {details.height}m.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row items-center justify-between">
        <div>
          <p>Stats:</p>
          {details.stats.map((stat) => (
            <ul key={stat.stat.name} className="my-2 ml-6 list-disc [&>li]:mt-2">
              <li>
                <span className="font-bold">{stat.stat.name.toUpperCase()}:</span> {stat.base_stat}
              </li>
            </ul>
          ))}
        </div>
        <div>
          {details.sprites.front_default && (
            <Image
              src={details.sprites.front_default}
              alt={pokemon.name.charAt(0).toUpperCase()}
              width={100}
              height={100}
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default PokemonCardServer
