"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from './TabButton';

const AboutSection = () => {
  const [tab, setTab] = useState('education');
  const [isPending, startTransition] = useTransition();
  
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  const TAB_DATA = [
    {
      title: "学歴",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>永進専門大学、コンピューター情報学部卒業(2018年 2月)</li>
        </ul>
      )
    },
    {
      title: "資格",
      id: "cetification",
      content: (
        <ul className="list-disc pl-2">
          <li>日本語能力試験（JLPT） N2 (2016年)</li>
          <li>Linux LPIC 1 (2022年)</li>
        </ul>
      )
    },
    {
      title: "履歴",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>株式会社ユナイテッドブレイズ (2018 ~ 2020年 9月)</li>
          <li>株式会社10ANTZ (2020年 10月 ~ 在職中 )</li>
        </ul>
      )
    }
  ]
  
  return (
    <section id="about" className="text-white">
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
          <Image src="/images/computer.jpg" width={500} height={500} />
          <div className="mt-4">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
              I am a full stack web developer with a passion from createing
              interative and responsive web applications. I have experience working with Javascript, Vue, Vuex, pinia, React, Redux, React-Hook, Node.js, Prisma, Nuxt.js
              Next.js, TailWindCSS, Sass, HTML, CSS, GIT, Firbase, AWS, Docker, Supabase, PostgreSQL, php, Laravel, monogoDB, MySQL, Flutter and Dart.
            </p>
            <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>履歴</TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>学歴</TabButton>
              <TabButton selectTab={() => handleTabChange("cetification")} active={tab === "cetification"}>資格</TabButton>
            </div>
            <div className="mt-8">{ TAB_DATA.find((t) => t.id === tab).content }</div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection;
