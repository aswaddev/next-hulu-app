import Movie from "./Movie";
import FlipMove from "react-flip-move";

const Results = ({ items }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {items.map((item) => (
        <Movie movie={item} key={item.id} />
      ))}
    </FlipMove>
  );
};

export default Results;
