"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from './TabButton';

const AboutSection = () => {
  const [tab, setTab] = useState('experience');
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
          <li>{`株式会社ユナイテッドブレイズ (2018 ~ 2020年 9月)`}</li>
          <li>{`株式会社10ANTZ (2020年 10月 ~ 在職中 )`}</li>
        </ul>
      )
    }
  ]
  
  return (
    <section id="about" className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
          <Image src="/images/computer.jpg" width={500} height={500} alt="computer" />
          <div className="mt-4">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
            {`こんにちは、私は6年の経験を持つウェブ開発者です。私はJLPT N2の資格を有し、日本国内での6年間の社会経験を持っています。これにより、コミュニケーション能力だけでなく、ビジネス会話もスムーズに行える日本語スキルを身につけました。
              現在は、ウェブクライアントリーダーの開発者として職場で活動しており、様々なプロジェクトを主導しています。ウェブアプリケーションやウェブサイトの開発に深い関心を持ち、インタラクティブでレスポンシブなユーザーエクスペリエンスを提供するために努力しています。
            `}
            <br/>
            {`私の技術的なスキルには、JavaScript、Vue、Vuex、Pinia、React、Redux、Node.js、Prisma、Nuxt.js、Next.js、TailWindCSS、Sass、HTML、CSS、GIT、Firebase、AWS、Docker、Supabase、PostgreSQL、PHP、Laravel、MongoDB、MySQL, PWA, Flutter などが含まれます。`}
            <br/>
            {`また、最近ではAI分野への関心が高まっており、個人的にAIプロジェクトを探求しています。最近では、Langchainを使用してAI開発を学んでおり、これを通じて新しい技術や挑戦に対する情熱を継続的に育てています。`}
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
