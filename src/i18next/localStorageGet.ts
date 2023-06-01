export const Geti18nLocalStorage = () => {
  const language = localStorage.getItem('i18nextLng')
  if (language === 'ru' || language === 'en') {
    return language
  }
  localStorage.setItem('i18nextLng', 'en')
  return null
}
