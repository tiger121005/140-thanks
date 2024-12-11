import IndexBG from "@/components/IndexBG";
import Loading from "@/components/Loading";
import HeroSection from "@/components/HeroSection";
import TransitionButton from "@/components/TransitionButton";
import TitleIndex from "@/components/TitleIndex";
import Pickup from "@/components/Pickup";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="w-[100vw]">
      <Loading />
      <IndexBG />
      <div>
        <div className="mt-[-46px] h-screen w-screen">
          <HeroSection />
        </div>
        <div className="w-screen flex flex-col items-center">
          <What />
          <Pickup />
          <Announce />
          <News />
        </div>
      </div>
    </div>
  );
}

function What() {
  return (
    <div className="mb-32">
      <div className="flex justify-center items-start">
        <Image src="/assets/images/svg/logo.svg" alt="" width={250} height={250} className="object-contain lg:max-w-60 sm:max-w-52" />
        <div className="flex flex-col items-end">
          <div className="text-primary font-bold lg:text-5xl sm:text-3xl">What&apos;s 明大祭?</div>
          <div className="text-accent text-xl font-semibold mb-3">明大祭とは・委員長挨拶</div>
          <div className="w-full h-2"></div>
          <TransitionButton href="/about">詳しく見る</TransitionButton>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Image src="/assets/images/svg/theme.svg" alt="" width={1000} height={1000} className="object-scale-down sm:max-w-60 lg:max-w-72 -mt-4 ml-20 -rotate-3" />
        <div className="-ml-28 lg:mt-1 sm:w-[137px] sm:h-[52px] lg:w-[200px] lg:h-[90px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 137.247 51.723">
            <line id="線_50" data-name="線 50" y1="21.258" x2="111.82" transform="translate(0.585 22.223)" fill="none" stroke="#64bdeb" strokeLinecap="round" strokeWidth="1" />
            <line id="線_51" data-name="線 51" y1="50.377" x2="98.716" transform="translate(37.858 0.673)" fill="none" stroke="#64bdeb" strokeLinecap="round" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function Announce() {
  return (
    <div className="flex flex-col items-center mb-20">
      <TitleIndex subTitle="140Web継続">For Senior </TitleIndex>
      <div className="grid grid-cols-2 gap-16 mt-7 px-5">
        <AnnounceBox ImageNames="sho">しょうさん</AnnounceBox>
        <AnnounceBox ImageNames="yudai">ゆうだいさん</AnnounceBox>
        <AnnounceBox ImageNames="miyu">みゆうさん</AnnounceBox>
        <AnnounceBox ImageNames="iroha">いろはさん</AnnounceBox>
      </div>
      <div className="w-full h-10"></div>
    </div>
  )
}

function AnnounceBox({ children, ImageNames }: { children: ReactNode, ImageNames: string }) {
  return (
    <Link href={`/people/${ImageNames}`}>
      <Image
        src={`/assets/images/people/${ImageNames}.png`}
        alt=""
        width={500}
        height={500}
        className="sm:size-36 lg:size-44 mx-auto rounded-full"
      />
      <p className="text-center sm:text-base lg:text-xl break-keep">{children}</p>
    </Link>
  )
}

function News() {
  return (
    <div className="lg:w-[750px] h-fit sm:w-[310px] flex flex-col items-center">
      <TitleIndex subTitle="おしらせ">News</TitleIndex>
      <div className="w-full relative flex justify-center sm:top-3 lg:top-5">
        <div className="bg-transparent lg:rounded-[50px] sm:rounded-[20px] border-primary lg:border-[6px] sm:border-[3px] lg:w-[650px] lg:h-[200px] sm:w-[270px] sm:h-[140px] absolute lg:top-[-20px] lg:left-[30px] sm:top-[-8px] sm:left-[12px]" />
        <div className="bg-transparent lg:rounded-[50px] sm:rounded-[20px] border-accent lg:border-[6px] sm:border-[3px] lg:w-[650px] lg:h-[200px] sm:w-[270px] sm:h-[140px] absolute lg:top-[20px] lg:right-[30px] sm:top-[8px] sm:right-[12px]" />
        <div className="bg-secondary lg:rounded-[50px] sm:rounded-[20px] border-secondary lg:border-[6px] sm:border-[3px] lg:w-[650px] lg:h-[200px] sm:w-[270px] sm:h-[140px] absolute" />
        <div className="bg-transparent lg:rounded-[40px] sm:rounded-[16px] border-white lg:border-4 sm:border-2 lg:w-[630px] lg:h-[180px] sm:w-[260px] sm:h-[130px] absolute lg:top-[10px] sm:top-[5px]" />
        <div className="flex flex-col justify-center items-center lg:w-[630px] lg:h-[195px] sm:w-[240px] sm:h-[135px] absolute text-white text-lg sm:px-5 lg:px-10">
          <div className="flex flex-col items-start lg:gap-6 sm:gap-3">
            <div className="flex sm:gap-3 lg:gap-1 flex-col w-auto font-medium">
              <div className="w-auto whitespace-nowrap text-base pt-[2px]">12/14 Sun.</div>
              <div className="w-auto ">
                ２年間お疲れ様でした！！！
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[180px] lg:mt-[280px]">
        <TransitionButton href="/news">詳しく見る</TransitionButton>
      </div>
    </div>
  )
}

