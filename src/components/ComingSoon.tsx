import { FC } from "react";
import icon from "../assets/icon.png";
import { motion } from "framer-motion";

const ComingSoon: FC = () => {
  return (
    <div
      className="flex flex-col h-screen bg-center bg-cover bg-no-repeat bg-transparent select-none"
      style={{ justifyContent: "center" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid  place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-slate-800 border-4 border-indigo-600 bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center px-6 py-8 ring-1 ring-slate-900/5"
      >
        <img src={icon} alt="Logo" className="mb-3 w-20" draggable={false} />

        <h1 className="text-4xl font-bold text-[#3b82f6] transition duration-500 select-text">
          Portfolio V2 <br className="md:hidden" />
          🤩 SOON ✨
        </h1>

        <div className="grid grid-cols w-full md:w-fit md:grid-cols-3 gap-4 pt-2">
          <a
            href="https://t.me/THammami01"
            title="Send me a message on Telegram"
            className="md:w-40 tracking-wide font-bold rounded border-2 text-white border-indigo-200 hover:text-white hover:border-[#229ED9] hover:bg-[#229ED9] shadow-md py-2 px-6 inline-flex items-center transition ease-in-out delay delay-50 hover:-translate-y-1 hover:scale-101 duration-300"
            target="_blank"
          >
            <span className="mx-auto">Telegram</span>
          </a>

          <a
            href="https://github.com/THammami01"
            title="Follow me on GitHub"
            className="md:w-40 tracking-wide font-bold rounded border-2 text-white border-indigo-200 hover:text-white hover:border-[#161b22] hover:bg-[#161b22] shadow-md py-2 px-6 inline-flex items-center transition ease-in-out delay delay-50 hover:-translate-y-1 hover:scale-101 duration-300"
            target="_blank"
          >
            <span className="mx-auto">GitHub</span>
          </a>

          <a
            href="mailto:thammami.me@gmail.com"
            title="Send me an email"
            className="md:w-40 tracking-wide font-bold rounded border-2 text-white border-indigo-200 hover:text-white hover:border-green-600 hover:bg-green-600 shadow-md py-2 px-6 inline-flex items-center transition ease-in-out delay delay-50 hover:-translate-y-1 hover:scale-101 duration-300"
          >
            <span className="mx-auto">Email</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
