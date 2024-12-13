import IndexBG from "@/components/IndexBG";
import Loading from "@/components/Loading";
import HeroSection from "@/components/HeroSection";
import TitleIndex from "@/components/title/TitleIndex";
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
          <Pickup />
          <News />
          <Announce />
        </div>
      </div>
    </div>
  );
}

function Announce() {
  return (
    <div className="flex flex-col items-center w-full">
      <TitleIndex subTitle="タップしてみてね">Message </TitleIndex>
      <div className="grid grid-cols-2 mt-7 w-full aspect-square max-w-[500px]">
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
    <Link href={`/people/${ImageNames}`} className="hover:bg-gray-200 rounded-xl p-4">
      <Image
        src={`/assets/images/people/${ImageNames}.png`}
        alt=""
        width={500}
        height={500}
        className="sm:size-36 lg:size-44 mx-auto max-w-[30vw] max-h-[30vw] rounded-full aspect-square object-cover"
      />
      <p className="text-center sm:text-base lg:text-xl break-keep">{children}</p>
    </Link>
  )
}

function News() {
  return (
    <div className="lg:w-[750px] h-fit sm:w-[310px] flex flex-col items-center mb-32">
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
      <div className="mt-[180px] lg:mt-[280px]" />
    </div>
  )
}

