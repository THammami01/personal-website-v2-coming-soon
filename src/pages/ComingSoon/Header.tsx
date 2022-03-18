import { FC } from "react";
import { logo } from "../../assets";

const Header: FC = () => {
  return (
    <header
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="700"
      data-aos-offset="0"
    >
      <div className="border-2 border-dashed border-transparent hover:border-sky-500/30 p-[10px] w-fit rounded mx-auto md:mx-0 transition ease-in-out delay-100">
        <img src={logo} alt="Logo" className="max-w-[30px] md:max-w-[25px]" />
      </div>
    </header>
  );
};

export default Header;
