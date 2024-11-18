import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  return (
    <form className="login-form-wrapper">
      <h1>Login form</h1>
      <div className="inputs-container">
        <Input
          name="email"
          id="user_email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="password"
          id="user_password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;
