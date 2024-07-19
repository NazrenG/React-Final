import styled from "styled-components";

export const Account = styled.div`
  width: 1280px;
  max-height: 790px;
  background-color: white;
  padding: 0;
  gap: 0;
  overflow: hidden;
`;

export const LeftEllipse = styled.div`
  width: 1177px;
  height: 1177px;
  top: 20%;
  left: -750px;
  border: 2px solid #ffeede;
  background-color: #ffeede;
  border-radius: 1000px;
  position: absolute;
  z-index: 0;
  text-align: center;
`;

export const RightEllipse = styled.div`
  width: 1177px;
  height: 1177px;
  top: -645px;
  left: 500px;
  border: 2px solid #eaffe2;
  background-color: #eaffe2;
  border-radius: 1000px;
  position: absolute;
  z-index: 0;
`;
export const AccountCard = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 10px;
  border: 1px solid transparent;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 550px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    color: #54bf29;
  }
`;
export const Profile = styled.div`
  width: 300px;
  height: 300px;
  border: 5px double #54bf29;
  border-radius: 50%;
  margin-bottom: 15px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg");
`;
export const AccountDiv = styled.div`
  display: grid;
  width: 600px;
  grid-template-columns: 300px 300px;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

export const InputPass = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  color: #000000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 1em;
  &:valid ~ span {
    color: rgb(47, 49, 49);
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 10px;
    background-color: white;
    border-left: 1px solid rgb(47, 49, 49);
    border-right: 1px solid rgb(47, 49, 49);
  }
`;

export const InputEmail = styled(InputPass)``;

export const SignInput = styled.div`
  position: relative;
  width: 250px;
  margin: 0 auto;
  span {
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: rgb(47, 49, 49);
    transition: 0.5s;
  }
`;
export const SignInputMail = styled(SignInput)`
  width: 570px;
  margin-bottom: 20px;
`;

export const SignButton = styled.button`
  width: 163px;
  height: 48px;
  border-radius: 70px;
  background-color: #54bf29;
  color: white;
  &:hover {
    background-color: #ff922c;
    border: 1px solid transparent;
  }
`;
export const BackButton = styled.button`
  border: 1px solid red;
  color: red;
  background-color: transparent;
`;
