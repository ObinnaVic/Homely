import React from 'react';
import siteLogo from '../img/siteLogo.png';
import { Link, Outlet } from 'react-router-dom';
import { connect } from "react-redux";
import { CLOSECART, CLOSENAV, CLOSE_ORDER_MODAL, OPENCART, OPENNAV, OPEN_ORDER_MODAL } from "./Action";


const Nav = ({amount, nav, openNav, closeNav, data, total, closeCart, openCart, cart, orderModal, closeOrder, openOrder }) => {
    return (
      <main>
        <div className="sub-nav container secondary-color p-3">
          <div>
            <img src={siteLogo} alt="logo" />
          </div>
          <div className="toggler">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              onClick={() => openNav()}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>

        <div
          className={
            nav
              ? "nav-container open-nav secondary-color"
              : "nav-container secondary-color"
          }
        >
          <div className="navbar navbar-expand-lg">
            <div className="closeicon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
                onClick={() => closeNav()}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </div>
            <div>
              <img src={siteLogo} alt="logo" />
            </div>
            <div className="navbar-nav ms-lg-auto text-center">
              <Link
                to="/"
                class="nav-item nav-link fw-bold"
                onClick={() => closeNav()}
              >
                Home
              </Link>
              <Link
                to="About"
                class="nav-item nav-link fw-bold"
                onClick={() => closeNav()}
              >
                About
              </Link>
              <Link
                to="Products"
                class="nav-item nav-link fw-bold"
                onClick={() => closeNav()}
              >
                Products
              </Link>
              <Link
                to="Download"
                class="nav-item nav-link fw-bold"
                onClick={() => closeNav()}
              >
                Download
              </Link>
            </div>
            <div>
              <button
                className="btn primary-color ms-lg-5 text-light border-dark"
                onClick={() => openCart()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart-check-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
                Cart
                <span className="bg-light rounded-5 text-dark fw-bold p-1 ms-2">
                  {amount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* <div>CART POP UP SECTION</div> */}

        <div className={cart ? "cart secondary-color p-3" : "d-none"}>
          <div className="cart-close-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill text-color"
              viewBox="0 0 16 16"
              onClick={() => closeCart()}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </div>
          <h4 className="text-center text-color">Your cart</h4>
          {data.map((item) => {
            const { img, price, amount, name } = item;
            return (
              <div>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <img style={{ width: "20%" }} src={img} alt="foods" />
                        <div>{name}</div>
                      </td>
                      <td>
                        <span class="badge bg-primary rounded">{amount}</span>
                      </td>
                      <td>
                        {" "}
                        <span>${price}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
          <div className="d-flex justify-content-between align-items-center">
            <h5>
              Total: <span className="fw-bold">${total}</span>
            </h5>
            <button className="btn primary-color" onClick={() => openOrder()}>Place Order</button>
          </div>
        </div>

        {/* <DIV>CART MODAL</DIV> */}

        <div
          className={
            orderModal
              ? "d-flex align-items-center justify-content-center modal mt-5"
              : "d-none"
          }
        >
          <div className="modal-info d-flex flex-column align-items-center">
            <button
              type="button"
              class="btn-close ms-auto"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeOrder()}
            ></button>
            <h2>Your Order Is On The Way.</h2>
            <p>Thank You!!</p>
          </div>
        </div>
        <Outlet />
      </main>
    );
} 

const mapStateToProps = (store) => {
    const {amount, nav, data, total, cart, orderModal} = store;
    return {amount, nav, data, total, cart, orderModal};
}

const mapDispatchToProps = (dispatch) => {
  return {
    openNav: () => dispatch({ type: OPENNAV }),
    closeNav: () => dispatch({ type: CLOSENAV }),
    openCart: () => dispatch({type: OPENCART}),
    closeCart: () => dispatch({type: CLOSECART}),
    openOrder: () => dispatch({type: OPEN_ORDER_MODAL}),
    closeOrder: () => dispatch({type: CLOSE_ORDER_MODAL}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);