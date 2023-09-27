const getCharacters = async (page) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return await res.json();
  } catch (e) {
    console.log("Error getting charachters! Line 8 in getCharachters.js");
  }
};

export default getCharacters;
