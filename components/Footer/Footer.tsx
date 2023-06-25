import { footerLinks } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ColumnProps = {
  title: string;
  links: Array<string>;
}

 const FooterColumn = ({title,links}:ColumnProps):any  => {
   return (
     <div className="footer_column">
       <h4 className="font-semibold">{title}</h4>
       <ul className="flex flex-col gap-2 font-normal">
         {links.map((link) => (
           <Link href="/" key={link}>
             {link}
           </Link>
         ))}
       </ul>
     </div>
   );
}
const Footer = () => {
  return (
    <footer className="flexStart footer px-20">
      <div className="flex flex-col gap-12">
        <div className="flex item-start flex-col">
          <Image src="/logo-purple.svg" alt="logo" width={115} height={38} />
          <p className="text-sm text-start font-normal mt-5 max-w-xl">
            Showcase and discover remarble developers projects. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Inventore, possimus?
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          ></FooterColumn>
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            ></FooterColumn>
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            ></FooterColumn>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[3].title}
              links={footerLinks[3].links}
            ></FooterColumn>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            ></FooterColumn>
            <FooterColumn
              title={footerLinks[6].title}
              links={footerLinks[6].links}
            ></FooterColumn>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            ></FooterColumn>
          </div>
        </div>

      </div>
      {/** add simple copyright section with left and right section */}
      <div className="flex  gap-4 w-full justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-normal">© 2021 Dribble, Inc.</p>
          <p className="text-sm font-normal">All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-normal">Privacy Policy</p>
          <p className="text-sm font-normal">Terms and Conditions</p>
        </div>
      </div>


    </footer>
  );
}

export default Footer
