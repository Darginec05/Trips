/* eslint-disable no-throw-literal */
/* eslint-disable prefer-destructuring */
// const API_URI: string = process.env.API_URI!;
// const API_TOKEN: string = process.env.API_TOKEN!;

const API_URI = 'https://task-devel.cleevio-vercel.vercel.app/api';
const API_TOKEN = 'KA8XaQYx4veMtVF1iFSM';

type Request = {
  url: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
  headers?: any;
  body?: any;
};

/**
 *
 * @param param0
 * @returns
 */
export async function request<T>({ url, method = 'GET', headers = {}, body }: Request): Promise<T> {
  try {
    const response = await fetch(`${API_URI}${url}`, {
      method,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'content-type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) throw { status: response.status, message: response.statusText };
    if (method === 'DELETE') return {} as T;

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
