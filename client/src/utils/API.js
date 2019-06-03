import axios from "axios";

export const loginUser = userData =>{
  return axios.post("/api/user/login", userData);
};
export const registerUser = userData =>{
  return axios.post("/api/user/register", userData);
};
export const getUserInfo = () =>{
  return axios.get("/api/user/");
};

export const getPartyInfo = () =>{
  return axios.get("/api/party/");
};

export const addParty = () =>{
  return axios.post("/api/party/register");
};

export const updateParty = (partyId, partyData) =>{
  return axios.put(`/api/party/update/${partyId}`, partyData);
};

// expect query to look like {id: 1} or {size: "big"}
export const findMonster = (query) => {
  return axios.get('/api/monsters', {
    params: query
  });
};

export const findMonsterById = monsterId => {
  return axios.get(`/api/monster/${monsterId}`);
};
