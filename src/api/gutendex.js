const fetchGutendex = async (endpoint, params = {}) => {
  const url = new URL(`https://gutendex.com/${endpoint}`)
  Object.entries(params).forEach(([key, value]) => {
    if(value) url.searchParams.append(key, value)
  })
  const response = await fetch(url)
  if(!response.ok) throw new Error(`${response.status}`)
    return await response.json()
}

export const fetchBooks = ({ search, topic, page}) =>
  fetchGutendex('books/', {search, topic, page})

export const fetchBookId = (id) =>
  fetchGutendex(`books/${id}`)