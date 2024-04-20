import React from "react";
import Link from "next/link";
import MetaSeo from "../components/MetaSeo";
import constant from "../utilities/constant";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Home({ setting }) {
  return (
    <div className="flex justify-center h-[90vh] xl:items-center xl:flex-row flex-col-reverse">
      <MetaSeo
        title="Hafiz Iqbal Sahrunizar"
        description="Hafiz Iqbal Sahrunizar, bekerja sebagai backend golang developer."
      />
      <div className="xl:w-7/12" data-aos="fade-up">
        <h1 className="font-doodle h-20 lg:h-auto  tracking-widest xl:text-4xl text-3xl  text-center xl:text-left">
          <Typewriter
            options={{
              strings: setting.title.split("|"),
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="mt-5 mb-4 text-center xl:text-left leading-7">
          {setting.subtitle}
        </p>
        <p className="text-center z-50 xl:text-left">
          See
          <Link href={"/portfolio"}>
              <span className="font-semibold underline hover:text-blue-500 cursor-pointer"> Portfolio</span>
          </Link>{" "}
          And{" "}
          <a href={setting.cv_link} target={"_blank"} rel="noreferrer">
            <span className="font-semibold underline hover:text-blue-500 cursor-pointer">Download My CV</span>
          </a>
        </p>
      </div>
      <div className="xl:w-5/12 flex xl:justify-end justify-center h-80 ">
        <Image
          src={`${setting.img?.path}`}
          layout="fixed"
          height={300}
          width={300}
          alt="BG-Image"
          className={`object-contain mb-10 xl:mb-0 dark:invert invert-0`}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      setting: {
        title: 'Hi, Nice to meet you :)|My name Hafiz Sahrunizar :D|I`m A Software Engineer|Wanna Be My Friends :D|Don`t hestitate contact me!',
        cv_link: 'https://drive.google.com/file/d/1OzB-tdyHaT-7DKvNpLLpyd6lILDtCj3w/view?usp=sharing',
        subtitle: 'I’m an ex-software engineer from XL Axiata tbk, diving deep into Golang for three years. Recently, I`ve also been playing around with Next.js for some frontend stuff. Nikola Tesla is My Role Model :D',
        img: { 
          path: "https://firebasestorage.googleapis.com/v0/b/personal-website-1d263.appspot.com/o/photo-profile%2Fnikola-tesla-vintage-illustration-free-vector-removebg-preview.png?alt=media&token=b0d73a25-d159-4658-80b5-86ba96484c82"
        }
      },
    },
  };
}
