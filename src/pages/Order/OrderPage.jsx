import { removeItem, updateItem } from "../../redux/action";
import "../../style.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Order,
  LeftEllipse,
  RightEllipse,
  OrderCard,
  OrderList,
  OrderUl,
  BackButton,
} from "./OrderStyle";
function OrderPage() {
  const cardItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    const product = cardItem.find((element) => element.id === id);
    if (product) {
      if (product.quantity > 1) {
        dispatch(updateItem(id, product.quantity));
      } else {
        dispatch(removeItem(id));
      }
    }
  };
  return (
    <Order>
      <LeftEllipse></LeftEllipse>
      <RightEllipse />
      <NavLink to="/food">
        <BackButton>Back</BackButton>
      </NavLink>

      <OrderCard>
        <OrderUl>
          <OrderList>
            <h3>Image</h3>
            <h3>Title</h3>
            <h3>Price</h3>
            <h3>Count</h3>
          </OrderList>
          {cardItem.map((item) => (
            <li key={item.id}>
              {" "}
              <OrderList>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}$</p>
                <p>{item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id)}>
                  remove
                </button>
              </OrderList>
            </li>
          ))}
        </OrderUl>
      </OrderCard>
    </Order>
  );
}

export default OrderPage;
