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
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card bg-color-form flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">Turnos</h5>
                                <form>
                                    <div className="row g-2 mb-3">
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="floatingInputName" />
                                                <label htmlFor="floatingInputName">{t("turnos.name")}</label>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                        <div className="form-floating">
                                                <input type="text" className="form-control" id="floatingInputLastName" />
                                                <label htmlFor="floatingInputLastName">{t("turnos.lastname")}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-2 mb-3">
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="floatingInputCellphone" />
                                                <label htmlFor="floatingInputCellphone">{t("turnos.phone")}</label>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input type="number" className="form-control" id="floatingInputDNI" />
                                                <label htmlFor="floatingInputDNI">{t("turnos.document")}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-2 mb-3">
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <select className="form-select" id="floatingSelectSpecialist">
                                                    <option value="clinico">Clinico</option>
                                                    <option value="dermatologia">Dermatología</option>
                                                    <option value="cardiologia">Cardiología</option>
                                                    <option value="odontologia">Odontología</option>
                                                    <option value="oftalmologia">Oftalmología</option>
                                                </select>
                                                <label htmlFor="floatingSelectSpecialist">{t("turnos.specialist")}</label>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <select className="form-select" id="floatingSelectObras">
                                                    <option value="galeno">GALENO</option>
                                                    <option value="swiss">SWISS</option>
                                                    <option value="osde">OSDE</option>
                                                    <option value="uocra">UOCRA</option>
                                                    <option value="ioma">IOMA</option>
                                                </select>
                                                <label htmlFor="floatingSelectObras">{t("turnos.chooseObra")}</label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-grid mb-2">
                                        <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="button" onClick={notifyPromise}>{t("turnos.btn")}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
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


