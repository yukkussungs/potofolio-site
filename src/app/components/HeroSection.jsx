"use client";
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

  const onDonwloadPage = () => {
    window.open('https://nkciiupyxwridbytkhcr.supabase.co/storage/v1/object/public/potofolio-files/careerSheet(Shin%20Woosung).zip?t=2024-04-06T08%3A29%3A22.825Z', '_blank');
  }
    return (
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Nice to meet you, I&apos;m {" "}</span> 
              <br/>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Woosung',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Web Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Mobile Developer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <div>
              {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me</button> */}
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3" onClick={() => onDonwloadPage()}>
                <span className="block bg-[#121212] hober:bg-slate-800 rounded-full px-5 py-2">履歴書＆職務経歴書はこちら</span>
              </button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-3 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                src="/images/programer.png" 
                alt="programer image"
                width={300} height={300}
              />
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroSection;