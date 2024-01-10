import { api } from "./index";


const apiKey = "47108920392945f7ab04f2ea1857b8d2";

 export const getAllGames = async (page) => {
  const { data } = await api.get(
    `/games?key=${apiKey}&page=${page}&page_size=102`
  );

  return data;
};

export const getGamesByGenres = async (page,genres ) => {
  const { data } = await api.get(
    `/games?key=${apiKey}&page=${page}&page_size=102&genres=${genres}`
  );

  return data;
};

export const getGameById = async (id) => {
  const { data } = await api.get(`/games/${id}?key=${apiKey}`);
  return data;
};

export const getGameByTrailer = async (id) => {
  const { data } = await api.get(`/games/${id}/movies?key=${apiKey}`);
  return data.results;
};