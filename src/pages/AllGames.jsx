import React from "react";
import { Link, useLoaderData } from "react-router";
import GameCard from "../components/GameCard";

const AllGames = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-10 m-5 max-sm:grid-cols-1 max-lg:grid-cols-2">
      {data.map((i) => (
        <Link key={i.id} to={`/game-details/${i.id}`}>
          <GameCard i={i} />
        </Link>
      ))}
    </div>
  );
};

export default AllGames;
