import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SignupForm from "../components/signup-form"

const IndexPage = () => {
  return (
    <div className={styles.wrapper}>
      <SEO
        title="Unir con nosotros"
        lang="es"
        description="Una app en la web que les ayuda a las comunidades locales estar unidos frente a los problemas financiales al hacerlos más fácil de intercambiar dinero entre las personas."
      />
      <h1 className={styles.header}>
        Neighbor Aid
        <Link to="/" className={styles.langToggle}>
          Prefer English?
        </Link>
      </h1>
      <h2>Nuestra misión: ayudar a las comunidades locales estar unidos ante los problemas financiales.</h2>
      <p>Estamos construyendo una app en la web sin fines de lucro para hacerlo más fácil intercambiar dinero entre la gente de tu comunidad en tiempos de dificultades financiales.</p>
      <p>Para aprender más, y recibir noticias cuando lanzamos, registra tu correo electrónico abajo.</p>
      <SignupForm lang="es" />
      <p className={styles.interested}>¿Quiere ayudar con este proyecto? <a href="mailto:hello@neighboraid.co">¡Déjanos saber!</a></p>
    </div>
  )
}

export default IndexPage