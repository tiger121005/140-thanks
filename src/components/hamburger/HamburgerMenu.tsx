import React, { useState } from "react"; // useStateをインポート
import TransitionButton from "../TransitionButton";
import HamburgerContent from "./HamburgerContent";
import { HamburgerAccordion } from "./Accordion"; // これが正しくエクスポートされていることを確認
import Link from "next/link";
import HamburgerTitle from "./HamburgerTitle";
import { TopHamburgerLink } from "./HamburgerLink";

export function HamburgerMenuPC() {
    return (
        <div className="flex justify-center text-white pb-20">
            <div className="flex flex-col items-start">
                <div className="pl-10 mb-5">
                    <TopHamburgerLink href="/">TOP</TopHamburgerLink>
                </div>
                <div className="max-w-[920px] flex flex-wrap px-10 gap-x-16 gap-y-10 z-30" >
                    <HamburgerContent title="ご来場のみなさまへ" content={[
                        { title: 'ご来場のみなさまへのお願い', href: '/announce' },
                        { title: 'タイムテーブル', href: '/TT' },
                        { title: 'キャンパスマップ', href: '/map' },
                        { title: 'アクセス', href: '/access' },
                        { title: 'パンフレット', href: '/pamphlet' },
                        { title: 'よくある質問', href: '/faq' }
                    ]} />
                    {/* <HamburgerContent title="実行委員会企画" content={[
                        { title: 'Opening', href: '/opening' },
                        { title: '明治紺白大合戦', href: '/fight' },
                        { title: '明愛祭', href: '/idol' },
                        { title: '中夜祭', href: '/midnight' },
                        { title: 'University Got Talent', href: '/talent' },
                        { title: 'Ending', href: '/ending' },
                        { title: '明大祭×京王電鉄コラボレーション', href: '/keio' }
                    ]} /> */}
                    <HamburgerContent title="特集" content={[
                        { title: '第140回明大祭テーマ', href: '/theme' },
                        { title: '参加団体特集', href: '/feature' },
                        { title: '校友インタビュー', href: '/interview' },
                        { title: '大型ビジョン', href: '/vision' },
                        { title: '明大祭グッズ', href: 'goods' },
                        { title: '他大学FSR', href: '/fsr' }
                    ]} />
                    <HamburgerContent title='参加団体・参加者のみなさまへ' content={[
                        { title: '参加団体・参加者のみなさまへ', href: '/participate' },
                        { title: '屋外ステージで企画をおこなう方へ', href: '/stage' },
                        { title: '教室で企画をおこなう方へ', href: '/room' },
                        { title: '模擬店で企画をおこなう方へ', href: '/booth' }]} />
                    <HamburgerContent title='明大祭に関わってくださるみなさまへ' content={[
                        { title: '界隈地域のみなさまへ', href: '/area' },
                        { title: '校友のみなさまへ', href: '/alumni' },
                        { title: '企業のみなさまへ', href: '/company' },
                        { title: 'メディアのみなさまへ', href: '/media' }]} />
                    <HamburgerContent title='ご協賛一覧' content={[
                        { title: 'ご協賛企業一覧', href: '/company-list' },
                        { title: 'ご協賛店舗一覧', href: '/store-list' },
                        { title: 'ご賛助ご芳名', href: '/alumni-list' }]} />
                </div>
                <div className="flex justify-start gap-14 pt-10 px-10">
                    <TransitionButton href="/about">明大祭とは・委員長挨拶</TransitionButton>
                    <TransitionButton href="search">企画を探す</TransitionButton>
                </div>
            </div>
        </div>
    );
}

export function HamburgerMenuSP() {
    const [openId, setOpenId] = useState<number | null>(null); // 開いているアコーディオンのIDを管理

    const toggleAccordion = (id: number) => {
        setOpenId(prev => (prev === id ? null : id)); // 開閉のトグル
    };

    return (
        <div className="text-white flex flex-col items-start pt-14 pl-10">
            <TopHamburgerLink href="/">TOP</TopHamburgerLink>
            <div className="flex flex-col gap-7 mt-8">
                <HamburgerAccordion
                    title="ご来場のみなさまへ"
                    isOpen={openId === 1}
                    onClick={() => toggleAccordion(1)}
                    hamburgerContent={[
                        { title: 'ご来場のみなさまへのお願い', href: '/announce' },
                        { title: 'タイムテーブル', href: '/TT' },
                        { title: 'キャンパスマップ', href: '/map' },
                        { title: 'アクセス', href: '/access' },
                        { title: 'パンフレット', href: '/pamphlet' },
                        { title: 'よくある質問', href: '/faq' }
                    ]}
                />
                <HamburgerAccordion
                    title="特集"
                    isOpen={openId === 3}
                    onClick={() => toggleAccordion(3)}
                    hamburgerContent={[
                        { title: '第140回明大祭テーマ', href: '/theme' },
                        { title: '参加団体特集', href: '/feature' },
                        { title: '校友インタビュー', href: '/interview' },
                        { title: '大型ビジョン', href: '/vision' },
                        { title: '明大祭グッズ', href: '/goods' },
                        { title: '他大学FSR', href: '/fsr' }
                    ]}
                />
                <HamburgerAccordion
                    title='参加団体・参加者のみなさまへ'
                    isOpen={openId === 4}
                    onClick={() => toggleAccordion(4)}
                    hamburgerContent={[
                        { title: '参加団体・参加者のみなさまへ', href: '/participate' },
                        { title: '屋外ステージで企画をおこなう方へ', href: '/stage' },
                        { title: '教室で企画をおこなう方へ', href: '/room' },
                        { title: '模擬店で企画をおこなう方へ', href: '/booth' }
                    ]}
                />
                <HamburgerAccordion
                    title='明大祭に関わってくださるみなさまへ'
                    isOpen={openId === 5}
                    onClick={() => toggleAccordion(5)}
                    hamburgerContent={[
                        { title: '界隈地域のみなさまへ', href: '/area' },
                        { title: '校友のみなさまへ', href: '/alumni' },
                        { title: '企業のみなさまへ', href: '/company' },
                        { title: 'メディアのみなさまへ', href: '/media' }
                    ]}
                />
                <HamburgerAccordion
                    title='ご協賛一覧'
                    isOpen={openId === 6}
                    onClick={() => toggleAccordion(6)}
                    hamburgerContent={[
                        { title: 'ご協賛企業一覧', href: '/company-list' },
                        { title: 'ご協賛店舗一覧', href: '/store-list' },
                        { title: 'ご賛助ご芳名', href: '/alumni-list' }
                    ]}
                />
                <Link href="/about"><HamburgerTitle>明大祭とは・委員長挨拶</HamburgerTitle></Link>
                <Link href="/search"><HamburgerTitle>企画を探す</HamburgerTitle></Link>
            </div>
        </div>
    );
}
