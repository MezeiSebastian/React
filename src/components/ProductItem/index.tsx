import React from "react";
import { connect } from "react-redux";
import { Inventory } from "../../redux/types/types-inv";
import { addToCart } from "../../redux/actions/action-cart";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";


interface propsFromComponent {
  item: Inventory;
}

interface propsFromDispatch {
  addToCart: (item: any) => any;
}

type Props = propsFromComponent & propsFromDispatch;

const ProductItem: React.FC<Props> = ({ item, addToCart }) => {
  const AddItemToCart = (item: any) => {
    addToCart(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
        <button onClick={() => AddItemToCart(item)}>Add To Cart</button>
    </div>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    addToCart: (item: any) => dispatch(addToCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
