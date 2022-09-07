import React, { useState } from 'react';
import { connect } from 'react-redux';
import { INCREASE } from './Action';


const Product = ({img, name, amount, price, increase}) => {
    return (
      <>
        <div
          className="col-lg-4 col-md-6 col-sm-12 p-5 d-flex justify-content-center"
        >
          <div className="products d-flex flex-column align-items-center py-3">
            <img src={img} className="food-img" alt="food" />
            <h6>{name}</h6>
            <div className="d-flex align-items-center">
              <h6 className="fw-bold pe-2 m-0">${price}</h6>
              <span>{amount}</span>
              <button
                className="primary-color add-btn btn d-flex align-items-center text-light fw-bold"
                onClick={() => increase()}
              >
                + ADD
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps
    return {
      increase: () => dispatch({ type: INCREASE, payload: { id } }),
    };
}


export default connect(null, mapDispatchToProps)(Product);