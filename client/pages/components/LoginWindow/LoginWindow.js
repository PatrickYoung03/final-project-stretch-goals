import css from "./LoginWindow.module.css";
import Button from "../Button/Button";
import CreateAccountButton from "./CreateAccountButton/CreateAccountButton";
import InputField from "../InputField/InputField";

//make links from CreateAccount to student / tutor reg forms.
export default function LoginWindow() {
  return (
    <div className={css.mainContainer}>
      <div className={css.createAccountContainer}>
        <h2 className={css.create}>Create Account</h2>
        <div className={css.student}>
          <CreateAccountButton title="Student" text="Start learning today" />
        </div>
        <div className={css.tutor}>
          <CreateAccountButton title="Tutor" text="Teach with us" />
        </div>
      </div>
      <div>
        <div className={css.loginContainer}>
          <h2 className={css.title}>Login</h2>
          <InputField className={css.email} label="email" />
          <InputField
            className={css.password}
            label="password"
            type="password"
          />
          <a className={css.forgot}>Forgot username or password?</a>
          <div className={css.button}>
            <Button text="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}
