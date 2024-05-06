import { Cover1, Cover2 } from "../assets/cover";
import { Forest, LostInCityLight } from "../assets/songs";

import type { Song } from "../types/Songs";

export const Songs: Array<Song> = [
  {
    id: "1e4711ff-9a3b-4519-95e0-5ee1781b4ab4",
    preview: Cover2,
    source: Forest,
    name: "Forest Lullaby",
    author: "Lesfm",
  },
  {
    id: "32806e04-d4a1-4d4e-a7e9-c2dc1e2bf60f",
    source: LostInCityLight,
    preview: Cover1,
    name: "Lost in teh City Light",
    author: "Cosmo Sheldrake",
  },
];
