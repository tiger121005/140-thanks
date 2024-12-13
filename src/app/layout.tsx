import "./globals.css";
import { zenMaruGothicFont } from "../../utils/fonts";
import ConditionalLayout from "../components/ConditionalLayout"; // 先ほど作成したコンポーネントをインポート
import ToTop from "../components/button/ToTop";

// サーバーコンポーネントとしてRootLayoutを定義
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // childrenの型を明示的に指定
}>) {
  return (
    <html lang="ja-JP" className="lg:text-[16px] sm:text-[12px]">
      <body
        className={`${zenMaruGothicFont.variable} flex flex-col h-screen bg-background font-body text-text lg:text-lg sm:text-xl font-medium text-justify w-full overflow-x-hidden`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
        <ToTop />
      </body>
    </html>
  );
}
