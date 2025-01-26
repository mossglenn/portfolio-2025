import { Hole } from '@/components/hole'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <div
      className="home-grid grid grid-cols-12 grid-rows-[repeat(9,minmax(100px,1fr))]
        gap-4 bg-[#1b5691] bg-[url('/img-noise-361x370_blue.png')] p-8
        font-[family-name:var(--font-geist-sans)]"
    >
      {/* Hero Section */}
      <Hole className='area-a'>
        <Card>
          <h1 className='text-center text-2xl font-bold'>
            Welcome to Our Site
          </h1>
          <p className='text-center text-gray-600'>
            We build awesome web experiences.
          </p>
        </Card>
      </Hole>

      {/* Image Section */}
      <Hole className='area-x'>
        <Card>
          <Image
            src='/next.svg'
            alt='Vercel Logo'
            width={100}
            height={100}
            className='mx-auto'
          />
          <p className='mt-2 text-center'>Powered by Next.js</p>
        </Card>
      </Hole>

      {/* Call-to-Action */}
      <Hole className='area-y'>
        <Card>
          <h2 className='text-xl font-semibold'>Get Started</h2>
          <p>Click below to explore our features.</p>
          <button className='mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white'>
            Learn More
          </button>
        </Card>
      </Hole>

      {/* Services List */}
      <Hole className='area-b'>
        <Card>
          <h2 className='text-lg font-semibold'>Our Services</h2>
          <ul className='mt-2 list-disc pl-5'>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>Hosting Solutions</li>
          </ul>
        </Card>
      </Hole>

      {/* Testimonial */}
      <Hole className='area-c'>
        <Card>
          <blockquote className='italic'>
            &ldquo;This is the best platform we have ever used! 10/10
            recommended.&rdquo;
          </blockquote>
          <p className='mt-2 text-right font-bold'>— Happy Client</p>
        </Card>
      </Hole>

      {/* Contact Section */}
      <Hole className='area-d'>
        <Card>
          <h2 className='text-lg font-semibold'>Contact Us</h2>
          <p>Email: contact@company.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </Card>
      </Hole>

      {/* Newsletter Signup */}
      <Hole className='area-e'>
        <Card>
          <h2 className='text-lg font-semibold'>Stay Updated</h2>
          <input
            type='email'
            placeholder='Enter your email'
            className='mt-2 w-full rounded-lg border p-2'
          />
          <button className='mt-2 w-full rounded-lg bg-green-500 px-4 py-2 text-white'>
            Subscribe
          </button>
        </Card>
      </Hole>

      {/* Team Section */}
      <Hole className='area-f'>
        <Card>
          <h2 className='text-lg font-semibold'>Meet Our Team</h2>
          <p>
            We&apos;re a group of passionate developers and designers.
          </p>
        </Card>
      </Hole>

      {/* FAQ */}
      <Hole className='area-g'>
        <Card>
          <h2 className='text-lg font-semibold'>FAQ</h2>
          <details className='mt-2'>
            <summary className='cursor-pointer'>
              What services do you offer?
            </summary>
            <p className='mt-1 text-gray-600'>
              We offer web development, UI/UX design, and more.
            </p>
          </details>
        </Card>
      </Hole>

      {/* Fun Fact */}
      <Hole className='area-h'>
        <Card>
          <h2 className='text-lg font-semibold'>Fun Fact</h2>
          <p>
            Did you know? The first website was published in 1991.
          </p>
        </Card>
      </Hole>

      {/* Portfolio */}
      <Hole className='area-i'>
        <Card>
          <h2 className='text-lg font-semibold'>Our Work</h2>
          <p>Check out some of our latest projects.</p>
          <button className='mt-2 rounded-lg bg-purple-500 px-4 py-2 text-white'>
            View Portfolio
          </button>
        </Card>
      </Hole>

      {/* Social Media Links */}
      <Hole className='area-j'>
        <Card>
          <h2 className='text-lg font-semibold'>Follow Us</h2>
          <div className='mt-2 flex gap-4'>
            <a
              href='#'
              className='text-blue-600'
            >
              Twitter
            </a>
            <a
              href='#'
              className='text-red-600'
            >
              YouTube
            </a>
            <a
              href='#'
              className='text-blue-900'
            >
              LinkedIn
            </a>
          </div>
        </Card>
      </Hole>
    </div>
  )
}
