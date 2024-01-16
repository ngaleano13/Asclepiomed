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
    <section className='bg-hospitals text-light d-flex flex-column justify-content-center gap-2 mt-5 vh-100'>
        <h1>{t("ObrasSociales.title")}</h1>
        <h5>{t("ObrasSociales.text")}</h5>
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
