import PropTypes from "prop-types";

const Right = ({ handleChangeVolume }) => {
  const handleChange = (e) => {
    if (handleChangeVolume) {
      handleChangeVolume(e.target.value);
    }
  };

  return (
    <div className="flex-1 self-end h-full">
      <div className="flex justify-end items-center w-full h-full space-x-3">
        <div>
          <button>
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="text-gray-400 hover:text-gray-200"
              fill="currentColor"
            >
              <path d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z"></path>
            </svg>
          </button>
        </div>
        <div>
          <button>
            <svg
              role="img"
              height="16"
              width="16"
              aria-label="Connect to a device"
              viewBox="0 0 16 16"
              className="text-gray-400 hover:text-gray-200"
              fill="currentColor"
            >
              <path d="M0 3v8c0 .55.45 1 1 1h5v-1H1V3h5V2H1c-.55 0-1 .45-1 1zm3 11.5c0 .275.225.5.5.5H6v-1H3.5c-.275 0-.5.225-.5.5zM15 2H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H9V3h6v11zm-3-8a.75.75 0 100-1.5.75.75 0 000 1.5zm0 6a2 2 0 100-4 2 2 0 000 4zm0-3c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <button>
            <svg
              role="presentation"
              height="16"
              width="16"
              aria-label="Volume medium"
              id="volume-icon"
              viewBox="0 0 16 16"
              className="text-gray-400 hover:text-gray-200"
              fill="currentColor"
            >
              <path d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.957-.402-.924-1.124-1.623L11 3.69q.873.834 1.369 1.957.496 1.123.496 2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z"></path>
            </svg>
          </button>
          <div className="cursor-pointer group w-20 py-1">
            <div className="flex items-center w-full progressbar">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="40"
                id="volume"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Right.propTypes = {
  handleChangeVolume: PropTypes.func,
};

export default Right;
