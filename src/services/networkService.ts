import axios, { AxiosInstance, AxiosResponse } from 'axios'

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1'

class NetworkService {
  private _instance: AxiosInstance

  constructor(baseURL: string, timeout: number) {
    this._instance = this._createInstance(baseURL, timeout)
  }

  // Create a new instance of axios with a custom config
  _createInstance(baseURL: string, timeout: number): AxiosInstance {
    return axios.create({
      baseURL,
      timeout,
    })
  }

  // GET request wrapper
  async get<T>(
    url: string,
    params?: unknown,
    headers?: any
  ): Promise<AxiosResponse<T>> {
    return this._instance.get<T>(url, { params, headers })
  }
}

const createNetworkService = (baseURL: string) => {
  return new NetworkService(baseURL, 1000 * 30)
}

const networkService = createNetworkService(baseURL || '')

export default networkService
