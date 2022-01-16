import PropTypes from "prop-types";

const GenreCard = ({
  backgroundColor = "rgb(255, 0, 0)",
  backgroundImage = "",
  genreTitle = "Pop",
}) => {
  return (
    <a href={`/browser/${genreTitle}`}>
      <div
        style={{ backgroundColor: `${backgroundColor}` }}
        className="rounded-lg relative w-full h-198 overflow-hidden"
      >
        <h1 className="text-2xl font-bold text-gray-200 absolute top-3 left-3">
          {genreTitle}
        </h1>
        <div className=" w-100 h-100 absolute bottom-0 right-0">
          <img
            src={backgroundImage}
            alt="genre"
            className="w-full h-full object-cover object-center rounded transform rotate-20 translate-x-4 translate-y-1"
          />
        </div>
      </div>
    </a>
  );
};

GenreCard.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  genreTitle: PropTypes.string,
};

export default GenreCard;
