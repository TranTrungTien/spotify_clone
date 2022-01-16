import PropTypes from "prop-types";
import Hero from "../../../../components/Hero";
import Queue from "../../../../components/Queue";

const Playlist = ({ heroOpt, playlist }) => {
  return (
    <>
      <Hero information={heroOpt && heroOpt} />
      <Queue playlist={playlist && playlist} />
    </>
  );
};

Playlist.propTypes = {
  heroOpt: PropTypes.object,
  playlist: PropTypes.array,
};
export default Playlist;
