import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/form.module.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUsername("");
      setUserColor("green");
    } else {
      setErrorUsername("Username must be 8 letters long.");
      setUserColor("red");
    }

    if (email.includes("@") && email.includes(".com")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email address invalid.");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long");
      setPasswordColor("red");
    }

    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't match");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <div className={styles.formPage}>
      <Link to="/" className={styles.backBtn}>
        ← Home
      </Link>

      <div className={styles.card}>
        <div className={styles.cardImage}></div>

        <form onSubmit={validate}>
          <input
            type="text"
            placeholder="Name"
            style={{ borderBottomColor: userColor }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className={styles.error}>{errorUsername}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderBottomColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={styles.error}>{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderBottomColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={styles.error}>{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderBottomColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassowrd(e.target.value)}
          />
          <p className={styles.error}>{errorConfirmPassword}</p>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
