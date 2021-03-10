/* eslint-disable prefer-destructuring */
// const API_URI: string = process.env.API_URI!;
// const API_TOKEN: string = process.env.API_TOKEN!;

const API_URI = 'https://task-devel.cleevio-vercel.vercel.app/api';
const API_TOKEN = 'KA8XaQYx4veMtVF1iFSM';

type Request = {
  url: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
  options?: any;
};

export async function request({ url, method = 'GET', options = {} }: Request) {
  try {
    const _call = await fetch(`${API_URI}${url}`, {
      method,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      ...options,
    });

    const response = await _call.json();
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
