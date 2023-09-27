const getCharacters = async (page, name, status, gender) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&status=${status}&gender=${gender}`
    );
    return await res.json();
  } catch (e) {
    console.log("Error getting charachters! Line 8 in getCharachters.js");
  }
};

export default getCharacters;
