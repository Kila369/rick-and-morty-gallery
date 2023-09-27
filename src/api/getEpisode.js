const getEpisode = async (id) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    return await res.json();
  } catch (e) {
    console.log("Error getting charachter! Line 6 in getEpisode.js");
  }
};

export default getEpisode;
