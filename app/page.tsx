import { Hole } from '@/components/hole'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <div
      className="home-grid grid grid-cols-12 grid-rows-[repeat(9,minmax(100px,1fr))]
        gap-1 bg-[#1b5691] bg-[url('/img-noise-361x370_blue.png')] p-4
        font-[family-name:var(--font-geist-sans)]"
    >
      <Hole className='hero'>
        <Card>
          <h1 className='text-center text-2xl font-bold'>
            Welcome to Our Site
          </h1>
          <p className='text-center text-gray-600'>
            We build awesome web experiences.
          </p>
        </Card>
      </Hole>

      <Hole className='portfolio'>
        <Card>
          <h2 className='text-lg font-semibold'>Our Work</h2>
          <p>Check out some of our latest projects.</p>
          <button className='mt-2 rounded-lg bg-purple-500 px-4 py-2 text-white'>
            View Portfolio
          </button>
        </Card>
      </Hole>

      <Hole
        className='topic1'
        hPercent={90}
      >
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

      <Hole className='extra1'>
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

      <Hole
        className='project1'
        hPercent={90}
      >
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

      <Hole
        className='topic2'
        hPercent={85}
        wPercent={110}
      >
        <Card>
          <blockquote className='italic'>
            &ldquo;This is the best platform we have ever used! 10/10
            recommended.&rdquo;
          </blockquote>
          <p className='mt-2 text-right font-bold'>— Happy Client</p>
        </Card>
      </Hole>

      <Hole
        className='project2'
        wPercent={90}
      >
        <Card>
          <h2 className='text-lg font-semibold'>Contact Us</h2>
          <p>Email: contact@company.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </Card>
      </Hole>

      <Hole
        className='topic3'
        hPercent={110}
      >
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

      <Hole className='project3'>
        <Card>
          <h2 className='text-lg font-semibold'>Meet Our Team</h2>
          <p>
            We&apos;re a group of passionate developers and designers.
          </p>
        </Card>
      </Hole>

      <Hole
        className='resume'
        wPercent={90}
      >
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

      <Hole
        className='footer'
        hPercent={75}
        wPercent={90}
      >
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
