import React, { useEffect } from "react";
import { connect } from "react-redux";


import ProductItem from "../ProductItem";
import { ApplicationState } from "../../redux/store";
import { Inventory } from "../../redux/types/types-inv";
import { fetchRequest } from "../../redux/actions/action-inv";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";


interface PropsFromState {
  loading: boolean;
  data: Inventory[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const HomePage: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <ul>
        {data.map(item => {
          return <ProductItem item={item} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
