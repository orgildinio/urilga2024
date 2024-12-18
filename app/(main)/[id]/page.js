"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bg from "../../../assets/bg.png";
import snowleft from "../../../assets/Snowleft.svg";
import snowright from "../../../assets/Snowright.svg";
import logo from "../../../assets/christmas-logo.png";
import top from "../../../assets/dividertop.png";
import bottom from "../../../assets/dividerbot.png";
import { people } from "@/people";
import { GoClockFill } from "react-icons/go";
import { TiLocation } from "react-icons/ti";
import Snowfall from "react-snowfall";

// export async function generateStaticParams() {
//   return people.map((person) => ({ name: person.name, id: person.id }));
// }

export default function Page({ params }) {
  // const data = await params;
  // const person = people.find((p) => p?.id === data?.id);
  // const params = React.use(props.params);
  const { id } = params;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        localStorage.setItem("id", id);
        const postData = people[id - 1];
        if (!postData) throw new Error("Post not found");

        setPost(postData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPost();
  }, [id]);

  return (
      <div className="relative h-full min-h-screen">
        <div className="absolute top-0 z-0">
          <div className="z-40 h-screen w-screen absolute top-0">
            <Snowfall snowflakeCount={200} wind={[-1, -0.5]} />
          </div>
          <div>
            <Image
                src={bg}
                alt="background"
                className="h-screen w-screen object-cover bg-blend-luminosity "
            />
            <div className="bg-[#000731] h-screen w-screen object-cover absolute top-0 opacity-80 z-1"></div>
          </div>
          <Image
              src={snowleft}
              alt="snow"
              className="absolute bottom-0 left-0 object-cover z-1"
          />
          <Image
              src={snowright}
              alt="snow"
              className="absolute bottom-0 right-0 object-cover z-1"
          />
        </div>
        <div className="z-[150] m-auto">
          <div className="z-[150] m-auto pt-5 px-3 md:pt-10 w-full xs:max-w-[400px] md:min-w-[598px] min-h-[100%] max-h-[648px]">
            <div className="btn-primary relative">
              <Image
                  src={logo}
                  width={60}
                  alt="logo"
                  className="absolute top-[5px] left-[10px] z-10"
              />
              <div className="btn-bg"></div>
              <div className="btn-border"></div>
              <div className="btn-text flex flex-col gap-5 xs:gap-10 justify-center text-center px-3 py-6 md:py-8">
                <div className="text-center flex flex-col items-center">
                  <Image src={top} alt="divider" />
                  <div className="xxs:my-2 xs:my-6 flex flex-col">
                  <span className="name font-adineue font-bold text-[16px] md:text-[24px] ">
                    {post?.job}
                  </span>
                    <span className="name font-adineue font-bold text-[32px] md:text-[48px]">
                    {post?.name}
                  </span>
                  </div>
                  <Image src={bottom} alt="divider" />
                </div>
                <div className="name font-adineue xxs:text-[20px] xs:text-[24px] md:text-[32px] font-bold text-center">
                  Эрхэм хүндэт таныг <br /> “Маскарад - Сонгодог Үдэш”
                  <br /> шинэ жилийн цэнгүүнд хүрэлцэн <br /> ирэхийг урьж байна.
                </div>
                {/* <Link
                href="/program"
                className="font-adineue font-bold text-base underline text-white text-center z-[150] cursor-pointer"
              >
                Хөтөлбөр үзэх
              </Link> */}
                <div className="flex justify-center items-center">
                  <div className="name xxs:text-[14px] xs:text-[16px] font-adineue font-bold text-center">
                    Будрах цасны мөнгөн ширхэгтэй
                    <br />
                    Болор хундагны жингэнэх чимээтэй
                    <br />
                    Буурал сахалт өвлийн өвгөнтэй
                    <br />
                    Бүжин наадах цасан охидтой
                    <br />
                    Шинэ он, шинэ жилийн мэнд хүргэе!
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-10 md:m-auto gap-[10px]">
                  <div className="flex items-center gap-2 text-white font-adineue font-bold text-sm">
                  <span className="p-[6px] bg-[#FFFFFF1A] rounded-full">
                    <GoClockFill size={16} color="#fff" />
                  </span>
                    <p>2024.12.26 18:00 цагт</p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-adineue font-bold text-sm">
                  <span className="p-[6px] bg-[#FFFFFF1A] rounded-full">
                    <TiLocation size={16} color={"#FFF"} />
                  </span>
                    <p>Улаанбаатар зочид буудал CAMI танхимд</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
