import {
  Account,
  LeftEllipse,
  RightEllipse,
  AccountCard,
  InputEmail,
  InputPass,
  AccountDiv,
  SignInput,
  SignButton,
  Profile,
  SignInputMail,
  BackButton,
} from "./AccountStyle";
import { NavLink } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateAccount } from "../../redux/action";
function AccountPage() {
  const account = useSelector((state) => state.accounts);
  const [name, setName] = useState(account.firstName || "");
  const [surname, setSurname] = useState(account.lastName || "");
  const [phone, setPhone] = useState(account.phone || "");
  const [password, setPassword] = useState(account.password || "");
  const [mail, setMail] = useState(account.email || "");
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(updateAccount(name, surname, password, phone, mail));
  };
  useEffect(() => {}, [account]);
  return (
    <Account>
      <LeftEllipse></LeftEllipse>
      <RightEllipse />
      <NavLink to="/food">
        <BackButton>Back</BackButton>
      </NavLink>

      <AccountCard>
        <div>
          <Profile />
          <NavLink to="/" style={{ color: "red" }}>
            <p>
              <GoSignOut /> Sign out
            </p>
          </NavLink>
        </div>

        <div>
          <h2>My Profile</h2>
          <AccountDiv>
            <SignInput>
              <InputEmail
                type="text"
                required="required"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span>First Name</span>
            </SignInput>
            <SignInput>
              <InputPass
                type="text"
                required="required"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <span>Last Name</span>
            </SignInput>
            <SignInput>
              <InputEmail
                type="text"
                required="required"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span>Phone</span>
            </SignInput>
            <SignInput>
              <InputPass
                type="text"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
            </SignInput>
          </AccountDiv>
          <SignInputMail>
            <InputPass
              type="text"
              required="required"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <span>E-mail</span>
          </SignInputMail>
          <SignButton onClick={handleEdit}>EDIT</SignButton>
        </div>
      </AccountCard>
    </Account>
  );
}

export default AccountPage;
