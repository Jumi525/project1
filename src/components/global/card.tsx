import Image, { StaticImageData } from "next/image";
import React from "react";
type CardProps = {
  image: StaticImageData;
  heading: string;
  description: string;
};
const Card = ({ description, heading, image }: CardProps) => {
  return (
    <section className="bg-[#9A8499]/20 flex-shrink-0 px-2 flex flex-col items-center  py-4 gap-2 rounded-3xl ">
      <Image
        alt={heading}
        width={250}
        height={245}
        src={image}
        className="rounded-3xl h-[15rem] object-cover"
      />
      <h2 className="font-bold">{heading}</h2>
      <p className="text-sm opacity-60">{description}</p>
    </section>
  );
};

export default Card;
