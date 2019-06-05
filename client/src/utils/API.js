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

export const addParty = partyData =>{
  return axios.post("/api/party/register", {partyData});
};

export const updateParty = (partyId, partyData) =>{
  return axios.put(`/api/party/update/${partyId}`, partyData);
};

// expect query to look like {id: 1} or {size: "big"}
export const findMonsterByName = monsterName => {
  return axios.get(`/api/monster/name/${monsterName}`);
};

export const findMonsterById = monsterId => {
  return axios.get(`/api/monster/id/${monsterId}`);
};

export const findMonsterByCr = monsterCr => {
  return axios.get(`/api/monster/cr/${monsterCr}`);
};

