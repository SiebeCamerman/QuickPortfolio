import type { GetStaticProps, NextPage } from "next";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Coffee from "../components/di/Coffee";
import ProjectCount, {
  ProjectCounterProps,
} from "../components/di/ProjectCount";
import { getAllProjectDataSorted } from "../modules/projects";

export const getStaticProps: GetStaticProps = async (context) => {
  const projectAmountNumber = (await getAllProjectDataSorted()).length;
  return {
    props: {
      projectAmountNumber,
    },
  };
};

const aboutMe: NextPage<ProjectCounterProps> = ({ projectAmountNumber }) => {
  return (
    <div>
      <Head>
        <title>Portfolio - What is DI</title>
        <meta
          name="description"
          content="Digital Innovation Thomas More, What is Digital Innovation"
        />
        <link rel="icon" href="images/logo.png" />
      </Head>
      <main className="text-dinoblack">
        <div className="mx-20 3xl:pb-24">
          <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5 ">
            About me
          </h1>
          <p className="font-sans text-md sm:text-lg text-justify">
          Hello, I am Siebe Camerman, a 20-year-old software developer with a deep passion for IT. In my free time, I enjoy experimenting and exploring within the field. I am driven, curious, and determined to constantly improve my skills. With an enthusiastic mindset, I am ready to collaborate and achieve great technological feats. Let&rsquo;s explore the possibilities together and create innovative solutions.
          </p>
        </div>
        <div className="mt-28 md:mt-40 lg:mt-52 xl:mt-60 bg-[linear-gradient(-9deg,_#191919_50%,_#f6f2e7_50%)]">
          <div className="bg-tmorange dark:bg-coffeegreen h-20 md:h-32 lg:h-40 xl:h-60 -rotate-9 4xl:-rotate-3 5xl:-rotate-2 scale-125 shadow-glow"></div>
        </div>
        <div className="bg-dinoblack text-dinocream pb-24 4xl:pb-36 4xl:h-screen">
          <h1 className="pt-52 text-center font-heading text-4xl">Experience</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 pt-24 pb-24">
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="logos:java"/>
                <p className="text-center pt-6">Java</p>
              </div>
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="logos:python"/>
                <p className="text-center pt-6">Python</p>
              </div>
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="logos:flutter"/>
                <p className="text-center pt-6">Flutter</p>
              </div>
            </div>
            <div className="border-8 rounded-[50px] mb-5 lg:mb-0 relative mx-auto bg-dinoblack overflow-hidden h-[441px] w-[331px] xl:h-[618px] xl:w-[463px]">
                  <Image
                          src="./images/Siebe.jpg"
                          layout="fill"
                          alt="Siebe"
                        />
                </div>
        </div>
        
      </main>
    </div>
  );
};

export default aboutMe;
