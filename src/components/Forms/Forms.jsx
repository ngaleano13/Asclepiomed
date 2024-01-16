import '../Forms/forms.css'
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bounds } from 'leaflet';

export const Forms = () => {
    const [t] = useTranslation("global");

    const notifyPromise = () => {
        toast.promise(
            new Promise((res, rej) => {
                setTimeout(() => {
                    res();
                }, 3000);
            }), {
            pending: t("turnos.loading"),
            success: t("turnos.succes"),
            error: t("turnos.error"),
        },
            {}
        );
    };

    return (
        <section id="turnos">
            <h1>{t("turnos.title")}</h1>
            <p>{t("turnos.text")}</p>
            <div className="form_flex">
                <article>
                    <form action="" id="form_turnos">
                        <h2>{t("turnos.formtext")}</h2>
                        <div id="divform">

                            <div><label htmlFor="contact_name">{t("turnos.name")}</label>
                                <input id="contact_name" name="contact_name" type="text" maxLength="50"
                                    pattern="[A-Z a-z]{3,50}" />
                            </div>


                            <div><label htmlFor="contact_apellido">{t("turnos.lastname")}</label>
                                <input id="contact_apellido" name="contact_apellido" type="text" maxLength="50"
                                    pattern="[A-Z a-z]{3,50}" />
                            </div>


                            <div>
                                <label htmlFor="dni_cliente">{t("turnos.document")}</label>
                                <input id="dni_cliente" name="dni_cliente" type="tel" pattern="[0-9]{6,20}" />
                            </div>


                            <div>
                                <label htmlFor="contact_phone">{t("turnos.phone")}</label>
                                <input id="contact_phone" name="contact_phone" type="tel" pattern="[0-9]{6,20}" />
                            </div>


                            <div>
                                <label htmlFor="especialidad_med">{t("turnos.specialist")}</label>
                                <select id="especialidad_med" name="especialidad">
                                    <option value="clinico">Clinico</option>
                                    <option value="dermatologia">Dermatología</option>
                                    <option value="cardiologia">Cardiología</option>
                                    <option value="odontologia">Odontología</option>
                                    <option value="oftalmologia">Oftalmología</option>
                                </select>
                            </div>


                            <div>
                                <label htmlFor="fecha_turno">{t("turnos.date")}</label>
                                <input id="fecha_turno" name="fecha" type="date" />
                            </div>

                            <div>
                                <label htmlFor="obraAfiliada">{t("turnos.chooseObra")}</label>
                                <select id="obraAfiliada" name="especialidad">
                                    <option value="Swiss">SWISS</option>
                                    <option value="Galeno">GALENO</option>
                                    <option value="Uocra">UOCRA</option>
                                    <option value="Ioma">IOMA</option>
                                    <option value="Osde">OSDE</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" className="btn" onClick={notifyPromise}>{t("turnos.btn")}</button>

                    </form>
                </article>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
                limit={1}
            />
        </section>
    )
}




