// import { useState } from 'react';
// import { HamburgerAccordion } from './Accordion';

// interface AccordionData {
//     id: number;
//     title: string;
//     content: any;
// }

// export function HamburgerAccordionList() {
//     const [openId, setOpenId] = useState<number | null>(null); // 開いているアコーディオンのIDを管理

//     const accordions: AccordionData[] = [
//         { id: 1, title: 'Accordion 1', content: <p>Content 1</p> },
//         { id: 2, title: 'Accordion 2', content: <p>Content 2</p> },
//         { id: 3, title: 'Accordion 3', content: <p>Content 3</p> },
//     ];

//     const toggleAccordion = (id: number) => {
//         setOpenId((prevOpenId) => (prevOpenId === id ? null : id)); // 同じIDなら閉じる
//     };

//     return (
//         <div>
//             {accordions.map((accordion) => (
//                 <HamburgerAccordion
//                     key={accordion.id}
//                     isOpen={openId === accordion.id} // 開いているかどうかを判定
//                     onClick={() => toggleAccordion(accordion.id)} // クリックイベントで開閉を管理
//                     title={accordion.title}
//                     hamburgerContent={accordion.content}
//                 />
//             ))}
//         </div>
//     );
// }
