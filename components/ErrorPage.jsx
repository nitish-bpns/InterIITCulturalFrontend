// components/ErrorPage.js
import Link from "next/link";
import styles from "./ErrorPage.module.css";

const ErrorPage = ({ statusCode }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{statusCode} - Error</h1>
      <p className={styles.message}>
        {statusCode === 404
          ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
          : "An error occurred."}
      </p>
      <a className={styles.button} href="/">
        Go back to the homepage
      </a>
    </div>
  );
};

export default ErrorPage;
