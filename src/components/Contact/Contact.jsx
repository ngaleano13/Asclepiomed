import '../Contact/contact.css'
import {useTranslation} from 'react-i18next';

export const Contact = () => {
    const[t] = useTranslation("global");
    return (
        <div className='mt-5'>
            <div className="container py-5">
                <div className="row text-center text-white">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="fs-1">{t("contact.title")}</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    <ContactCard
                        name="Sasha Villegas"
                        linkedinUrl="https://www.linkedin.com/in/sashavillegas/"
                        githubUrl="https://www.linkedin.com/in/sashavillegas/"
                        imgSrc="/img/sasha.png"
                        rol={t("contact.rol")}
                    />
                    <ContactCard
                        name="Josue Ferreira"
                        linkedinUrl="https://www.linkedin.com/in/josue1995/"
                        githubUrl="https://www.linkedin.com/in/josue1995/"
                        imgSrc="/img/josue.png"
                        rol={t("contact.rol")}
                    />
                    <ContactCard
                        name="Marilyn Diaz"
                        linkedinUrl="https://www.linkedin.com/in/marilyn-d-b47934228/"
                        githubUrl="https://www.linkedin.com/in/marilyn-d-b47934228/"
                        imgSrc="/img/mari.png"
                        rol={t("contact.rol")}
                    />
                    <ContactCard
                        name="Nico Galeano"
                        linkedinUrl="https://www.linkedin.com/in/nicolas-galeano/"
                        githubUrl="https://github.com/ngaleano13"
                        imgSrc="/img/nico.png"
                        rol={t("contact.rol")}
                    />
                </div>
            </div>
        </div>
    );
}

function ContactCard({ name, linkedinUrl, githubUrl, imgSrc, rol }) {
    return (
        <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src={imgSrc} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">{name}</h5><span className="small text-uppercase text-muted">{rol}</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href={githubUrl} target="_blank" rel="noreferrer" className="social-link"><i className="fa fa-github"></i></a></li>
                    <li className="list-inline-item"><a href={linkedinUrl} target="_blank" rel="noreferrer" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    );
}
