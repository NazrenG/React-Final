import styled from "styled-components";

export const Order = styled.div`
  width: 1280px;
  max-height: 790px;
  background-color: white;
  padding: 0;
  margin-bottom: 20px;
  gap: 0;
  overflow: hidden;
`;
export const LeftEllipse = styled.div`
  width: 1177px;
  height: 1177px;
  top: 20%;
  left: -750px;
  border: 2px solid #eaffe2;
  background-color: #eaffe2;
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
  border: 2px solid #ffeede;
  background-color: #ffeede;
  border-radius: 1000px;
  position: absolute;
  z-index: 0;
`;

export const OrderCard = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 10px;
  border: 1px solid transparent;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transform: translate(-50%, -50%);
  width: 1080px;
  height: auto;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    color: #54bf29;
  }
`;
export const OrderUl = styled.ul`
  list-style-type: none;
  li {
    margin-bottom: 5px;
  }
`;
export const OrderList = styled.div`
  display: grid;
  grid-template-columns: 180px 330px 150px 150px 200px;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #54bf29;
  }
`;
export const BackButton = styled.button`
  border: 1px solid red;
  color: red;
  background-color: transparent;
`;
