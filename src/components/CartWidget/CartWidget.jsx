import { FaCartArrowDown } from "react-icons/fa";
import "./CartWidget.css";

export const CartWidget = () => (
  <div className="cart-widget">
    <FaCartArrowDown /> <span className="cart-widget__qty">(0)</span>
  </div>
);
