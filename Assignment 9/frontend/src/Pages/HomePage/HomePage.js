import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container } from "react-bootstrap";
import community from "../../Images/Community.png";

const HomePage = () => {
  return (
    <div>
      <MainScreen title="NU Jobs Mission" />
      <Container>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="features-box">
                <h3 class="mb-4">
                  NU Jobs - A Non-profit mission for Huskies on the move
                </h3>
                <p class="text-muted mb-4">
                  The goal of NU Jobs is to ease the difficulties that
                  Northeastern University students encounter when moving into
                  and out of their living spaces each year. It offers a secure
                  and dependable platform for a tight-knit group of students to
                  purchase, sell, and lease items within their community.{" "}
                </p>
                <div class="mt-4"></div>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
              <div class="text-center mt-5 mt-lg-0">
                <img
                  src={community}
                  alt="Features"
                  class="img-fluid"
                  id="community-img"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
