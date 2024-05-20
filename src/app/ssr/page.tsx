import { HeroSection } from '@/components/hero-section'
import PokemonCardServer from '@/components/pokemon-card'
import PokemonListClient from '@/components/pokemon-list'
import { Highlight } from '@/components/ui/hero-highlight'

async function getData() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`, {
    cache: 'no-cache',
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Ssr() {
  const { results: pokemons } = await getData()

  return (
    <div>
      <HeroSection>
        This page is utilizing{' '}
        <Highlight className="text-black dark:text-white">server side rendering</Highlight>!
        <div>
          <span className="text-sm font-normal italic leading-none">
            Server side pages allow secure data fetching and processing on the server.
          </span>
        </div>
      </HeroSection>
      <div className="mx-auto max-w-[900px] pb-20">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This page uses dynamic rendering to combine server side with client side components. With Dynamic
          Rendering, routes are rendered for each user at request time.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Dynamic rendering is useful when a route has data that is personalized to the user or has
          information that can only be known at request time, such as cookies or the URL&apos;s search params.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This page showcases one example of a server rendered page. It fetches a list of pokemons from an API
          on the server, generates the HTML and CSS and sends it to the client in a response. Once the page is
          shown to the user the process of hydration begins.
        </p>
        <h2 className="mt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Hydration
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">At request time, on the client:</p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>
            The HTML is used to immediately show a fast non-interactive initial preview of the Client and
            Server Components.
          </li>
          <li>
            The React Server Components Payload is used to reconcile the Client and rendered Server Component
            trees, and update the DOM.
          </li>
          <li>
            The JavaScript instructions are used to hydrate Client Components and make the application
            interactive.
          </li>
        </ol>
        <PokemonListClient>
          {pokemons.map((poke: { url: string; name: string }) => (
            <PokemonCardServer key={poke.url} pokemon={poke} />
          ))}
        </PokemonListClient>
      </div>
    </div>
  )
}
