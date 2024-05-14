export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "http://localhost:8080/api";
export const tmdbAPI = {
  getAPI: (type) => `${apiKey}/${type}`,
};
