import { ReactNode } from "react";

type IndexTitleProp = {
    children: ReactNode;
    subTitle: string;
}

export default function TitleIndex({ children, subTitle }: IndexTitleProp) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-end">
                <div className="text-5xl text-primary font-bold mb-1">{children}</div>
                <div className="text-xl text-accent font-semibold mb-3">{subTitle}</div>
            </div>
        </div>
    )
}