import { ReactNode } from "react";

type TitleFourthProps = {
    children: ReactNode;
    type: 'blue' | 'pink';
    indent?: boolean;
    indent2?: boolean;
    indent3?: boolean;
    indent4?: boolean;
    indentList?: boolean;
    indentList2?: boolean;
}

export default function TitleFourth({ children, type, indent = false, indent2 = false, indent3 = false, indent4 = false, indentList = false, indentList2 = false }: TitleFourthProps) {
    return (
        <div className="relative items-center flex"
            style={{ marginLeft: indent ? 'calc(12vw + 0.5rem)' : indent2 ? 'calc(12vw + 1rem)' : indent3 ? 'calc(12vw - 0.5rem)' : indent4 ? 'calc(12vw + 1.1rem)' : indentList ? 'calc(-0.5rem)' : indentList2 ? 'calc(1rem)' : undefined }}>
            <div className={`min-w-4 aspect-square absolute top-[0.65rem] -left-4 bg-[${type === 'blue' ? '#64BDEB' : '#E07494'}] opacity-60 rounded-sm`} />
            <h4 className="font-medium lg:text-lg sm:text-xl lg:leading-9 sm:leading-9 text-text ml-2 break-words">{children}</h4>
        </div>
    )
}