import { LoginValues, RegisterValues } from "../types";

const initialLoginValues: LoginValues = {
  email: "",
  password: "",
};

const initialRegisterValues: RegisterValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const numbers = [
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
];

export const colors = [
  { code: "#4A69E2", id: "blue" },
  { code: "#DC143C", id: "red" },
  { code: "#FFA52F", id: "yellow" },
  { code: "#232321", id: "black" },
  { code: "#234D41", id: "green" },
  { code: "#353336", id: "dark-gray" },
  { code: "#F08155", id: "orange" },
  { code: "#C9CCC6", id: "light-gray" },
  { code: "#677282", id: "gray" },
  { code: "#925513", id: "brown" },
  { code: "#BB8056", id: "light-brown" },
];

export { initialLoginValues, initialRegisterValues };
