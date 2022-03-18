import { FC } from "react";
import { Icon } from "@iconify/react";
import { telegram, github, gmail } from "../../assets";

const socialLinks = [
  {
    img: telegram,
    name: "Telegram",
    link: "https://t.me/THammami01",
    title: "Send me a message on Telegram",
  },
  {
    img: github,
    name: "GitHub",
    link: "https://github.com/THammami01",
    title: "Follow me on GitHub",
  },
  {
    img: gmail,
    name: "Email",
    link: "mailto:thammami.me@gmail.com",
    title: "Send me an email",
  },
];

const Footer: FC = () => {
  return (
    <footer
      className="my-2 px-4"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="700"
      data-aos-offset="0"
    >
      <ul className="flex flex-col text-right md:flex-row gap-2 md:gap-3 w-fit mx-auto justify-center">
        {socialLinks.map(({ img, name, link, title }) => (
          <li
            className="transition ease-in-out delay-100 border-2 md:pt-1 md:pb-2 pb-1 px-4 border-dashed border-transparent hover:border-sky-500/30 rounded"
            title={title}
          >
            <img
              src={img}
              alt={title}
              className="inline-block max-w-[20px] mr-3"
            />
            <a
              href={link}
              className="hover:underline underline-offset-2 cursor-pointer decoration-wavy decoration-2 decoration-sky-500"
              target={link.startsWith("mailto") ? "" : "_blank"}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>

      <div className="transition ease-in-out delay-100 mt-8 md:mt-6 text-center md:text-right w-fit mx-auto rounded border-2 border-dashed border-transparent hover:border-sky-500/30 w-fit mx-auto p-2 pb-3">
        Made with <Icon className="inline" icon="bi:balloon-heart-fill" />
        <br />
        by{" "}
        <span className="underline decoration-2 decoration-sky-500/60 decoration-dashed underline-offset-4">
          Tarek Hammami
        </span>
      </div>
    </footer>
  );
};

export default Footer;
