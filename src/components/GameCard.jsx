import React from "react";
import { TiStarHalfOutline } from "react-icons/ti";

const GameCard = ({ i }) => {
  return (
    <div className="space-y-3 p-2 rounded-lg shadow">
      <img className="rounded-lg " src={i.coverPhoto} alt="" />
      <h2 className="text-xl font-bold">{i.title}</h2>
      <div className="flex justify-between">
        <p className="bg-primary rounded-2xl px-2 text-white">{i.developer}</p>
        <p className="flex items-center bg-primary rounded-2xl px-2 text-white">
          <TiStarHalfOutline />
          <span className="pl-1 "></span>
          {i.ratings}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
