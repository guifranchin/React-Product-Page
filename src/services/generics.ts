import axios from "axios";
function getInstance() {
  const baseURL = "http://localhost:3000";

  return axios.create({
    baseURL,
  });
}

export async function get(endpoint: string) {
  try {
    const axios = getInstance();
    return await axios.get(endpoint);
  } catch (error: any) {
    throw error;
  }
}

export async function post(endpoint: string, body: any) {
  try {
    const axios = getInstance();
    const res = await axios.post(endpoint, body);
    return res.data;
  } catch (error: any) {
    throw error.response;
  }
}

export async function put(endpoint: string, body: any) {
  try {
    const axios = getInstance();
    const res = await axios.put(endpoint, body);
    return res.data;
  } catch (error: any) {
    throw error.response;
  }
}

export async function del(endpoint: string) {
  try {
    const axios = getInstance();
    const res = await axios.delete(endpoint);
    return res.data;
  } catch (error: any) {
    throw error.response;
  }
}
