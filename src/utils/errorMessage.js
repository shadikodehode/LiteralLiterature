export const getErrorMessage = (error) => {
    if (error.message.includes('404')) return 'Page not found'
    if (error.message.includes('500')) return 'Server error, try again later'
    if (error.message.includes('429')) return 'Too many requests'
    return 'Something went wrong'
  }