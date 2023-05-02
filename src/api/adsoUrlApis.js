const { default: axios } = require("axios");

const baseUrl = (envUrl) => axios.create({ baseURL: envUrl });

const apiAdso = baseUrl(process.env.API_URL);
const apiAdso2 = baseUrl(process.env.API_URL2);
const apiAdsoLocal = baseUrl(process.env.API_LOCAL);

export default { apiAdso, apiAdso2, apiAdsoLocal };
