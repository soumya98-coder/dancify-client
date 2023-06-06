import { nanoid } from "nanoid";

enum DanceStyle {
  HIPHOP = "HIP-HOP",
  POPPING = "POPPING",
  HOUSE = "HOUSE",
  BREAKING = "BREAKING",
  FREESTYLE = "FREESTYLE",
  JAZZ = "JAZZ",
  ZUMBA = "ZUMBA",
  CONTEMPORARY = "CONTEMPORARY",
}

export const danceStyles = [
  { id: nanoid(), name: "Hip-Hop", value: "HIPHOP" },
  { id: nanoid(), name: "Popping", value: "POPPING" },
  { id: nanoid(), name: "House", value: "HOUSE" },
  { id: nanoid(), name: "Breaking", value: "BREAKING" },
  { id: nanoid(), name: "Freestyle", value: "FREESTYLE" },
  { id: nanoid(), name: "Jazz", value: "JAZZ" },
  { id: nanoid(), name: "Zumba", value: "ZUMBA" },
  { id: nanoid(), name: "Contemporary", value: "CONTEMPORARY" },
];

export const danceStyleValues = {
  HIPHOP: "Hip-Hop",
  POPPING: "Popping",
  HOUSE: "House",
  BREAKING: "Breaking",
  FREESTYLE: "Freestyle",
  JAZZ: "Jazz",
  ZUMBA: "Zumba",
  CONTEMPORARY: "Contemporary",
};
