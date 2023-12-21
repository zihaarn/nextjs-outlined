import Image from 'next/image'
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <nav className='bg-[rgba(0,0,0,0.5)] backdrop-blur-[5px] items-center flex h-[50px] w-full border-b-[#181818] border-b-[1px] fixed top-0 left-0 right-0 justify-between'>
        <p className='text-white md:pl-[100px] pl-[35px] text-[15px] bg-transparent'>Nextjs Outlined</p>
        <Link href='https://nextjs.org/' passHref>
          <div className='text-white hover:text-[#9d9d9d] transition-[1s] cursor-pointer mr-[35px] md:mr-[100px]'>
            <BsBoxArrowUpRight style={{ fontSize: '1.2em' }} />
          </div>
        </Link>
      </nav>

      <p className='text-white md:pl-[100px] pl-[35px] text-[30px] pr-[35px] font-bold pt-[65px]'>
        The React Framework for the Web - Nextjs
      </p>

      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[15px] pt-[20px] md:pr-[100px]'>
        Welcome to the world of Next.js, where React development gets a supercharge!<br />This crash course will equip you with the essential knowledge to navigate this exciting framework, even if you're starting fresh.
      </p>

      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[20px] pt-[25px] md:pr-[100px] font-semibold'>
        What is Next.js?
      </p>
      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[15px] pt-[5px] md:pr-[100px]'>
        Think of Next.js as a power-up for your React projects.<br />It builds upon the core React library, adding functionalities that make your life easier and your websites faster, sleeker, and more SEO-friendly.
      </p>

      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[20px] pt-[25px] md:pr-[100px] font-semibold'>
        Main Features
      </p>
      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[15px] pt-[5px] md:pr-[100px]'>
        <strong>Pages:</strong> These are the building blocks of your Next.js app, each representing a distinct section or route. Think of them as your website's individual rooms. <br />
        <strong>Server-Side Rendering (SSR):</strong> This technique pre-renders pages on the server, delivering them instantly to users. It's great for SEO and initial page load times. <br />
        <strong>Static Site Generation (SSG):</strong> This approach pre-renders pages at build time, making them static HTML files. Superfast loading is the name of the game here! <br />
        <strong>Data Fetching:</strong> Need dynamic data like blog posts or product listings? Next.js makes fetching data from APIs and other sources a breeze.
      </p>

      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[20px] pt-[25px] md:pr-[100px] font-semibold'>
        Getting Started
      </p>
      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[15px] pt-[5px] md:pr-[100px]'>
        Creating a Next.js app is surprisingly easy. You can use the Next.js Installation Command-line tool
      </p>
      <div className="mb-[100px]">
        <pre className="text-white p-4 md:pl-[100px] pl-[35px]">
          <code className='bg-[#1e1e1e] pl-[20px] pr-[20px] pt-[15px] pb-[15px] rounded-[5px]]'>
            npx create-next-app@latest
          </code>
        </pre>
      </div>
    </main>
  )
}
