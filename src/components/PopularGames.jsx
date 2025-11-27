import React from "react";
import GameCard from "./GameCard";

const PopularGames = ({ data }) => {
  const newArr = [...data].sort((a, b) => b.ratings - a.ratings);
  console.log(newArr);
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl font-bold my-10">Popular Game</h1>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:mx-15 gap-10 gap-5">
        {newArr.slice(0, 3).map((i) => (
          <GameCard key={i.id} i={i} />
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
