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

const whatIsDI: NextPage<ProjectCounterProps> = ({ projectAmountNumber }) => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - What is DI</title>
        <meta
          name="description"
          content="Digital Innovation Thomas More, What is Digital Innovation"
        />
        <link rel="icon" href="images/Favicon_di.png" />
      </Head>
      <main className="text-dinoblack">
        <div className="mx-20 3xl:pb-24">
          <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5 ">
            About me
          </h1>
          <p className="font-sans text-md sm:text-lg text-justify">
          Hallo, ik ben Siebe Camerman, een 20-jarige softwareontwikkelaar met een diepe passie voor IT. Mijn vrije tijd besteed ik graag aan experimenteren en ontdekken binnen het vakgebied. Ik ben gedreven, nieuwsgierig en vastberaden om mijn vaardigheden voortdurend te verbeteren. Met een enthousiaste instelling sta ik klaar om samen te werken en geweldige technologische prestaties neer te zetten. Laten we samen de mogelijkheden verkennen en innovatieve oplossingen creëren.
          </p>
        </div>
        <div className="mt-28 md:mt-40 lg:mt-52 xl:mt-60 bg-[linear-gradient(-9deg,_#191919_50%,_#f6f2e7_50%)]">
          <div className="bg-tmorange dark:bg-coffeegreen h-20 md:h-32 lg:h-40 xl:h-60 -rotate-9 4xl:-rotate-3 5xl:-rotate-2 scale-125 shadow-glow"></div>
        </div>
        <div className="bg-dinoblack text-dinocream pb-24 4xl:pb-36 4xl:h-screen">
          <h1 className="pt-52 text-center font-heading text-4xl">Experience</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 pt-24 pb-24">
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="mdi:laravel"/>
                <p className="text-center pt-6">Laravel 9</p>
              </div>
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="teenyicons:python-outline"/>
                <p className="text-center pt-6">Python</p>
              </div>
              <div className="mx-auto">
                <Icon className="w-40 h-40 mx-auto" icon="ic:outline-home"/>
                <p className="text-center pt-6">Home Assistant</p>
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

export default whatIsDI;
