import axios, { AxiosRequestConfig } from "axios";
//* Define interfaces for the types used in the API
export interface IUSERS {
email: string;
password: string;
token: string;
}
export interface ICATEGORY {
id: string;
name: string;
}
export interface IANIMAL {
id: string;
name: string;
age: number;
img:any
categoryId: string;
description?: string;
phone?: string;
email?: string;
}

//* Define functions for making API requests
export const getCategories = async (token: string): Promise<ICATEGORY[]> => {
try {
const config: AxiosRequestConfig = {
headers: { Authorization: `Bearer ${token}` },
};
const response = await API.get("/categories", config);
return response.data;
} catch (error) {
console.error("Erro na requisição", error);
throw error;
}
};
export const getAnimals = async (token: string): Promise<IANIMAL[]> => {
try {
const config: AxiosRequestConfig = {
headers: { Authorization: `Bearer ${token}` },
};
const response = await API.get("/animals", config);
return response.data;
} catch (error) {
console.error("Erro na requisição", error);
throw error;
}
};
//* Create an instance of Axios with the API base URL and a timeout of 1 second
export const API = axios.create({
baseURL: "https://tools.lab.ianclive.com/test-mobile-api",
timeout: 1000,
});
//* Define a function for signing in a user
export const signIn = async (
username: string,
password: string
): Promise<{ success: boolean; message?: string; token?: string }> => {
try {
const response = await API.post("/auth/signin", {
username: username,
password: password,
});
return { success: true, token: response.data.token };
} catch (error) {
console.error("Erro na requisição", error);
const err = error as Error;
if (err.message === "Usuário ou senha incorretos") {
return { success: false, message: "Usuário ou senha incorretos" };
} else {
return { success: false, message: "Ocorreu um erro ao fazer login" };
}
}
};
export const getAnimalById = async (id: string, token: string): Promise<IANIMAL> => {
    try {
      const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await API.get(`/animals/${id}`, config);
      return response.data;
    } catch (error) {
      console.error("Erro na requisição", error);
      throw error;
    }
  };
  