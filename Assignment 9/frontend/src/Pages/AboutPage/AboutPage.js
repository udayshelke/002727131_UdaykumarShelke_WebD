import React from "react";
//import AboutCard from "../../Components/AboutCard/AboutCard";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container } from "react-bootstrap";
//import about from "../../Data/about";

const AboutPage = () => {
  //const data = () => {
  //return about;
  //};
  return (
    <>
      <MainScreen title="About Us" />
      <Container>
        <p className="para">
          <h1>We help employers and candidates find the right fit</h1>
          <br />
          <br />
          <h2>Who we are</h2>
          <br />
          <br />
          NU Jobs is a global leader in connecting people and jobs. Every day,
          NU Jobs aims to make every workplace happier and more productive by
          transforming the way employers and candidates find the right fit. For
          25 years, NU Jobs has worked to transform the recruiting industry.
          Today, the company leverages advanced technology using intelligent
          digital, social and mobile solutions, including the flagship website
          NUJobs.com®, NU Jobs innovative app, and a vast array of products and
          services.
        </p>
      </Container>
    </>
  );
};

export default AboutPage;
