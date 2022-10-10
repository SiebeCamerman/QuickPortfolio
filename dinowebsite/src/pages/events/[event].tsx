import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { EventData, getAllEvents, getEventData } from "../../modules/events";

export interface EventDataProps {
  eventData: EventData;
  left?: boolean;
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context?.params?.event || context?.params?.event == undefined)
    throw new Error("Param missing");
  const eventData = await getEventData(context.params.event);
  return {
    props: {
      eventData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllEvents();
  return {
    paths,
    fallback: false,
  };
};

const Event: NextPage<EventDataProps> = ({ eventData }) => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - {eventData.title}</title>
        <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>
      <main className="overflow-hidden">
        <div className="bg-dinocream pb-24 text-dinoblack">
          <div className=" max-w-7xl mx-auto">
            <div className="">
            <h1 className="font-heading text-3xl sm:text-4xl pb-16 text-dinoblack max-w-[15rem] sm:max-w-sm md:max-w-lg xl:max-w-3xl mx-auto py-10">
                {eventData.title}
              </h1>
              <div className="mx-5 sm:mx-10 md:mx-20">
                <Image
                  src={eventData.image}
                  alt={eventData.title}
                  className="object-cover"
                  width={1280}
                  height={700}
                  />
              </div>
          </div>
            <div className="max-w-[15rem] sm:max-w-sm md:max-w-lg xl:max-w-3xl mx-auto py-10">

              <div className="text-justify"  dangerouslySetInnerHTML={{__html: `${eventData.content}`}}>
              </div>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Event;
