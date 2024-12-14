'use client'

import TitleFirst from "@/components/title/TitleFirst";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useGetElementProperty } from "../../../../utils/useGetElementProperty";

export default function Page() {
    const pathname = usePathname().replace('/people/', '')
    const [people, setPeople] = useState<string>("")
    const [contents, setContents] = useState<{name: string, image: string, content: string}[]>([])
    useEffect(() => {
        if (pathname === 'iroha') {
            setPeople("いろはさん")
            setContents([
                { name: "たいが", image: "taiga", content: "2年間お疲れ様でした！Web部門の癒しで、繁忙期にはたくさん労っていただいてめっちゃ救われました笑。いろはさんが撮る写真はみんな笑顔で、いろんな人の笑顔を引き出して周りを幸せにする力は本当にすごいと思います。これからもたくさん話しましょう！"},
                { name: "たつや", image: "tatsuya", content: "サイトのデザインの仕方などを最初から教えて下さりありがとうございました。新規の面倒をよく見て下さりありがとうございました。至らない点も多々ありましたがありがとうございました。"},
                { name: "みつき", image: "mitsuki", content: "最初から新規を気にかけて下さって、本当にありがとうございました泣しゃぶ葉の時は子供扱いされてましたが、私から見たらずっとお姉さんでした！いろはさんは他部門との架け橋的存在で、いろはさんみたいに社交的になりたいなと尊敬してました、、女子会楽しみです！"},
                { name: "ひとみ", image: "hitomi", content: "短い間でしたが大変お世話になりました。いつも優しく接してくれて女子力も高くてかわいくて尊敬してました。夏合宿の時も同じ班になってたくさん写真取れて嬉しかったです。不甲斐ない後輩であったと思いますが沢山優しく指導していただきありがとうございました。"},
                { name: "あつこ", image: "atsuko", content: "ありがとうありがとうありがとうありがとうありがとうありがとうありがとうありがとうありがとう"},
            ])
        } else if (pathname === 'sho') {
            setPeople("しょうさん")
            setContents([
                { name: "たいが", image: "taiga", content: "２年間お疲れ様でした！5月の末に新規が部門に合流してからたくさんお世話になりました。会議終わりに行ったラーメンだったり明大前で飲んだり本祭期間中も翔也さん家に泊まったりと、明実の思い出のほとんどにしょうさんの顔が浮かびます。来年もサポートよろしくお願いします！" },
                { name: "たつや", image: "tatsuya", content: "Web部門が始まった時からよく面倒を見て下さりありがとうございました。ご飯とか連れて行って下さり楽しかったです。いろいろ迷惑をおかけしましたが、部門長お疲れ様でした。" },
                { name: "みつき", image: "mitsuki", content: "改めて部門長お疲れ様でした！いつも優しく接して下さるしょうさんに甘えてしまった部分もありましたが、最後までweb部門でいさせて下さってありがとうございました泣しょうさんが部門長で本当に良かったです。第四段階のしょうさん楽しみにしてます〜！" },
                { name: "ひとみ", image: "hitomi", content: "短い間でしたが色々と勉強させていただきありがとうございました。コードで分からない点があった時、優しく教えていただきとても嬉しかったです。たくさん迷惑をおかけしたと思いますがこれまでの指導本当にありがとうございました。" },
                { name: "あつこ", image: "atsuko", content: "ありがとうありがとうありがとうありがとうありがとうありがとうありがとうありがとうありがとう" },
            ])
        } else if (pathname === 'yudai') {
            setPeople("ゆうだいさん")
            setContents([
                { name: "たいが", image: "taiga", content: "２年間お疲れ様でした！ゆうだいさんのフランクに接する態度が新規全員に親しみやすさを与えてくれました！ネットミームのイメージしかないですが、意外と面倒見が良くて、新規をいろんなところで助けてくれました！ありがとうございました！今度飲みいきましょう！" },
                { name: "たつや", image: "tatsuya", content: "毎回場を和ませて下さりありがとうございました。よく新規の面倒を見て下さってありがとうございました。いい意味で緊張感なく話すことができて楽しかったです。" },
                { name: "みつき", image: "mitsuki", content: "毎回何かしら私にツッコミしてくれたのが凄く嬉しかったです、笑 いつも「自分は必要ない」とか言っていましたが、ゆうだいさんは140webに必要な存在だったな、とつくづく思います。いつかゆうだいさんの荒い運転を体験させてください！" },
                { name: "ひとみ", image: "hitomi", content: "短い間でしたが大変お世話になりました。会議などでも明るく場を盛り上げたりなどとても頼もしい存在でした。今まで会ったことないタイプの人だったので新鮮で面白かったです。これからも持ち前の明るさを活かして頑張ってください。" },
                { name: "あつこ", image: "atsuko", content: "ありがとうありがとうありがとうありがとうありがとうありがとうありがとうありがとうありがとう" },
            ])
        } else if (pathname === 'miyu') {
            setPeople("みゆうさん")
            setContents([
                { name: "たいが", image: "taiga", content: "２年間お疲れ様でした！明実の説明会でみゆうさんと話したのが懐かしいです笑 帰りの電車が同じで、一緒に帰りながらいろんな話ができたの楽しかったです！紺白のUIめちゃめちゃ良くて勉強になります。これまで本当にお世話になりました！" },
                { name: "たつや", image: "tatsuya", content: "新規の面倒をよく見て下さりありがとうございました。至らない点も多々ありましたがありがとうございました。今までお疲れ様でした。" },
                { name: "みつき", image: "mitsuki", content: "しつこいと思いますが、やっぱり性格が似ていて、凄く話しやすくて相談しやすい大好きな先輩です！静かなようで、実は誰よりも全体のことを考えている所が素敵でした。知らぬ間に仕事もこなしていて、私はいつもびっくりしてました笑沢山お世話になりました、ありがとうございました！" },
                { name: "ひとみ", image: "hitomi", content: "短い間でしたが大変お世話になりました。本祭の時一緒に屋台まわってご飯食べれてとても楽しかったです。優しくて可愛いくて頼りがいのあるみゆうさんをとても尊敬していました。たくさんお話しして仲良くなれて嬉しかったです。これからもみゆうさんのご活躍を陰ながら応援しています。" },
                { name: "あつこ", image: "atsuko", content: "ありがとうありがとうありがとうありがとうありがとうありがとうありがとうありがとうありがとう" },
            ])
        }
    }, [pathname])
    return (
        <div className="w-full">
            <div className="h-screen flex flex-col">
                <TitleFirst>{people}</TitleFirst>
                <Icon name={pathname} />
                <Scroll />
            </div>
            <div className="flex flex-col gap-32">
                <div className="h-5" />
                {contents.map((content, index) => (
                    <Card key={index} name={content.name} image={content.image} content={content.content} />
                ))}
                <div className="h-1" />
            </div>
            <h1 className="text-primary text-5xl text-center mb-20 font-bold">Thank You！</h1>
        </div>
    )
}

function Icon({name}: {name: string}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image src={`/assets/images/people/${name}.png`} alt="" width={200} height={200} className="rounded-full object-cover max-w-[35vw]" />
            <p className="mt-6">
                {
                    name === 'iroha' ? "かわいい担当"
                    : name === 'sho' ? "Leader"
                    : name === 'yudai' ? "Cookie Creator"
                    : name === 'miyu' ? "おしゃれ番長"
                    : ""
                }
            </p>
        </div>
    )
}

function Scroll() {
    return (
        <div className="mt-44">
            <h1 className="text-center text-3xl text-primary">scroll</h1>
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 20 }}
                transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    repeatType: "reverse"
                }}
            />
            <h1 className="text-center text-3xl text-primary">↓</h1>
        </div>
    )
}

function Card({name, image ,content}: {name: string, image: string, content: string}) {
    const ref = useRef(null);
    const { getElementProperty } = useGetElementProperty<HTMLDivElement | null>(ref);
    const [cardVisible, setCardVisible] = useState(false);

    const handleScroll = useCallback(() => {
        if (typeof window === 'undefined') return;
        const { innerHeight } = window;
        if (getElementProperty("y") >= innerHeight - 150) {
            setCardVisible(false);
        } else {
            setCardVisible(true);
        }
    }, []);
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    
    return (
        <div ref={ref} className="w-full overflow-hidden" >
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={
                    cardVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 100 }
                }
                transition={{ duration: 0.7 }}
                className=" bg-secondary-100 shadow-md rounded-2xl m-8 max-w-[510px]"
            >
                <div className="flex overflow-hidden rounded-2xl">
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className="flex">
                                <div className="sm:w-[17px] sm:h-[28px] lg:w-[28px] lg:h-[40px] bg-primary rounded-b-full shadow-sm" />
                                <div className="sm:w-[17px] sm:h-[24px] lg:w-[28px] lg:h-[35px] bg-secondary rounded-b-full shadow-sm" />
                                <div className="sm:w-[17px] sm:h-[20px] lg:w-[28px] lg:h-[30px] bg-accent rounded-b-full shadow-sm" />
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-center justify-around" >
                    <div className="flex flex-col items-center justify-center">
                        <Image src={`/assets/images/people/${image}.png`} alt="" width={200} height={200} className="rounded-2xl object-cover max-w-[35vw] m-5" />
                        <div className="mb-5">{name}</div>
                    </div>
                    <div className="p-4 text-sm">
                        {content}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}