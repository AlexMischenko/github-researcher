import axios from 'axios'

import { GITHUB_BASE_URL } from '../utils/constants'

export const getRepositories = ({ query, page, per_page }) => {
  axios.get(`${GITHUB_BASE_URL}/search/repositories`, {
    params: {
      q: query,
      page,
      per_page,
    },
  })
}

export const getOrganizations = ({ query, page = 1, per_page = 10 }) => {
  // axios.get(`${GITHUB_BASE_URL}/search/repositories`, {
  //   params: {
  //     q: query,
  //     page,
  //     per_page,
  //   },
  // })
}