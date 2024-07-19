import {
  Login,
  LeftEllipse,
  RightEllipse,
  LogCard,
  InputEmail,
  InputPass,
  Inputs,
  SignInput,
  SignButton,
} from "./LoginStyle";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const accounts = useSelector((state) => state.accounts);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    if (accounts.email === mail && accounts.password === pass) {
      navigate("/food");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Login>
      <LeftEllipse />
      <RightEllipse />

      <LogCard onSubmit={handleLogIn} id="logcard">
        <h2>FoodSpin</h2>
        <p>Welcome to FoodSpin</p>
        <Inputs>
          <SignInput>
            <InputEmail
              type="text"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <span>E-mail</span>
          </SignInput>
          <SignInput>
            <InputPass
              type="password"
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <span>Password</span>
          </SignInput>
        </Inputs>
        <SignButton type="submit">LOG IN</SignButton>
      </LogCard>
    </Login>
  );
}

export default LoginPage;
