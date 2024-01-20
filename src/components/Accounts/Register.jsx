import { useState } from 'react';
import '../Accounts/accounts.css'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [t] = useTranslation("global");

    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [mail, setMail] = useState();
    const [document, setDocument] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, lastname, mail, document, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }

    

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">{t("accounts.register-title")}</h5>
                            <form onSubmit={handleSubmit}>

                                <div className="row g-2 mb-3">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingInputName" onChange={(e) => setName(e.target.value)} />
                                            <label htmlFor="floatingInputName">{t("accounts.name")}</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingInputLastName" onChange={(e) => setLastname(e.target.value)} />
                                            <label htmlFor="floatingInputLastName">{t("accounts.lastname")}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInputEmail" onChange={(e) => setMail(e.target.value)} />
                                            <label htmlFor="floatingInputEmail">{t("accounts.mail")}</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="floatingInputDNI" onChange={(e) => setDocument(e.target.value)} />
                                            <label htmlFor="floatingInputDNI">{t("accounts.document")}</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} />
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