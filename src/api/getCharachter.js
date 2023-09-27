const getCharacter = async (id) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return await res.json();
  } catch (e) {
    console.log("Error getting charachter! Line 6 in getCharachter.js");
  }
};

export default getCharacter;
