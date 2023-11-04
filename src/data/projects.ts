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
      tools: "react, typescript, chakra ui, rawg api",
    },

    {
      name: "portfolio",
      description: "the site you're currently on.",
      image: portfolio,
      link: "https://nana0sei.vercel.app/",
      git: "https://github.com/nana0sei/portfolio",
      tools: "react, typescript, chakra ui",
    },

    {
      name: "spotify lite",
      description: "work in progress. a lite version of spotify.",
      image: spotify,
      link: "",
      git: "https://github.com/nana0sei/spotify-lite",
      tools: "react, typescript, chakra ui, spotify api",
    },
  ],
};
