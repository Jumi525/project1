import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
type TeamCardProps = {
  image: StaticImageData;
  heading: string;
  description: string;
};
const TeamCard = ({ description, heading, image }: TeamCardProps) => {
  return (
    <section className="bg-[#9A8499]/20 w-[300px] verticalchild h-[180px] flex-shrink-0 px-2 flex flex-col items-center  py-4 gap-4 rounded-md mx-auto">
      <div className="flex items-center gap-2 w-full">
        <Image
          alt={heading}
          width={20}
          height={20}
          src={image}
          className="rounded-full h-[3rem] w-[3rem] object-cover "
        />
        <h2 className="font-bold">{heading}</h2>
      </div>
      <div className="flex justify-start w-full items-center">
        <Star className="fill-yellow-400/90 text-yellow-400/90 size-5" />
        <Star className="fill-yellow-400/90 text-yellow-400/90 size-5" />
        <Star className="fill-yellow-400/90 text-yellow-400/90 size-5" />
        <Star className="fill-yellow-400/90 text-yellow-400/90 size-5" />
        <Star className="fill-yellow-400/90 text-yellow-400/90 size-5" />
      </div>
      <p className="text-sm opacity-60 text-wrap -mt-1">{description}</p>
    </section>
  );
};

export default TeamCard;
