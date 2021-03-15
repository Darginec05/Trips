import { API_TOKEN, API_URI } from '../config/env';

/* eslint-disable no-throw-literal */
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
      body: (body && method !== 'GET') ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) throw { status: response.status, message: response.statusText };
    if (method === 'DELETE') return {} as T;

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
