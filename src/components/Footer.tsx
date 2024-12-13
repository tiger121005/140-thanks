import Image from 'next/image';

export default function Footer() {
    return (

        <footer className='bg-transparent'>
            <div className="w-full h-[6vw] relative z-30 overflow-hidden top-[1vw]">
                {/* 一番上の波 */}
                <div className="w-full absolute right-[2vw] bottom-0">
                    <svg className='animate-wave' xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" viewBox='0 0 3800 115'>
                        <path id="合体_12" data-name="合体 12" d="M1920,120V82.95H3840V120ZM0,120V82.95H1920V120Zm3200.9-37.051C3360,82.636,3360.3,0,3520,0c160,0,160,82.949,320,82.949Zm-640.907,0C2720,82.949,2720,0,2880,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C2080,82.949,2080,0,2240,0s160,82.949,320,82.949Zm-639.094,0C1440,82.636,1440.3,0,1600,0c160,0,160,82.949,320,82.949ZM640,82.949C800,82.949,800,0,960,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C160,82.949,160,0,320,0S480,82.949,640,82.949Z" className='fill-primary' />
                    </svg>
                </div>

                {/* 二番目の波 */}
                <div className="w-full absolute right-[-2vw] bottom-0">
                    <svg className='animate-wave' xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" viewBox='0 0 3800 115'>
                        <path id="合体_12" data-name="合体 12" d="M1920,120V82.95H3840V120ZM0,120V82.95H1920V120Zm3200.9-37.051C3360,82.636,3360.3,0,3520,0c160,0,160,82.949,320,82.949Zm-640.907,0C2720,82.949,2720,0,2880,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C2080,82.949,2080,0,2240,0s160,82.949,320,82.949Zm-639.094,0C1440,82.636,1440.3,0,1600,0c160,0,160,82.949,320,82.949ZM640,82.949C800,82.949,800,0,960,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C160,82.949,160,0,320,0S480,82.949,640,82.949Z" className='fill-accent' />
                    </svg>
                </div>

                {/* 三番目の波 */}

                <div className="w-full absolute right-0 bottom-0">
                    <svg className='animate-wave' xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" viewBox='0 0 3800 115'>
                        <path id="合体_12" data-name="合体 12" d="M1920,120V82.95H3840V120ZM0,120V82.95H1920V120Zm3200.9-37.051C3360,82.636,3360.3,0,3520,0c160,0,160,82.949,320,82.949Zm-640.907,0C2720,82.949,2720,0,2880,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C2080,82.949,2080,0,2240,0s160,82.949,320,82.949Zm-639.094,0C1440,82.636,1440.3,0,1600,0c160,0,160,82.949,320,82.949ZM640,82.949C800,82.949,800,0,960,0c159.7,0,160,82.636,319.1,82.949Zm-640,0C160,82.949,160,0,320,0S480,82.949,640,82.949Z" fill="#f191ab" />
                    </svg>
                </div>
            </div>


            <div className='relative z-30 bg-[#F191AB] pt-16 pb-10 flex flex-col items-center'>
                <Image src='/assets/svg/title-logo-white.svg' alt='第140回明大祭' width={500} height={500} className='object-contain max-w-60 py-14' />
                <div className='text-white'>継続</div>
                <div className='text-[10px] font-medium lg:gap-8 flex justify-center mb-14 text-white sm:gap-4 md:text-base sm:text-sm'>
                    <p>梅山翔央</p>
                    <p>鈴木雄大</p>
                    <p>丸山彩羽</p>
                    <p>髙橋美結</p>
                </div>
                <div className='text-white'>新規</div>
                <div className="text-[10px] font-medium lg:gap-8 flex justify-center mb-14 text-white sm:gap-4 md:text-base sm:text-sm">
                    <p>伊藤汰海</p>
                    <p>及川達也</p>
                    <p>武田三都紀</p>
                    <p>畑ひとみ</p>
                    <p>東海敦子</p>
                </div>
                <div className='flex justify-center text-sm text-white font-copyRight font-bold'>
                    <p>©第140回Web部門新規</p>
                </div>
            </div>
        </footer>
    );
}