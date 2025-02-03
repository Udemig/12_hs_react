export const getUserName = (name) => {
  return "@" + name.toLowerCase().replaceAll(" ", "_");
};
