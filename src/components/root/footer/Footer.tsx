import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

import { IconFooter } from "@/interfaces/icons";
import { images } from "@/interfaces/images";
import { cn } from "keep-react/utils";
import Logo from "../../common/Logo";
import NewsLetter from "./NewsLetter";

interface PropsTypes {
  item: string;
  href: string;
}

const companies: PropsTypes[] = [
  { item: "About", href: "/about" },
  { item: "Out Partner", href: "/partner" },
  { item: "Privacy Policy", href: "/privacypolicy" },
  { item: "T&C", href: "/t&c" },
  { item: "Blog", href: "/blog" },
  { item: "Promotions", href: "/promotions" },
  { item: "Affiliate Program", href: "/affiliateprogram" },
];

const bookings: PropsTypes[] = [
  { item: "Flights", href: "/flights" },
  { item: "Hotels", href: "/hotels" },
  { item: "Packages", href: "/packages" },
  { item: "Transportation", href: "/transportation" },
  { item: "Special Deals", href: "/specialdeals" },
];

const services: PropsTypes[] = [
  { item: "Help", href: "/help" },
  { item: "1800-100-767-00", href: "tel:1800-100-767-00" },
  { item: "info@tripbeyond.com", href: "mailto:info@tripbeyond.com" },
];

const Footer = () => {
  return (
    <footer className="grid grid-cols-6 gap-2 px-10 bg-secondary-main text-white py-7">
      <Logo />

      <LinkMapper title="Company" links={companies} />

      <LinkMapper title="bookings" links={bookings} />

      <LinkMapper title="services" links={services}>
        <p>We accept</p>
        <Image src={images.footerPayment} alt="payment" />
      </LinkMapper>

      <LinkMapper className="col-span-2 gap-3 ml-3" title="Connect with Us">
        <SocialLinks />
        <NewsLetter />
      </LinkMapper>
    </footer>
  );
};

export default Footer;

/*============================LINK MAPPER================= */

const LinkMapper = ({ title, links, className, children }: any) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {title && (
        <h6 className="text-body-3 font-semibold capitalize text-primary-main">
          {title}
        </h6>
      )}
      {links?.map((link: any) => {
        return (
          <Link
            key={nanoid()}
            href={link.href}
            className="text-slate-300 text-sm font-light"
          >
            {link.item}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

/*=====================SOCIAL LINKS================ */

interface Social {
  Icon: React.ElementType; // Use React.ElementType for components
  link: string;
}

const socials: Social[] = [
  { Icon: IconFooter.facebook, link: "https://www.facebook.com/tripbeyond" },
  { Icon: IconFooter.twitter, link: "https://www.x.com/tripbeyond" },
  { Icon: IconFooter.instagram, link: "https://www.instagram.com/tripbeyond" },
  { Icon: IconFooter.linkedin, link: "https://www.linkedin.com/in/tripbeyond" },
  { Icon: IconFooter.youtube, link: "https://www.youtube.com/tripbeyond" },
];

const SocialLinks = () => {
  return (
    <>
      <p>Social Media</p>
      <div className="flex items-center gap-3">
        {socials.map((social: Social) => {
          const IconComponent = social.Icon; // Get the component
          return (
            <Link
              key={nanoid()}
              href={social.link}
              className="flex items-center text-2xl"
            >
              <IconComponent />
            </Link>
          );
        })}
      </div>
    </>
  );
};
