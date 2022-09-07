import React from 'react';
import { connect } from 'react-redux';
import { OPENCART, INCREASE } from './Action';


const Product = ({img, name, amount, price, increase, goToCart, openCart}) => {
    return (
      <>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 d-flex justify-content-center">
          <div className="products d-flex flex-column align-items-center p-4">
            <img src={img} className="food-img" alt="food" />
            <h6>{name}</h6>
            <div className="d-flex align-items-center price-sec">
              <h6 className="fw-bold pe-2 m-0">${price}</h6>
              <span>{amount}</span>
              <button
                className="primary-color add-btn btn d-flex align-items-center text-light m-2"
                onClick={() => increase()}
              >
                <span className="fw-bold fs-3">+</span>
              </button>
            </div>
            <button
              className="border-0 btn-link btn"
              onClick={() => openCart()}
            >
              <h6 className={goToCart ? "text-color" : "d-none"}>Go to Cart</h6>
            </button>
          </div>
        </div>
      </>
    );
}

const mapStateToProps = (store) => {
  const {goToCart} = store;
  return {goToCart}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps
    return {
      increase: () => dispatch({ type: INCREASE, payload: { id } }),
      openCart: () => dispatch({ type: OPENCART }),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);