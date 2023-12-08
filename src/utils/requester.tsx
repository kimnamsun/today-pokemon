import axios, { AxiosResponse } from 'axios';

const createApi = (headers?: any) => {
  const request = axios.create({
    responseType: 'json',
  });

  if (headers) {
    request.defaults.headers = { ...headers };
  }

  const get = async <P, R = undefined>(
    url: string,
    params?: P,
  ): Promise<R | undefined> => {
    try {
      const response: AxiosResponse<R> = await request.get(url, { params });
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return undefined;
  };

  return { get };
};

const api = createApi();

export { api as Api };
