import React from 'react';
import playstore from '../img/playstore.png';
import applestore from '../img/applestore.png';
import phones from '../img/phones.png';

const Contact = () => {
    return (
      <div>
        <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
          <div className='d-flex flex-column align-items-center'>
            <h2 className='text-color'>Get Our Mobile App</h2>
            <p>Enjoy better experience</p>
          </div>
          <div className="row food-row">
            <div className="col-lg-6 col-sm-12">
              <div className="home-header">
                <p>
                  For more satisfactory navigation and to continue to stay in
                  touch with our services at your convinience, download our easy
                  to use app and register an account with us. This is to ensure
                  that we serve you better and build a better relationship with
                  all our esteemed customers.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    style={{ width: "30%", marginRight: "20px" }}
                    src={playstore}
                    alt="playstore"
                  />
                  <img
                    style={{ width: "30%", height: "35px" }}
                    src={applestore}
                    alt="applestore"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 my-4 d-flex justify-content-center">
                <img style={{width: '80%'}} src={phones} alt="phones" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;