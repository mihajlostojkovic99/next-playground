import { HeroSection } from '@/components/hero-section'
import { AppPagination } from '@/components/pagination'
import { Highlight } from '@/components/ui/hero-highlight'
import { Suspense } from 'react'

async function getData(query?: string, page?: number) {
  const res = await fetch(`https://swapi.dev/api/planets?search=${query ?? ''}&page=${page ?? 1}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Pagination({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''
  const page = Number(searchParams?.page) || 1
  const { results: planets, count } = await getData(query, page)

  const totalPages = Math.ceil(count / 10)

  return (
    <div>
      <HeroSection>
        This page is demonstrating <Highlight className="text-black dark:text-white">pagination</Highlight> in
        an RSC way!
        <div>
          <span className="text-sm font-normal italic leading-none">
            Pagination on server components is a bit different then on the traditional client components.
          </span>
        </div>
      </HeroSection>
      <div className="mx-auto max-w-[1000px] pb-20">
        <AppPagination totalPages={totalPages} />
        <Suspense key={query + page}>
          <table className="hidden min-w-full bg-secondary md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Planet
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Rotation Period
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Diameter
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Climate
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Terrain
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Population
                </th>
              </tr>
            </thead>
            <tbody>
              {planets.map((planet: any) => (
                <tr
                  key={planet.name}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">{planet.name}</td>
                  <td className="whitespace-nowrap px-3 py-3">{planet.rotation_period}h</td>
                  <td className="whitespace-nowrap px-3 py-3">{planet.diameter}km</td>
                  <td className="whitespace-nowrap px-3 py-3">{planet.climate}</td>
                  <td className="whitespace-nowrap px-3 py-3">{planet.terrain}</td>
                  <td className="whitespace-nowrap px-3 py-3">{planet.population}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Suspense>
      </div>
    </div>
  )
}
