import { mockObs } from "../mockObs";
import { mockSur } from "../mockSur";
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import '../Hospitals/branches.css'

function DivTitles(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDiv = () => {
        setIsOpen(!isOpen);
        props.onToggle(props.name);
    };

    return (
        <div className="titlediv">
            <h1>{props.name.toUpperCase()}</h1>
            <button
                className={`btn-sucursal ${props.name}-${isOpen ? 'close' : 'toggle'}`}
                onClick={toggleDiv}
            >
            </button>
        </div>
    );
}

function CardSucursales(props) {
    const path = '/sucursales/';
    return (
        <div className={`sucursales`}>
            <img src={path + props.img} alt='Imagen de la Sucursal' />
            <p dangerouslySetInnerHTML={{ __html: props.ubi }} />
        </div>
    );
}

function Sucursales() {
    const [t] = useTranslation("global");
    const [activeClasses, setActiveClasses] = useState({});

    const handleToggle = (name) => {
        setActiveClasses({
            ...activeClasses,
            [name]: !activeClasses[name]
        });
    };

    return (
        <section id="direcciones" className="ubicaciones">
            <p>{t("ObrasSociales.text-2")}</p>
            {mockObs.map((obras, index) => (
                <React.Fragment key={index}>
                    <DivTitles name={obras.obra} onToggle={handleToggle} />
                    <div className={`card-sucursal ${obras.obra}_sucursales ${activeClasses[obras.obra] ? 'active' : ''}`}>
                        {mockSur[obras.obra].map((sucursal, index) => (
                            <CardSucursales
                                key={index}
                                name={obras.obra}
                                img={sucursal.img}
                                ubi={sucursal.ubi}
                                active={activeClasses[obras.obra]}
                            />
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </section>
    );
}

export default Sucursales;