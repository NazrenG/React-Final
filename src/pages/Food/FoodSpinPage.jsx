import {
  Ellipse,
  Food,
  NavBar,
  NavList,
  ContentDiv,
  Cost,
  Title,
  Desc,
  OrderButton,
  Button,
  Circle,
  CircleWrapper,
  ImageWrapper,
  MainDiv,
  CircleBorder,
  ArrowButton,
  HiddenDiv,
  Rectangle,
  LeftTriangle,
  RightTriangle,
} from "./FoodStyle";
import "../../style.css";
import { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import logo from "../../assets/images/otherImages/logo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterData, switchItem, themeColors } from "../../redux/action";

function FoodSpinPage() {
  const dispatch = useDispatch();
  const filterFood = useSelector((state) => state.filterFood);
  const foodIndex = useSelector((state) => state.currentFoodIndex);
  const themeColor = useSelector((state) => state.themeColor);
  const toolColor = useSelector((state) => state.toolColor);
  const [rotation, setRotation] = useState(0);
  const [isCheck, setIsCheck] = useState(false);

  const handleRotate = (direction) => {
    setRotation(
      (prevRotation) => prevRotation + (direction === "left" ? -45 : 45)
    );
    dispatch(switchItem(direction));

    const newthemeColor = isCheck ? "#ffeede" : "#eaffe2";
    const newtoolColor = isCheck ? "#ff922c" : "#59BF29";
    dispatch(themeColors(newthemeColor, newtoolColor));

    isCheck ? setIsCheck(false) : setIsCheck(true);
  };

  const handleOrder = (item) => {
    dispatch({ type: `add_item`, payload: { ...item, quantity: 1 } });
  };

  const handleFilter = (category) => {
    dispatch(filterData(category));
  };

  useEffect(() => {}, [foodIndex, isCheck]);

  return (
    <Food>
      <NavBar theme={themeColor}>
        <img src={logo} alt="logo" />
        <NavList>
          <li>
            <button onClick={() => handleFilter(`Breakfast`)}>Breakfast</button>
          </li>
          <li>
            <button onClick={() => handleFilter(`Lunch`)}>Lunch</button>
          </li>
          <li>
            <button onClick={() => handleFilter(`Dinner`)}>Dinner</button>
          </li>
        </NavList>
        <NavLink to="/order" style={{ color: "black" }}>
          <BiShoppingBag style={{ width: 20, height: 22 }} />
        </NavLink>
        <NavLink to="/account" style={{ color: "black" }}>
          <VscAccount style={{ width: 20, height: 22 }} />
        </NavLink>
      </NavBar>
      <Ellipse theme={themeColor} />
      <MainDiv>
        <div style={{ position: "relative" }}>
          <CircleBorder />
          <CircleWrapper rotation={rotation}>
            <Circle>
              {filterFood.map((item, index) => (
                <ImageWrapper
                  key={item.id}
                  total={filterFood.length}
                  index={filterFood.length - index}
                >
                  <img src={item.image} alt={item.name} />
                </ImageWrapper>
              ))}
            </Circle>
          </CircleWrapper>
          <HiddenDiv>
            <Rectangle />
            <LeftTriangle />
            <RightTriangle />

            <img
              src={filterFood[foodIndex].image}
              alt="img"
              style={{
                width: "210px",
                height: "210px",
                position: "absolute",
                top: "-210px",
                marginLeft: "655px",
                borderRadius: "50%",
              }}
            />
          </HiddenDiv>
        </div>
        <ContentDiv>
          <Cost color={toolColor}>${filterFood[foodIndex].price}</Cost>
          <Title>{filterFood[foodIndex].name}</Title>
          <Desc>{filterFood[foodIndex].disclosure}</Desc>
          <OrderButton
            color={toolColor}
            onClick={() => handleOrder(filterFood[foodIndex])}
          >
            ORDER NOW
          </OrderButton>
        </ContentDiv>
      </MainDiv>
      <ArrowButton>
        <Button color={toolColor} onClick={() => handleRotate("left")}>
          <FaArrowDown />
        </Button>
        <Button color={toolColor} onClick={() => handleRotate("right")}>
          <FaArrowUp />
        </Button>
      </ArrowButton>
    </Food>
  );
}

export default FoodSpinPage;
