import config from './config'

function createFetch({ baseUrl, cookie }) {
  const defaults = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      ...(cookie ? { Cookie: cookie } : null),
    },
  }

  return (url, options = {}) => (
    fetch(`${baseUrl}${url}`, {
      ...defaults,
      ...options,
      headers: {
        ...defaults.headers,
        ...(options && options.headers),
      },
    })
  )
}

function fetchApiRequest(url, options = {}) {
  return createFetch({
    baseUrl: config.apiUrl,
  })(url, options)

  .then(
    response => response,
    response => response
  )
}

export default fetchApiRequest