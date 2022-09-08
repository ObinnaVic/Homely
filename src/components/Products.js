import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { CLOSEMODAL, OPENMODAL, GET_TOTALS } from "./Action";
import scrum from '../img/scrum.png';
import Product from './Product';

const Products = ({data, modal, openModal, closeModal, getTotals}) => {
  const [input, setInput] = useState('');
   useEffect(() => {
     getTotals();
   });

   const order = () => {
    if (input) {
      setInput("");
      openModal();
    } else {
      return;
    }
   }

    return (
      // <div>FOOD DATA SECTION</div>
      <div className="mt-4">
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-color">Our daily dishes</h2>
          <p>Check out recomended dishes of your choice</p>
        </div>
        <div className="row food-row">
          {data.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
        <div className="row food-row">
          <div className="col-lg-4 col-sm-12 p-4">
            <h1 className="product-head">
              Or would you like something particularly{" "}
              <span className="text-color">special?</span>
            </h1>
            <p>
              Our Treat Packages are perfect for those days with extra wins,
              delicious exclusive content, and great for gifting.
            </p>
          </div>
          <div className="col-lg-8 col-sm-12 d-flex justify-content-center food-row">
            <img className="scrum-img" src={scrum} alt="scrum" />
          </div>
        </div>

        {/* <div>REQUEST SPECIAL ORDER SECTION</div> */}

        <div className="d-flex flex-column align-items-center">
          <div className="d-flex mb-3 text-color">
            <h6 className="me-3 text-center">
              Want something special? Lets hear you out...
            </h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-down-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
          </div>
          <input
            type="text"
            value={input}
            className='input'
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn primary-color mb-5 mt-3"
            onClick={() => order()}
          >
            Submit
          </button>
        </div>

        {/* <div> MODAL </div> */}
        <div
          className={
            modal
              ? "d-flex align-items-center justify-content-center modal"
              : "d-none"
          }
        >
          <div className="modal-info d-flex flex-column align-items-center">
            <button
              type="button"
              class="btn-close ms-auto"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal()}
            ></button>
            <h2>Your Response was received.</h2>
            <p>Thank You!!</p>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps =(store) => {
    const {data, modal} = store;
    return {data, modal}
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch({ type: OPENMODAL }),
    closeModal: () => dispatch({ type: CLOSEMODAL }),
    getTotals: () => dispatch({ type: GET_TOTALS }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);