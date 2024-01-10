
import axios from 'axios';

export const api = axios.create({ baseURL: 'https://api.rawg.io/api/' });
export const localapi = axios.create({ baseURL: 'http://localhost:3000/Back/' });
