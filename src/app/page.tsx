import { HeroSection } from '@/components/hero-section'
import { Highlight } from '@/components/ui/hero-highlight'

export default function Home() {
  return (
    <div>
      <HeroSection>
        This homepage is utilizing{' '}
        <Highlight className="text-black dark:text-white">static rendering</Highlight> for caching on CDNs!
        <div>
          <small className="text-sm font-normal italic leading-none">Static pages allow full page SEO.</small>
        </div>
      </HeroSection>
      <div className="mx-auto max-w-[900px] pb-20">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          With Static Rendering, routes are rendered at build time, or in the background after data
          revalidation. The result is cached and can be pushed to a Content Delivery Network (CDN). This
          optimization allows you to share the result of the rendering work between users and server requests.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Static rendering is useful when a route has data that is not personalized to the user and can be
          known at build time, such as a static blog post or a product page.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Basically, these pages are generated at build time and when requested, the server returns already
          renderd HTML, CSS and other files. These files are further cached on CDNs all around the world so
          that requests don&apos;t event get to our server but rather get returned from a CDN server.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          By having prerendered pages that are immediately available as HTML/CSS files, this allows web
          crawlers to see the content of the page (prebuilt HTML) and therefore allow the pages to be SEO
          compatible. When using client side rendering like a traditional React SPA, the HTML that a crawler
          would see would be an empty HTML with a div element that has an{' '}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            id=&apos;root&apos;
          </code>
        </p>
      </div>
    </div>
  )
}
