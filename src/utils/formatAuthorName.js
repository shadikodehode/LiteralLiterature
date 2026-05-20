export const formatAuthorName = (name) => {
  if (!name) return ''

  const prefixes = ['Saint', 'Sir', 'Lord', 'Lady', 'Dr']
  const parts = name.split(', ')

  if (parts.length === 1) return name

  if (parts.length === 3) {
    const [surname, epithet, prefix] = parts
    if (prefixes.includes(prefix)) {
      const short = prefix === 'Saint' ? 'St.' : prefix
      return `${short} ${surname} ${epithet}`
    }
    return `${epithet} ${parts[2]} ${surname}`
  }

  return parts.length === 2 ? `${parts[1]} ${parts[0]}` : name
}