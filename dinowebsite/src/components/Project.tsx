import Image from "next/image";

type Myprops = {
	// dingen die je meerdere keren gebruikt
    image: string,
	title: string,
	text: string,
	positie?: boolean //optionele parameter
}

export default function Project(props: Myprops){
	return(
		<div className="mt-16 flex flex-col hover:cursor-pointer ">
            <div className="relative h-52 sm:h-80 lg:h-96 xl:h-[28rem] w-auto">
                <Image src={props.image} 
                alt={props.title} 
                className="rounded-[25px] object-cover"
                layout="fill"
                />
            </div>
            <div className="first-line:hover:underline first-line:hover:underline-offset-8 first-line:hover:decoration-tmorange">
            <div className="font-heading text-3xl sm:text-4xl mt-5">
                {props.title}
            </div>
            <div className="font-sans md:w-5/6 mt-5 text-sm sm:text-md text-justify">
                {props.text}
            </div>
            </div>
        </div>
	);
}