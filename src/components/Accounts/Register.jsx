import '../Accounts/accounts.css'
import { useTranslation } from 'react-i18next';

export const Register = () => {
    const [t] = useTranslation("global");

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">{t("accounts.register-title")}</h5>
                            <form>

                                <div className="row g-2 mb-3">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingInputName" />
                                            <label htmlFor="floatingInputName">{t("accounts.name")}</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingInputLastName" />
                                            <label htmlFor="floatingInputLastName">{t("accounts.lastname")}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInputEmail" />
                                            <label htmlFor="floatingInputEmail">{t("accounts.mail")}</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="floatingInputDNI" />
                                            <label htmlFor="floatingInputDNI">{t("accounts.document")}</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" />
                                    <label htmlFor="floatingPassword">{t("accounts.password")}</label>
                                </div>

                                <div className="d-grid mb-2">
                                    <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">{t("accounts.btn-register")}</button>
                                </div>

                                <a className="d-block text-center mt-2 small" href="/login">{t("accounts.haveacc")}</a>
                            </form>
                        </div>
                        <div className="card-img-right d-none d-md-flex">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}