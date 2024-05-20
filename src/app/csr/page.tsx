'use client'

import { HeroSection } from '@/components/hero-section'
import { Highlight } from '@/components/ui/hero-highlight'
import { setTextMessage } from '@/store/app.slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'

export default function Csr() {
  const dispatch = useAppDispatch()
  const message = useAppSelector((store) => store.app.textMessage)

  useEffect(() => {
    dispatch(setTextMessage('Hello from CSR page!'))
  }, [dispatch])

  return (
    <div>
      <HeroSection>
        This page is utilizing{' '}
        <Highlight className="text-black dark:text-white">client side rendering</Highlight>!
        <div>
          <small className="text-sm font-normal italic leading-none">
            Client side pages allow full use of React and it&apos;s features.
          </small>
        </div>
      </HeroSection>
      <div className="mx-auto max-w-[900px] pb-20">
        <p>Message: {message}</p>
        There are a couple of benefits to doing the rendering work on the client, including:
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Interactivity: Client Components can use state, effects, and event listeners, meaning they can
            provide immediate feedback to the user and update the UI.
          </li>
          <li>
            Browser APIs: Client Components have access to browser APIs, like geolocation or localStorage.
          </li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          To reduce the Client JavaScript bundle size, we recommend moving Client Components down your
          component tree.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          For example, you may have a Layout that has static elements (e.g. logo, links, etc) and an
          interactive search bar that uses state.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Instead of making the whole layout a Client Component, move the interactive logic to a Client
          Component (e.g.{' '}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {'<SearchBar />'}
          </code>
          ) and keep your layout as a Server Component. This means you don&apos;t have to send all the
          component Javascript of the layout to the client.
        </p>
      </div>
    </div>
  )
}
