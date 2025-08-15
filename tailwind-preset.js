const houses = [
  "cubitt",
  "east",
  "loveday",
  "martlet",
  "north",
  "rhodes",
  "south",
  "west",
  "clubs",
  "hearts",
  "diamonds",
  "spades",
  "school-house",
];

const getSafelist = () =>
  houses.flatMap((color) => [
    `text-${color}`,
    `bg-${color}`,
    `ring-${color}`,
    `border-${color}`,
    `hover:bg-${color}`,
    `style-${color}`,
    `label-${color}`,
    `mention-${color}`,
  ]);

module.exports = {
  safelist: getSafelist(),
  getSafelist,

  theme: {
    extend: {
      colors: {
        cranleigh: {
          DEFAULT: "#021E42",
          gold: "#B0AA7E",
          wey: "#7D9CC0",
          clay: "#C09C83",
          "heathland-green": "#7F9C90",
          "chalk-lane": "#D0D0CE",
          "ivory-hall": "#D6D2C4",
          "boxwood-mist": "#BAC5B9",
        },

        cubitt: { DEFAULT: "#004C45" },
        east: { DEFAULT: "#5C88DA" },
        south: { DEFAULT: "#279989" },
        west: { DEFAULT: "#C16784" },
        loveday: { DEFAULT: "#B7312C" },
        north: { DEFAULT: "#76232F" },
        rhodes: { DEFAULT: "#D57800" },
        martlet: { DEFAULT: "#653379" },
        clubs: { DEFAULT: "#228848" },
        diamonds: { DEFAULT: "#F6BE00" },
        hearts: { DEFAULT: "#BA0C2F" },
        spades: { DEFAULT: "#0086D6" },
        "school-house": { DEFAULT: "#003087" },
      },

      fontFamily: {
        body: ["proxima-nova", "sans-serif"],
        heading: ["anth", "sans-serif"],
      },
    },
  },
};
