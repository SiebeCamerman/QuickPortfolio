import { useRouter } from "next/router";

export default function Lines() {
  const router = useRouter();
  return (
    <div className="mb-[7.5rem]">
      <div className="bg-tmblue dark:bg-coffeecream mb-72 absolute inset-x-0 h-60 4xl:h-96 rotate-9 xl:rotate-[5deg] 4xl:rotate-2 scale-125 shadow-glow "></div>
      <div className={`bg-dinoblack dark:bg-coffeegreen mb-[9.5rem] absolute inset-x-0 h-60 4xl:h-96 -rotate-9 xl:-rotate-[5deg] 4xl:-rotate-2 scale-125 shadow-glow `}></div>
    </div>
  );
}
