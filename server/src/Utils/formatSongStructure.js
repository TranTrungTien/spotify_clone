module.exports = {
  format: ({ album_type, artists_name, song_name, preview_url, type }) => {
    return {
      track: {
        album: {
          album_type: album_type || "Unknown",
          artists: [
            {
              name: artists_name || "Unknown",
            },
          ],
        },
        artists: [
          {
            name: song_name || "Unknown",
          },
        ],
        name: "Unknown",
        preview_url: preview_url || "Unknown",
        type: type || "Unknown",
      },
    };
  },
};
