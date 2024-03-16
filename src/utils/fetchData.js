const optionsExercise = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "049b096a39msh74a78b0dc00f299p16bac0jsn607f15d92e2d",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "049b096a39msh74a78b0dc00f299p16bac0jsn607f15d92e2d",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export async function fetchData(url, options = optionsExercise) {
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}
