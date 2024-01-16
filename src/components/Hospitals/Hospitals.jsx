import '../Hospitals/hospitals.css'
import {useTranslation} from 'react-i18next';
import { mockObs } from "../mockObs";
import Sucursales from './Branches';


function ObraSocial({obra}) {
    return (
        <a className={obra.obra} title={`Página de ${obra.obra}`} href={obra.pag} target="_blank" rel="noopener noreferrer">{' '}</a>
    );
}




export const Hospitals = () => {
    const[t] = useTranslation("global");
    return(
<>
    <section className='text-light d-flex flex-column gap-3 mt-5'>
        <h1>{t("ObrasSociales.title")}</h1>
        <p>{t("ObrasSociales.text")}</p>
        <div className="d-flex">
        <img src="/img/doctor1.svg" className="img-obs"></img>
        <div className="obrasSociales">
            {mockObs.map((obra, index) => (
            <ObraSocial key={index} obra={obra} />
        ))}
        </div>
        <img src="/img/doctor2.svg" className="img-obs"></img>
        </div>
    </section>
    <Sucursales></Sucursales>
</>
    )}
