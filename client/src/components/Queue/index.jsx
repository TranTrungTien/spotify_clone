import PropTypes from "prop-types";
import LineList from "../LineList";
import TopQueue from "../TopQueue";

const Queue = ({ playlist, imageUrl, type, children }) => {
  return (
    <section className="text-gray-400 relative">
      <div className="w-full h-56 absolute bg-gradient-to-t from-transparent to-gray-700 -z-10"></div>
      <div className="w-full">
        <div className="px-8">
          <TopQueue />
        </div>
        {children}
        <div>
          <LineList playlist={playlist} imageUrl={imageUrl} type={type} />
        </div>
      </div>
    </section>
  );
};

Queue.propTypes = {
  playlist: PropTypes.array,
  imageUrl: PropTypes.string,
  type: PropTypes.string,
};

export default Queue;
