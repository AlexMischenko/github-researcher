import { getRepositories as getRepositoriesApi } from '../api/github'

export const getRepositories = ({ query, page = 1, per_page = 10 }) => {
  return getRepositoriesApi({ query, page, per_page })
}