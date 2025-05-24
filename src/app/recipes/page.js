import RecipeListClient from "../components/RecipeListClient";

export default async function Page() {
  const res = await fetch('https://dummyjson.com/recipes');
  const { recipes } = await res.json();

  return <RecipeListClient recipes={recipes} />;
}