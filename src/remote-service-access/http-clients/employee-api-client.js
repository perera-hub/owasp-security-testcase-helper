import appConfig from '../../../public/config'
import axios from 'axios'

export const employeeAPIClient = axios.create({
  baseURL: appConfig.employeeAPIConfig.baseURL,
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' }
})
