import { useLoaderData } from "react-router";
import Carousel from "../components/Carousel";
import PopularGames from "../components/PopularGames";
import NewsLetter from "../components/NewsLetter";
import useTitle from "../hooks/useTitle";

const Main = () => {
  const data = useLoaderData();
  useTitle("Home");
  return (
    <>
      <Carousel data={data}></Carousel>
      <PopularGames data={data}></PopularGames>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Main;
