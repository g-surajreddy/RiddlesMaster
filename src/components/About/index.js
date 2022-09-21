import React, { useEffect } from "react";
import $ from "jquery";
import Profile from "../Profile";
import "./styles.css";
import rupesh from "../../images/rupesh.png";
import sanjeev from "../../images/sanjeev.jpg";


const About = () => {
  useEffect(() => {
    hideText();
  }, []);
  const hideText = () => {
    $(".btn-about").hide();
    $(".image").hide();
  };
  const changeBackground = () => {
    $(".bgdiff").on({
      mouseenter: function () {
        $(this).css("background-color", "#ffcccc");
        $(".description").css("background-color", "#ffcccc");
      },

      mouseleave: function () {
        $(this).css("background-color", "#f5f5f5");
        $(".description").css("background-color", "#f5f5f5");
      },
    });
  };

  return (
    <div>
      <div onMouseOver={() => changeBackground()} className="bgdiff">
        <Profile />
      </div>

      <div style={{ background: "white" }}>
        <h1>Creators</h1>
        <div class="d-flex justify-content-around">
          <div className="creator" class="card" style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src={rupesh}
              alt="Card"
              style={{
                width: "370px",
                height: "350px",
                borderRadius: " 25rem",
              }}
            />
            <div class="card-body">
              <h4 class="card-title">G Suraj Reddy</h4>
              <p class="card-text">Developer Id- 1910990922</p>
            </div>
          </div>

          
          <div className="creator" class="card" style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src={sanjeev}
              alt="Card"
              style={{
                width: "370px",
                height: "350px",
                borderRadius: " 30rem",
              }}
            />
            <div class="card-body">
              <h4 class="card-title">Rupesh Singh</h4>
              <p class="card-text">Developer Id-1910990976</p>
            </div>
          </div>

          
        </div>
        <div style={{ padding: "100px" }}>
          <a href="/" class="btn btn-primary" style={{ width: "400px"}}>
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
