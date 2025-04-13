// api isteğini atıp cevabı döndüren fonksiyon
const getRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};

const getRecipe = async (id) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  return res.json();
};

export { getRecipes, getRecipe };
