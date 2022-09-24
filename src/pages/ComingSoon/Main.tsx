import { FC } from "react";
import { Icon } from "@iconify/react";
import ReactTypingEffect from "react-typing-effect";
import { comingSoon, comingSoonTiny, hi, me, meTiny } from "../../assets";
import NotificationForm from "./NotificationForm";
import useProgressiveImg from "../../hooks/useProgressiveImg";

const Main: FC = () => {
  const [comingSoonLoaded, isSoonLoading] = useProgressiveImg(
    comingSoonTiny,
    comingSoon
  );
  const [meLoaded, isMeLoading] = useProgressiveImg(meTiny, me);

  return (
    <main className="flex flex-col gap-6 text-center px-4">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <img
          src={comingSoonLoaded || comingSoonTiny}
          className="transition ease-in-out delay-100 mx-auto border-2 pb-1 border-dashed border-transparent hover:border-sky-500/30 rounded"
          style={{
            filter: isSoonLoading ? "blur(3px) grayscale(70%)" : "none",
            transition: isSoonLoading ? "none" : "filter 0.2s ease-out",
          }}
          alt="Coming Soon"
        />
      </div>

      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0"
      >
        <img
          src={meLoaded || meTiny}
          className="w-32 border-4 border-slate-800 mx-auto rounded-2xl hover:border-purple-700 transition-all ease-in-out delay-150 duration-300"
          style={{
            filter: isMeLoading ? "blur(3px) grayscale(70%)" : "none",
            transition: isMeLoading ? "none" : "filter 0.2s ease-out",
          }}
          alt="Me"
        />
      </div>

      <div
        className="transition ease-in-out delay-100 rounded border-2 border-dashed border-transparent hover:border-sky-500/30 p-2 pb-4 md:w-[420px] mx-auto"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="700"
        data-aos-offset="0"
      >
        <div>
          Hello, World!
          <ReactTypingEffect
            text={[""]}
            typingDelay={4000}
            speed={100}
            eraseSpeed={150}
          />
          <img
            src={hi}
            alt="Hi"
            className="inline ml-1 w-8 -translate-y-1 rotate-8"
          />
        </div>

        <p className="text-center mt-2 mx-auto text-sm">
          My name is{" "}
          <span className="underline decoration-2 decoration-sky-500/60 decoration-dashed underline-offset-4">
            Tarek Hammami
          </span>
          .
          <br />
          I am a passionate developer and self-learner.
          <br />
          I do freelance projects.
          <br />
          I like to compete with programmers,
          <br />
          contribute to open source,
          <br />
          and help people solve problems.
          <br />
          I'm currently preparing for multiple industry-recognized
          certifications.
          <br />
          My dream is to work for tech giants,
          <br />
          be inventive and help advance human life.
        </p>
      </div>

      <div
        className="transition ease-in-out delay-100 rounded border-2 border-dashed border-transparent hover:border-sky-500/30 w-fit mx-auto p-2 pb-4"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="700"
        data-aos-offset="0"
      >
        <p className="mb-3 md:mb-2">My Toolset</p>

        <div className="mt-6 flex gap-4 flex-wrap max-w-[500px] justify-center">
          <span title="NodeJS">
            <Icon className="inline text-3xl" icon="logos:nodejs-icon" />
          </span>
          <span title="TypeScript">
            <Icon className="inline text-3xl" icon="logos:typescript-icon" />
          </span>
          <span title="React">
            <Icon className="inline text-3xl" icon="logos:react" />
          </span>
          <span title="Redux">
            <Icon className="inline text-3xl" icon="logos:redux" />
          </span>
          <span title="SCSS">
            <Icon
              className="inline text-3xl"
              icon="vscode-icons:file-type-scss"
            />
          </span>
          <span title="Tailwind">
            <Icon
              className="inline text-3xl"
              icon="vscode-icons:file-type-tailwind"
            />
          </span>
          <span title="Express">
            <Icon className="inline text-3xl" icon="simple-icons:express" />
          </span>
          <span title="JWT">
            <Icon className="inline text-3xl" icon="logos:jwt-icon" />
          </span>
          <span title="Jest">
            <Icon
              className="inline text-3xl"
              icon="vscode-icons:file-type-jest"
            />
          </span>
          <span title="Vite">
            <Icon
              className="inline text-3xl"
              icon="vscode-icons:file-type-vite"
            />
          </span>
          <span title="Python">
            <Icon className="inline text-3xl" icon="logos:python" />
          </span>
          <span title="Flask">
            <Icon className="inline text-3xl" icon="file-icons:flask" />
          </span>
          <span title="Java">
            <Icon className="inline text-3xl" icon="logos:java" />
          </span>
          <span title="Spring">
            <Icon className="inline text-3xl" icon="logos:spring-icon" />
          </span>
          <span title="Bash">
            <Icon className="inline text-3xl" icon="logos:bash-icon" />
          </span>
          <span title="Git">
            <Icon className="inline text-3xl" icon="logos:git-icon" />
          </span>
          <span title="GitHub">
            <Icon className="inline text-3xl" icon="akar-icons:github-fill" />
          </span>
          <span title="GitHub Actions">
            <Icon className="inline text-3xl" icon="logos:github-actions" />
          </span>
          <span title="Jenkins">
            <Icon
              className="inline text-3xl"
              icon="vscode-icons:file-type-jenkins"
            />
          </span>
          <span title="Docker">
            <Icon className="inline text-3xl w-9" icon="logos:docker-icon" />
          </span>
          <span title="AWS">
            <Icon className="inline text-3xl w-9" icon="logos:aws" />
          </span>
          <span title="Azure">
            <Icon
              className="inline text-3xl w-9"
              icon="vscode-icons:file-type-azure"
            />
          </span>
          <span title="Google Cloud Platform">
            <Icon className="inline text-3xl w-7" icon="logos:google-cloud" />
          </span>
          <span title="Firebase">
            <Icon className="inline text-3xl w-6" icon="logos:firebase" />
          </span>
          <span title="Netlify">
            <Icon className="inline text-3xl" icon="logos:netlify" />
          </span>

          <span title="MySQL">
            <Icon
              className="inline text-3xl"
              icon="vscode-icons:file-type-mysql"
            />
          </span>
          <span title="MongoDB">
            <Icon
              className="inline text-3xl"
              icon="vscode-icons:file-type-mongo"
            />
          </span>
          <span title="Redis">
            <Icon className="inline text-3xl w-8" icon="logos:redis" />
          </span>
          <span title="Ubuntu Server">
            <Icon className="inline text-3xl w-6" icon="logos:ubuntu" />
          </span>
          <span title="VS Code">
            <Icon
              className="inline text-3xl"
              icon="vscode-icons:file-type-vscode"
            />
          </span>
          <span title="IntelliJ">
            <Icon className="inline text-3xl" icon="logos:intellij-idea" />
          </span>
          <span title="Figma">
            <Icon className="inline text-3xl" icon="logos:figma" />
          </span>
          <span title="Photoshop">
            <Icon
              className="inline text-3xl text-[#001e36] bg-white"
              icon="file-icons:adobe-photoshop"
            />
          </span>
          {/* <span title="Notion">
            <Icon className="inline text-3xl" icon="simple-icons:notion" />
          </span>
          <span title="Slack">
            <Icon className="inline text-3xl" icon="logos:slack-icon" />
          </span>
          <span title="Jira">
            <Icon
              className="inline text-3xl text-[#0052CC]"
              icon="simple-icons:jirasoftware"
            />
          </span> */}
        </div>
      </div>

      <div
        className="transition ease-in-out delay-100 rounded border-2 border-dashed border-transparent hover:border-sky-500/30 w-fit mx-auto p-2 pb-0"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="700"
        data-aos-offset="0"
      >
        <p className="mb-3 md:mb-2">My GitHub Stats</p>

        <img
          className="max-w-[100%] md:max-w-fit"
          src="https://github-readme-stats.vercel.app/api?username=THammami01&bg_color=141414&title_color=bae6fd&text_color=fdfdfd&icon_color=f9826c&show_icons=true&hide_border=true&&count_private=true&include_all_commits=true"
          draggable={false}
        />

        <img
          className="max-w-[66%] md:max-w-fit"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=THammami01&bg_color=141414&title_color=bae6fd&text_color=fdfdfd&show_icons=true&hide_border=true&layout=compact"
          draggable={false}
        />
      </div>

      <div
        className="transition ease-in-out delay-100 rounded border-2 border-dashed border-transparent hover:border-sky-500/30 w-fit mx-auto p-2 pb-3"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="700"
        data-aos-offset="0"
      >
        <a
          className="text-sky-300 hover:underline underline-offset-2 cursor-pointer decoration-wavy decoration-2 decoration-white"
          href="https://thammami01.github.io/CV"
          target="_blank"
        >
          My CV
        </a>
      </div>

      <div>
        <a
          className="text-indigo-400 hover:underline underline-offset-2 cursor-pointer decoration-wavy decoration-2 decoration-indigo-400 max-w-32"
          href="mailto:tarekhammamix01@gmail.com?subject=Interested in joining our team?&body=Hi, Tarek. I have an offer for you."
        >
          <ReactTypingEffect
            text={["Would you like to hire me?"]}
            typingDelay={4000}
            speed={90}
            eraseSpeed={120}
          />
        </a>{" "}
        ^_^
      </div>

      <div>
        <NotificationForm />
      </div>

      <p
        className="text-sm transition ease-in-out delay-100 m-auto py-2 pb-3 px-4 w-fit border-2 border-dashed border-transparent hover:border-sky-500/30 rounded"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="700"
        data-aos-offset="0"
      >
        <span className="text-sky-800/60">
          -_ <span className="hidden md:inline">↗</span>
          <span className="inline md:hidden">↑</span>
        </span>{" "}
        Notify me when portfolio v2.0.0 is deployed{" "}
        <span className="text-sky-800/60">
          <span className="hidden md:inline">↖</span>
          <span className="inline md:hidden">↑</span> _-
        </span>
      </p>
    </main>
  );
};

export default Main;
