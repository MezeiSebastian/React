import React from "react";
import { connect } from "react-redux";

import { ApplicationState } from "../../redux/store";
import { Cart } from "../../redux/types/types-cart";



interface propsFromState {
  cartItems: Cart;
}

type AllProps = propsFromState;

const CartComponent: React.FC<AllProps> = ({ cartItems }) => {
  console.log("cartItems", cartItems);
  return (
    
      <div>
        {cartItems.items.map(item => {
          return (
            <ul>
              <li>{item.name} {item.price}$</li>
            </ul>
          );
        })}
      </div>
   
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  cartItems: cart.data
});

const mapDispatchProps = () => {};

export default connect(mapStateToProps, mapDispatchProps)(CartComponent);
