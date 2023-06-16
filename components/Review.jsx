import Stars from "./Stars";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

const reviews = [
  {
    avatar: "/image/poto1.webp",
    name: "Mas John",
    role: "Designer",
    stars: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur quisquam qui.",
  },
  {
    avatar: "/image/poto2.jpg",
    name: "Rini Sumarni",
    role: "Programmer",
    stars: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur quisquam qui.",
  },
  {
    avatar: "/image/pf3.jpeg",
    name: "Abdul Malik",
    role: "Ceramista",
    stars: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur quisquam qui.",
  },
];

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () =>
    setCurrentReview(
      currentReview === reviews.length - 1 ? 0 : currentReview + 1
    );
  const previousReview = () =>
    setCurrentReview(
      currentReview === 0 ? reviews.length - 1 : currentReview - 1
    );

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [currentReview]);

  const { avatar, name, role, stars, comment } = reviews[currentReview];

  return (
    <section
      id="reviews"
      className="max-w-100max w-full my-0 mx-auto py-0 px-8 mb-28 mt-14 flex flex-col items-center"
    >
      <h2 className="font-bold text-4xl text-base-sub-title mb-16">
        Testimonial
      </h2>
      <div className="flex flex-col items-center max-w-60rem relative">
        <button
          className="absolute bg-red-kokumi border-none outline-none p-4 rounded-md text-white font-bold text-3xl left-0 top-20 hover:cursor-pointer"
          onClick={previousReview}
        >
          &larr;
        </button>
        <Image
          src={avatar}
          alt="avatar"
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h3 className="text-center font-bold text-2xl text-base-sub-title mb-2">
          {name}
        </h3>
        <h4 className="text-center font-normal text-xl text-base-sub-title mb-2">
          {role}
        </h4>
        <Stars stars={stars} />
        <p className="text-center text-center font-normal text-medium text-base-sub-title">
          {comment}
        </p>
        <button
          className="absolute bg-red-kokumi border-none outline-none p-4 rounded-md text-white font-bold text-3xl right-0  top-20 hover: cursor-pointer "
          onClick={nextReview}
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Review;
