'use client';
export default function RecipeListClient({ recipes }) {
  return (
    <ul>
      {recipes.map((r) => (
        <li key={r.id}>{r.name}</li>
      ))}
    </ul>
  );
}
