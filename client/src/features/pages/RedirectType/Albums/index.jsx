import PropTypes from "prop-types";
import Hero from "../../../../components/Hero";
import Queue from "../../../../components/Queue";

const Albums = ({ heroOpt, playlist }) => {
  console.log(heroOpt);
  console.log(playlist);

  return (
    <>
      <Hero information={heroOpt && heroOpt} />
      <Queue
        playlist={playlist && playlist}
        imageUrl={heroOpt?.imageUrl}
        type="album"
      />
    </>
  );
};

Albums.propTypes = {
  heroOpt: PropTypes.object,
  playlist: PropTypes.array,
};

export default Albums;
