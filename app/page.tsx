"use client"

import { useState } from 'react';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Home() {
  const codeSnippet = 'npx create-next-app@latest';
  const [isCopied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <main>
      <nav className='bg-[rgba(0,0,0,0.5)] backdrop-blur-[5px] items-center flex h-[50px] w-full border-b-[#181818] border-b-[1px] fixed top-0 left-0 right-0 justify-between'>
        <p className='text-white md:pl-[100px] pl-[35px] text-[15px] bg-transparent selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>Nextjs Outlined</p>
        <Link href='https://nextjs.org/' passHref>
          <div className='text-white hover:text-[#9d9d9d] transition-[1s] cursor-pointer mr-[35px] md:mr-[100px]'>
            <BsBoxArrowUpRight style={{ fontSize: '1.2em' }} />
          </div>
        </Link>
      </nav>

      <p className='text-white md:pl-[100px] pl-[35px] text-[30px] pr-[35px] font-bold pt-[65px] selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>
        The React Framework for the Web - Nextjs
      </p>

      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[15px] pt-[20px] md:pr-[100px] selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>
        Welcome to the world of Next.js, where React development gets a supercharge!<br />This crash course will equip you with the essential knowledge to navigate this exciting framework, even if you're starting fresh.
      </p>

      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[20px] pt-[25px] md:pr-[100px] font-semibold selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>
        What is Next.js?
      </p>
      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[15px] pt-[5px] md:pr-[100px] selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>
        Think of Next.js as a power-up for your React projects.<br />It builds upon the core React library, adding functionalities that make your life easier and your websites faster, sleeker, and more SEO-friendly.
      </p>

      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[20px] pt-[25px] md:pr-[100px] font-semibold selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>
        Main Features
      </p>
      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[15px] pt-[5px] md:pr-[100px] selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>
        <strong>Pages:</strong> These are the building blocks of your Next.js app, each representing a distinct section or route. Think of them as your website's individual rooms. <br />
        <strong>Server-Side Rendering (SSR):</strong> This technique pre-renders pages on the server, delivering them instantly to users. It's great for SEO and initial page load times. <br />
        <strong>Static Site Generation (SSG):</strong> This approach pre-renders pages at build time, making them static HTML files. Superfast loading is the name of the game here! <br />
        <strong>Data Fetching:</strong> Need dynamic data like blog posts or product listings? Next.js makes fetching data from APIs and other sources a breeze.
      </p>

      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[20px] pt-[25px] md:pr-[100px] font-semibold selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>
        Getting Started
      </p>
      <p className='text-white md:pl-[100px] pl-[35px] pr-[35px] text-[15px] pt-[5px] md:pr-[100px] selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>
        Creating a Next.js app is surprisingly easy. You can use the Next.js Installation Command-line tool
      </p>
      <div className="mb-[100px]">
        <pre className="pt-[15px] md:pl-[100px] pl-[35px] flex items-center">
          <code className='text-white code-gradient pl-[15px] pr-[15px] pt-[15px] pb-[15px] mr-[20px] rounded-[10px] border-[1px] border-[#184b43] selection:bg-[#0e1f1c] selection:text-[#86ffd3]'>
            npx create-next-app@latest
          </code>
          <div
            className={`text-[#257565] cursor-pointer hover:text-[#44a692] transition-[1s] ${isCopied ? 'opacity-50' : ''}`}
            onClick={handleCopyClick}>
            <IoCopyOutline style={{ fontSize: '1.7em' }} />
          </div>
        </pre>
      </div>
    </main>
  )
}
