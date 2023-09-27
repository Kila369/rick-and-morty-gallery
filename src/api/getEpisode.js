const getEpisode = async (link) => {
  try {
    const res = await fetch(link);
    return await res.json();
  } catch (e) {
    console.log("Error getting charachter! Line 6 in getCharachter.js");
  }
};

export default getEpisode;
