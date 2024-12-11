import { HamburgerType } from "../../../utils/models/hamburgerType";
import HamburgerTitle from "./HamburgerTitle";
import HamburgerLink from "./HamburgerLink";


type HamburgerContentProps = {
    title: string;
    content: HamburgerType[];
};

export default function HamburgerContent({ title, content }: HamburgerContentProps) {
    return (
        <div className="flex flex-col items-start text-white">
            <HamburgerTitle>{title}</HamburgerTitle>
            <div className="w-full border-b-2 border-white my-2" />
            <LinkList content={content} />
        </div>
    );
}

export function LinkList({ content }: { content: HamburgerType[] }) {
    return (
        <div className="flex flex-col items-start mt-3 gap-1">
            {content.map((item) => (
                <HamburgerLink key={item.title} href={item.href}><p>{item.title}</p></HamburgerLink>
            ))}
        </div>
    )
}