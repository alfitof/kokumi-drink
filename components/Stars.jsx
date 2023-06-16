import React from "react";
import Image from "next/image";

const Stars = ({ stars, reviews }) => {
  const renderStars = Array.from({ length: stars }, (_, i) => (
    <Image key={i} src="/image/star.svg" alt="estrela" width={14} height={14} />
  ));
  return (
    <div className="flex items-center mb-2">
      {renderStars}
      {reviews && <span className="text-darkSecondary">({reviews})</span>}
    </div>
  );
};

export default Stars;
