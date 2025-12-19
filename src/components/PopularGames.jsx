import React from "react";
import GameCard from "./GameCard";
import { Link } from "react-router";

const PopularGames = ({ data }) => {
  const newArr = [...data].sort((a, b) => b.ratings - a.ratings);
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl font-bold my-10">Popular Game</h1>
      <div className="grid grid-cols-3 mx-3 max-md:grid-cols-1 max-md:mx-5 gap-10">
        {newArr.slice(0, 3).map((i) => (
          <Link key={i.id} to={`/game-details/${i.id}`}>
            <GameCard key={i.id} i={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
