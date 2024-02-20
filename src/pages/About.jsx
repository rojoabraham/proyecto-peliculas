import React from 'react'

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-6">
            <div className="about-title clearfix">
              <h1 className="">
                About Abraham
              </h1>
              <h3>Abraham <span style={{color: "red"}}>Rojo</span> </h3>
              <p className="about-paddingB">
                Proyecto de API de Películas con React
              </p>
              <p>
                Aplicación que llama a la API de TMDB para traer películas. Usa Bootstrap y React básico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default About