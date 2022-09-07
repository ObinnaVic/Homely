import React from 'react';
import aboutt from "../img/aboutt.png";


const About = () => {
    return (
      <div className="about-page">
        <div className="row food-row">
          <div className="col-lg-6 col-sm-12">
            <div className="home-header">
              <h2>About Us</h2>
              <p>
                Hungry for good food AND great conversation? Homely boasts a
                veritable smorgasbord of over 500,000 recipes and a
                community-inspired activity feed that allows users to share
                reviews, tweaks, questions and photos of their favorite recipes.
                Grab a plate and join the fun!
              </p>
              <button className="btn primary-color">See More</button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="image-sec my-5">
              <img className="about-img" src={aboutt} alt="about" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-color">Testimonials</h2>
          <p>This is what our client are saying</p>
          <div className="row food-row">
            <div className="col-lg-4 col-sm-12 p-5">
              <div className="testimonial">
                <h5 className="fw-bold">Paul James</h5>
                <p>Lagos state</p>
                <p>
                  I had the best dinner and launch experience wit homely. They
                  offer the best service and the best taste in every meal
                  offered. I will definitely get my hands on more.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 p-5">
              <div className="testimonial">
                <h5 className="fw-bold">Mercy Jude</h5>
                <p>Kogi state</p>
                <p>
                  Thank you to HOMELY!! When we talk about satisfaction, I
                  believe this is the most satisfied I have ever felt from a
                  meal. The experience is splendid. Everyone needs to try out
                  your meals.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 p-5">
              <div className="testimonial">
                <h5 className="fw-bold">Lara One</h5>
                <p>Plateau state</p>
                <p>
                  You have a wonderful food service and hospitality. I love your
                  services and it is quite unique. Keep it up and you would get
                  global. Thank you again for the delicious experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;