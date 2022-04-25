import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function postSignUp(signUpData) {
  return axios.post(`${BASE_URL}/sign_up`, signUpData);
}

function postSignIn(signInData) {
  return axios.post(`${BASE_URL}/sign_in`, signInData);
}

function getTestsByDiscipline(token) {
  return axios.get(`${BASE_URL}/tests`, createConfig(token));
}

export const api = {
  createConfig,
  postSignUp,
  postSignIn,
  getTestsByDiscipline,
};
