import React from "react";
import Categories from "../../../../components/Categories";
import GenreCard from "../../../../components/GenreCard";
import { color } from "../../../../Constants/basicBackgroundColor";
import { genreAvailable } from "../../../../Constants/genreAvailable";
import { genreImg } from "../../../../Constants/genreImages";

const BaseSearches = () => {
  const category = {
    category_id: "",
    category: "Recently Searches",
    list: [
      {
        collaborative: false,
        description:
          "Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: LISA",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0F4i7Q9pshJ",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX0F4i7Q9pshJ",
        id: "37i9dQZF1DX0F4i7Q9pshJ",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f00000003a157d03e2d548b6be2357605",
            width: null,
          },
        ],
        name: "Hot Hits Vietnam",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTYzNDI1MjQwMCwwMDAwMDFlNDAwMDAwMTdjODEwOGE2MzIwMDAwMDE3YzU5ZGJlYTQ1",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX0F4i7Q9pshJ/tracks",
          total: 58,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DX0F4i7Q9pshJ",
      },
      {
        collaborative: false,
        description: "V-Pop đã đơm hoa trên những khúc ca này. Ảnh bìa: ERIK",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4g8Gs5nUhpp",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX4g8Gs5nUhpp",
        id: "37i9dQZF1DX4g8Gs5nUhpp",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f000000031623e220ccccc3c2cf9910dd",
            width: null,
          },
        ],
        name: "V-Pop Không Thể Thiếu",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTYzNDEyOTYwNywwMDAwMDFjYzAwMDAwMTdjNzliNmZiMzAwMDAwMDE3YzBjNzcxOWJh",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX4g8Gs5nUhpp/tracks",
          total: 51,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DX4g8Gs5nUhpp",
      },
      {
        collaborative: false,
        description:
          "Dòng chảy của rap Việt luôn cuồn cuộn với các tên tuổi Đen, Da LAB, Binz...",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWYLMi9ZNZUaz",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWYLMi9ZNZUaz",
        id: "37i9dQZF1DWYLMi9ZNZUaz",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f000000037d2a870e04228514b0b9813f",
            width: null,
          },
        ],
        name: "Hip-hop Việt",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTYzNDI1ODgwMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWYLMi9ZNZUaz/tracks",
          total: 50,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DWYLMi9ZNZUaz",
      },
      {
        collaborative: false,
        description: "Những ca khúc hay nhất từ dòng nhạc mới mẻ và đa dạng ",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWT2oR9BciC32",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWT2oR9BciC32",
        id: "37i9dQZF1DWT2oR9BciC32",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f000000031059a0ed14fb65ee3dda4634",
            width: null,
          },
        ],
        name: "Indie Việt",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTYzNDI1ODgxOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWT2oR9BciC32/tracks",
          total: 51,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DWT2oR9BciC32",
      },
      {
        collaborative: false,
        description:
          "Một nửa mềm mại của làng nhạc Việt. Ảnh bìa: Văn Mai Hương",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX5UMwGFV95IS",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX5UMwGFV95IS",
        id: "37i9dQZF1DX5UMwGFV95IS",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f00000003c72ba35f5b9f1f9df709e6c9",
            width: null,
          },
        ],
        name: "Đóa Hồng Nhạc Việt",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTYzNDIyMzYwMCwwMDAwMDEwZTAwMDAwMTdjN2Y1MTMyMDIwMDAwMDE3YzNhOWE2MmE2",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX5UMwGFV95IS/tracks",
          total: 53,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DX5UMwGFV95IS",
      },
      {
        collaborative: false,
        description: "Những nhạc phẩm đi vào lòng người từ nhiều thế hệ.",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWWdlSG3xntgM",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWWdlSG3xntgM",
        id: "37i9dQZF1DWWdlSG3xntgM",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f00000003d5e0f4cc8134209f0243829c",
            width: null,
          },
        ],
        name: "Bolero Tuyệt Phẩm",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTYzNDI1ODgxOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWWdlSG3xntgM/tracks",
          total: 50,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DWWdlSG3xntgM",
      },
    ],
  };
  return (
    <div className="px-7 pt-7 pb-32 space-y-10">
      <div>
        <Categories category={category} />
      </div>
      <div className="space-y-4">
        <h1 className="text-gray-300 text-2xl font-bold">Your Top Genre</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <a href="/browser/Pop">
            <div
              style={{
                backgroundColor: `${color[0]}`,
              }}
              className="rounded-lg relative w-full h-220 overflow-hidden"
            >
              <h1 className="text-4xl font-bold text-gray-200 absolute top-3 left-3">
                Pop
              </h1>
              <div className=" w-128 h-128 absolute bottom-0 right-0">
                <img
                  src={genreImg[0]}
                  alt="genre"
                  className="w-full h-full object-cover object-center rounded transform rotate-20 translate-x-6 translate-y-2"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-gray-300 text-2xl font-bold">Browser All</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "20px",
          }}
        >
          {genreAvailable.map((genre, index) => {
            const colorIndex = Math.round(
              Math.random() * (color.length - 1 - 0) + 0
            );
            const imgIndex = Math.round(
              Math.random() * (genreImg.length - 1 - 0) + 0
            );
            return (
              <GenreCard
                key={index}
                backgroundColor={color[colorIndex]}
                backgroundImage={genreImg[imgIndex]}
                genreTitle={genre}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BaseSearches;
