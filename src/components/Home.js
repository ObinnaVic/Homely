import React from 'react';
import headImg from '../img/headImg.png'
import Group from '../img/Group.png';
import deliveryMan from '../img/deliveryMan.png';
import cutleries from '../img/cutleries.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="home-header">
                <h1>
                  Enjoy <span className="text-color">home made meals</span> far
                  away from home
                </h1>
                <p>
                  Helping you enjoy confortable and health food anywhere and
                  anytime on the go
                </p>
                <Link to="Products">
                  <button className="btn primary-color mt-2">Order Now</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 home-img">
              <img src={headImg} style={{ width: "80%" }} alt="head" />
            </div>
          </div>
          <div className="stats">
            <div className="stats-info">
              <h2 className="fw-bold">500+</h2>
              <p>Food partners</p>
            </div>
            <div className="stats-info">
              <h2 className="fw-bold">1k+</h2>
              <p>Orders delivered</p>
            </div>
            <div className="stats-info">
              <h2 className="fw-bold">12k+</h2>
              <p>Clients</p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h2 className="text-color text-decoration-underline">
              Why choose us
            </h2>
            <p>This is what makes our product different</p>
          </div>
          <div className="secondary-color mb-5">
            <div className="row py-4">
              <div className="col-lg-4 col-sm-12">
                <div className="d-flex flex-column justify-content-center align-items-center bg-light p-5 text-center">
                  <img
                    src={Group}
                    style={{ width: "12%", marginBottom: "50px" }}
                    alt="group"
                  />
                  <h5>Easy to Order</h5>
                  <p>
                    Order food at a single click and select all food to order at
                    any poin in time and at ease and comfort
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="d-flex flex-column justify-content-center align-items-center bg-light p-5 text-center">
                  <img
                    src={deliveryMan}
                    style={{ width: "12%", marginBottom: "50px" }}
                    alt="delivery"
                  />
                  <h5>Fast delivery</h5>
                  <p>
                    food delivery fst and reliable and get delivered at
                    deliivery tinme and location any day any time
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="d-flex flex-column justify-content-center align-items-center bg-light p-5 text-center">
                  <img
                    src={cutleries}
                    style={{ width: "25%", marginBottom: "40px" }}
                    alt="cutleries"
                  />
                  <h5>100% quality</h5>
                  <p>
                    We provide quality food for you and your loved ones for
                    health and so onnnnnn and for wellness
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center text-color">
            <div className="d-flex mb-3">
              <h4 className="me-3">Place an Order Now!!</h4>
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
            <Link to="Products">
              <button className="primary-color btn">Order here</button>
            </Link>
          </div>
          <div className="d-flex flex-column align-items-center my-5 newsletter">
            <div className="d-flex flex-column align-items-center text-center">
              <h2>Subscribe to our Newsletter</h2>
              <p>Enter your Email address to get daily offers and news</p>
            </div>
            <div className="d-flex" style={{ width: "100%" }}>
              <input
                type="text"
                placeholder="Enter your Email"
                style={{ width: "70%", padding: "7px" }}
              />
              <button className="btn primary-color ms-2 rounded-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Home;