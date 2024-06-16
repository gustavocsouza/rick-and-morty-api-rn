import axios from "axios";

export async function api(endpoint: string) {
  return await axios.get(`https://rickandmortyapi.com/api/${endpoint}`)
}
