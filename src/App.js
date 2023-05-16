import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  
  const languages = [
    {
      language: 'en',
      id: 1,
    },
    {
      language: 'uz',
      id: 2,
    }
  ]

  const { t, i18n } = useTranslation()
  return (
    <>
      {languages.map((lng) => {
        return (
          <button key={lng.id} onClick={() => i18n.changeLanguage(lng.language)}>{lng.language}</button>
        )
      })}
      <h1>{t("welcome")}</h1>
    </>
  );
}

export default App;