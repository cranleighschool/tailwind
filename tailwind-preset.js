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

import { colors } from "./colors.js";

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
      colors: colors,
      fontFamily: {
        body: ["proxima-nova", "sans-serif"],
        heading: ["anth", "sans-serif"],
      },
    },
  },
};
