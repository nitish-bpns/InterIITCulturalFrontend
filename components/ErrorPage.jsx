import Link from "next/link";
import Styles from "./ErrorPage.module.css";

const ErrorPage = ({ statusCode }) => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>{statusCode} - Error</h1>
      <p className={Styles.message}>
        {statusCode === 404
          ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
          : "An error occurred."}
      </p>
      <Link className={Styles.button} href="/">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
