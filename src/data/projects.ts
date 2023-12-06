import gamehub from "../assets/gamehub.png";
import portfolio from "../assets/portfolio.png";
import spotify from "../assets/spotify.png";

export default {
  data: [
    {
      name: "gamehub",
      description: "a lite version of rawg.io, a game discovery website.",
      image: gamehub,
      link: "https://game-hub-nana0sei.vercel.app/",
      git: "https://github.com/nana0sei/game-hub",
      tools: "react, typescript, rawg api",
    },

    {
      name: "spotify lite",
      description: "search, browse featured playlists and play previews.",
      image: spotify,
      link: "https://spotify-lite.vercel.app/",
      git: "https://github.com/nana0sei/spotify-lite",
      tools: "react, typescript, spotify api",
    },

    {
      name: "portfolio",
      description: "the site you're currently on.",
      image: portfolio,
      link: "https://nana0sei.vercel.app/",
      git: "https://github.com/nana0sei/portfolio",
      tools: "react, typescript",
    },
  ],
};
