import styled from "styled-components";

export const Food = styled.div`
  width: 1280px;
  background-color: white;
  padding: 0;
  gap: 0;
`;
export const NavBar = styled.div`
  width: 1080px;
  padding: 10px;
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 300px 680px 50px 50px;
  align-items: center;

  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 110px;
`;

export const NavList = styled.ul`
  width: 275px;
  display: flex;
  z-index: 20px;
  justify-content: space-between;
  list-style-type: none;
  li {
    button {
      background-color: transparent;
    }
  }
`;
export const Ellipse = styled.div`
  width: 1177px;
  height: 1177px;
  top: -645px;
  left: 300px;
  border: 2px solid ${(props) => props.theme};
  background-color: ${(props) => props.theme};
  border-radius: 50%;
  position: absolute;
  z-index: 0;
`;
export const ContentDiv = styled.div`
  width: 367px;
  padding: 50px 0px;
  position: absolute;
  top: 35%;
`;
export const Cost = styled.div`
  width: 81px;
  font-size: 44px;
  font-weight: 600;
  line-height: 66px;
  text-align: left;
  color: ${(props) => props.color};
`;
export const Title = styled.div`
  width: 367px;
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  text-align: left;
`;
export const Desc = styled.div`
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
  margin-bottom: 25px;
`;
export const OrderButton = styled.button`
  width: 163px;
  height: 48px;
  border-radius: 70px;
  background-color: ${(props) => props.color};
  color: white;
`;
/*spin css*/
export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1080px;
  margin: 0 auto;
  margin-bottom: 0px;
`;
export const CircleBorder = styled.div`
  width: 480px;
  height: 440px;
  background-color: transparent;
  position: absolute;
  top: 10%;
  left: 170%;
  border-radius: 50%;
  border: 2px dashed #ff922c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: white;
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-top: 40%;
  margin-left: 195%;
  transform: rotate(${(props) => props.rotation}deg);
  transform-origin: center;
  transition: transform 0.5s ease;
`;

export const Circle = styled.div`
  width: 130%;
  height: 130%;
  position: relative;
  border-radius: 50%;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  transform: rotate(${(props) => props.index * (360 / props.total)}deg)
    translate(220px) rotate(-${(props) => props.index * (360 / props.total)}deg);

  img {
    width: 160%;
    height: 170%;
    border-radius: 50%;
  }
`;

export const ArrowButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1000px;
  margin-left: 30%;
  position: relative;
  z-index: 30;
`;
//hide spin

export const HiddenDiv = styled.div`
  position: absolute;
  z-index: 15;
`;
export const Rectangle = styled.div`
  width: 610px;
  height: 260px;
  position: absolute;
  top: -88px;
  margin-left: 475px;
  background-color: white;
`;

export const LeftTriangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -260px;
  margin-left: 430px;
  background-color: transparent;
  border-right: 250px solid transparent;
  border-bottom: 250px solid white;
  transform: rotate(-19deg);
`;
export const RightTriangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -215px;
  margin-left: 900px;
  background-color: transparent;
  border-left: 170px solid transparent;
  border-bottom: 170px solid white;
  transform: rotate(27deg);
`;
