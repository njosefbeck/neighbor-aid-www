import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SignupForm from "../components/signup-form"

const IndexPage = () => {
  return (
    <div className={styles.wrapper}>
      <SEO title="Join Us" />
      <h1 className={styles.header}>
        Neighbor Aid
        <Link to="/es" className={styles.langToggle}>
          ¿Prefieres español?
        </Link>
      </h1>
      <h2>Our mission: to help local communities stand together in solidarity in the face of financial crisis.</h2>
      <p>We're building a not-for-profit web app to make it easier for local communities to exchange money with each other in times of financial crisis.</p>
      <p>To learn more, and be notified of when we launch, submit your email below.</p>
      <SignupForm />
      <p className={styles.interested}>Interested in helping out with the project? <a href="mailto:hello@neighboraid.co">Let us know!</a></p>
    </div>
  )
}

export default IndexPage