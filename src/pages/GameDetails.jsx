import { TiStarHalfOutline } from "react-icons/ti";
import { Link, useLoaderData, useParams } from "react-router";
import useTitle from "../hooks/useTitle";

const GameDetails = () => {
  const id = useParams();
  const data = useLoaderData();
  const i = data.find((game) => game.id === id.id);
  useTitle(i.title);
  return (
    <>
      <div className="m-10">
        <div className="flex space-x-10 max-sm:block max-sm:space-y-10">
          <div>
            <img className="rounded-lg h-48" src={i.coverPhoto} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{i.title}</h1>
            <p className="mb-3">
              <span className="font-semibold">Developer:</span>
              <span className="text-primary ml-2"> {i.developer}</span>
            </p>
            <div className="">
              <p className="border-t-1 border-gray-600 pt-3 ">
                <span className="font-semibold">Category: </span>{" "}
                <span className="text-primary">{i.category}</span>
              </p>
              <p className="mb-3 flex items-center gap-2">
                <span className="font-semibold">Ratings:</span>{" "}
                <span className="flex items-center gap-0.5 text-primary">
                  <TiStarHalfOutline /> {i.ratings}
                </span>
              </p>
            </div>
            <Link to={i.downloadLink} className="btn btn-primary w-30">
              Install
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t-1 border-gray-600 pt-5">
          <h2 className="font-bold mb-3">About this game</h2>
          <p>{i.description}</p>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
