const BASE_URL = 'http://localhost:5000/api';

export const generateRecipe = async (ingredients) => {
  const response = await fetch(`${BASE_URL}/recipe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients }),
  });
  return await response.json();
};
