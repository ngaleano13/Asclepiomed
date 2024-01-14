export const Contact = () => {
    return (
        <section className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1>Contactos</h1>
            <div className="d-flex flex-row flex-wrap gap-2 justify-content-center align-items-center">
                <ContactCard
                name="Sasha Villegas"
                linkedinUrl="https://www.linkedin.com/in/sashavillegas/"
                githubUrl="https://www.linkedin.com/in/sashavillegas/"
                imgSrc="/imgs/sasha.png"
                />
                <ContactCard
                name="Josue Ferreira"
                linkedinUrl="https://www.linkedin.com/in/josue1995/"
                githubUrl="https://www.linkedin.com/in/josue1995/"
                imgSrc="/imgs/josue.png"
                />
                <ContactCard
                name="Marilyn Diaz"
                linkedinUrl="https://www.linkedin.com/in/marilyn-d-b47934228/"
                githubUrl="https://www.linkedin.com/in/marilyn-d-b47934228/"
                imgSrc="/imgs/mari.png"
                />
                <ContactCard
                name="Nico Galeano"
                linkedinUrl="https://www.linkedin.com/in/nicolas-galeano/"
                githubUrl="https://github.com/ngaleano13"
                imgSrc="/imgs/nico.png"
                />
            </div>
        </section>
        );
}

function ContactCard({ name, linkedinUrl, githubUrl, imgSrc }) {
    return (
      <div className="card">
        <img src={imgSrc} alt="" className="card-img-top" />
        <h2>{name}</h2>
        <div className="card-body">
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="linkedin card-link">{' '}</a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="github card-link">{' '}</a>
        </div>
      </div>
    );
  }