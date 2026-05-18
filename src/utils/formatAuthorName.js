export const formatAuthorName = (name) => {
  if (!name) return ''

  const prefixes = ['Saint', 'Sir', 'Lord', 'Lady', 'Dr']
  const parts = name.split(', ')

  if (parts.length === 1) return name

  if (parts.length === 3) {
    const [surname, given, prefix] = parts
    if (prefixes.includes(prefix)) return `${prefix} ${given} ${surname}`
    return `${given} ${parts[2]} ${surname}`
  }

  return parts.length === 2 ? `${parts[1]} ${parts[0]}` : name
}