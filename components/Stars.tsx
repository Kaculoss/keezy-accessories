import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type Props = {
  rating: number;
  reviews: number;
};

const Stars = ({ rating, reviews }: Props) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span className="mr-1 text-base text-yellow-500" key={index}>
        {rating > number ? (
          <BsStarFill />
        ) : rating > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center mb-2">
      <div className="flex items-center">{tempStars}</div>
      <p className="reviews ml-2 mb-0">({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
