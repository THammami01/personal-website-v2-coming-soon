import { FC } from "react";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
// import { motion } from "framer-motion";

const ComingSoon: FC = () => {
  return (
    <div className="container mx-auto py-6 flex flex-col gap-5">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default ComingSoon;
