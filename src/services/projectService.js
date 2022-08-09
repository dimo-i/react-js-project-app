import * as request from "./requester"
const baseUrl = 'http://localhost:3030/data/projects'

export const getAll = () => request.get(`${baseUrl}`);
// export const getAll = () => console.log("nothing hgere")
