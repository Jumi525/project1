import Image from "next/image";
import React from "react";
import banner from "../../../public/asset/hero-banner.png";
import vid from "../../../public/asset/tag1.png";
import Card from "@/components/global/card";
import maryam from "../../../public/asset/tag7.png";
import rahman from "../../../public/asset/tag8.png";
import mmenyene from "../../../public/asset/tag9.png";
import trainer from "../../../public/asset/images (64).jpeg";
import dentist from "../../../public/asset/images (65).jpeg";
import doctor from "../../../public/asset/images (66).jpeg";
import design from "../../../public/asset/solys-img-1.jpg";
import Link from "next/link";
import TeamCard from "@/components/landingPage/teamCard";

const Cardsdes = [
  {
    image: maryam,
    heading: "maryam",
    descrip:
      "I have been using this website for a while and it has never disappointed me",
  },
  {
    image: rahman,
    heading: "Abdul rahman",
    descrip: "It makes finding jobs really easy and less stressfull. ",
  },
  {
    image: mmenyene,
    heading: "mmenyene",
    descrip:
      "i have been unemployed for several months, after being introduced to this website, i landed a job",
  },
];

const Jobsdes = [
  {
    image: trainer,
    heading: "Plumber",
    descrip: "First hand Experienced plumber",
  },
  {
    image: dentist,
    heading: "Dry cleaner",
    descrip: "Bringing out the beauty in worn out",
  },
  {
    image: doctor,
    heading: "house help",
    descrip: "4+ years cleaners at your service",
  },
  {
    image: design,
    heading: "Electrican",
    descrip: "We have all categories of electrician",
  },
];

const LandingPage = () => {
  return (
    <main className="min-h-[100vh] bg-[#9A8499]/50">
      <section
        id="home"
        className=" gap-2 grid grid-cols-1 sm:grid-cols-2 sm:justify-around items-center px-4 py-8"
      >
        <section className=" max-w-[500px] flex flex-col gap-3 py-3 justify-self-center">
          <Link
            href={"/job"}
            className="py-2 px-3 bg-[#9A845C] rounded-full max-w-max"
          >
            Explore the world
          </Link>
          <h1 className="font-bold text-3xl md:text-4xl">
            Its a big world out there, Go Explore
          </h1>
          <p className="opacity-65 py-2 max-w-[300px]">
            We always make our customers happy by providing as many choices as
            possible
          </p>
          <button className="bg-[#9A845C] text-nowrap items-center p-1 pl-3 rounded-full flex gap-2 max-w-max">
            watch our story
            <Image src={vid} alt="video" width={35} height={35} />
          </button>
        </section>
        <Image
          src={banner}
          width={300}
          alt="banner"
          className="w-full px-9 max-w-[400px] md:max-w-[500px] justify-self-center"
        ></Image>
      </section>
      <section className="py-8" id="jobs">
        <h2 className="text-center font-bold text-3xl md:text-4xl">Jobs</h2>
        <p className="mx-auto text-center max-w-[450px] mt-3 mb-5 opacity-55">
          We have offer services to different area of specialty. We also share
          details and bonuses that come with the jobs
        </p>
        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap px-3">
          {Jobsdes.map((val, index) => (
            <Card
              key={index}
              heading={val.heading}
              image={val.image}
              description={val.descrip}
            />
          ))}
        </div>
      </section>
      <section id="testimonial" className="py-8 px-4">
        <h2 className="text-center font-bold text-3xl md:text-4xl">
          Testimonies
        </h2>
        <p className="mx-auto text-center max-w-[450px] mt-3 mb-5 opacity-55">
          Checkout our customers feedback on the unique craftmanship and
          personal touch of every piece created which they have experienced
        </p>
        <div className="flex items-center gap-4 md:gap-8 px-3 verticalscroll mx-auto">
          {Cardsdes.map((val, index) => (
            <TeamCard
              key={index}
              heading={val.heading}
              image={val.image}
              description={val.descrip}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
