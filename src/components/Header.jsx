
import { Link } from 'react-router-dom'
import { useThemeContext } from '../contexts/ThemeContext'
import { UseLanguageContext } from '../contexts/LanguageProvider'

const Header = () => {
const{language,toggleLanguage} = UseLanguageContext()
  return (
    <header>
      <button  onClick={toggleLanguage}>{language}</button>
     <Link to={'/'}>main</Link>
      <Link to={'/create'}>create</Link>
    </header>
  )
}

export default Header