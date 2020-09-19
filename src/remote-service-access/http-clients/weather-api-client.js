import appConfig from '../../../public/config'
import axios from 'axios'

/**
 * This is sample API call. For your own API client, copy the content
 * below, create a new file in the http-clients folder and change
 * the parameters based on your need.
 *
 * An http client should represent a client with common attributes
 * that you would otherwise have to write code for every where
 * you wish to use it.
 */
export const weatherAPIClient = axios.create(
  {
    baseURL: appConfig.weatherAPIConfig.baseURL,
    timeout: 2000,
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': '220a6d8ba6mshd8e484db461e6b1p15949cjsn887e6f676a8a',
      useQueryString: true
    }
  }
)
