import '../Home/home.css';
import {useTranslation} from 'react-i18next';

export const Home = () => {
  const[t] = useTranslation("global");
  return (
    <div className="w-100 h-100">
      <div className="bg-img">
      </div>
      <div className="position-absolute top-50 start-50 translate-middle cs-font">
        <h1>{t("header.title")}<span className='spanhome'>MED</span></h1>
      </div>
    </div>
  )
}
