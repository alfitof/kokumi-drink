import Image from "next/image";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [image, setImage] = useState("/image/boba miring.png");
  const clickImage = (image) => {
    setImage(image);
  };
  useEffect(() => {
    document.querySelector(".kokumi").style.src = image;
  }, [image]);

  return (
    <section className="relative w-full min-h-screen pl-[100px] pr-[100px] flex justify-space items-center ">
      <div
        className="circle absolute top-0 left-0 w-full h-full"
        style={{ background: "#ff7774" }}
      ></div>

      <div className="content relative w-full bottom-[30px] flex justify-space items-center">
        <div className="textBox relative max-w-6xl mt-[55px]">
          <h2 className="text-[#333] font-medium">
            <span style={{ color: "#ff7774" }}> KOKUMI コクミ</span>
            <br />
            Your Daily Dose of Flavorful Joy
          </h2>
          <a
            className="text-white inline-block mt-[20px] py-2 px-5 font-medium rounded-full"
            href="#"
            style={{ background: "#ff7774" }}
          >
            Order Now
          </a>
        </div>
        <div className="imgBox w-[600px] flex justify-end pr-[10px] mt-[15px]">
          <Image
            src={image}
            width={"350"}
            height={"350"}
            alt="drink"
            className="kokumi"
          />
        </div>
      </div>
      <ul className="thumb absolute left-[50%] bottom-[20px] flex">
        <li className="list-none inline-block cursor-pointer">
          <Image
            src="/image/rainbow mini.png"
            width={60}
            alt="drink"
            height={60}
            onClick={() => {
              clickImage("/image/rainbow miring.png");
            }}
          />
        </li>
        <li>
          <Image
            src="/image/cheese mini.png"
            width={60}
            alt="drink"
            height={60}
            onClick={() => {
              clickImage("/image/cheese miring.png");
            }}
          />
        </li>
        <li>
          <Image
            src="/image/88rising mini.png"
            width={60}
            alt="drink"
            height={60}
            onClick={() => {
              clickImage("/image/88rising miring.png");
            }}
          />
        </li>
        <li>
          <Image
            src="/image/boba mini.png"
            width={60}
            alt="drink"
            height={60}
            onClick={() => {
              clickImage("/image/boba miring.png");
            }}
          />
        </li>
      </ul>
    </section>
  );
}
