import '../Accounts/accounts.css';
import { useTranslation } from 'react-i18next';

export const Login = () => {
    const [t] = useTranslation("global");
    return(
    <div className="container">
        <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                    <div className="card-img-left d-none d-md-flex">
                    </div>
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-5">{t("accounts.login-title")}</h5>
                        <form>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                                <label htmlFor="floatingInputEmail">{t("accounts.mail")}</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">{t("accounts.password")}</label>
                            </div>

                            <div className="d-grid mb-2">
                                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">{t("accounts.btn-login")}</button>
                            </div>

                            <a className="d-block text-center mt-2 small" href="/register">{t("accounts.noacc")}</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}