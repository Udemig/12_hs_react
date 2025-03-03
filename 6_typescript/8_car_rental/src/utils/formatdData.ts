import { Car } from "../types";

type ReturnType = [string, string | number | null][];

export default function formatData(car: Car): ReturnType {
  // nesen içerisindeki ekrana basıcağımız değerler
  const accepted = [
    "make",
    "model",
    "cylinders",
    "drive",
    "fueltype",
    "trany",
    "vclass",
    "year",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  // nesneyi diziye çevirelim
  const arr = Object.entries(car).filter((i) => accepted.includes(i[0]));

  // değeri döndür
  return arr;
}
