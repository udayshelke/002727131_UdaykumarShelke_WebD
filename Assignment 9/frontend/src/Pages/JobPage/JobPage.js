import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container } from "react-bootstrap";

const JobPage = () => {
  return (
    <>
      <MainScreen title="Job Positions" />
      <Container>
        <p className="para">
          <br />
          <h2>What we do?</h2>
          <br />
          <br />
          Job positions are typically created to fulfill specific tasks or
          responsibilities within an organization. These positions may vary in
          terms of required skill sets, educational qualifications, level of
          experience, and responsibilities. The job title and description
          usually provide information about the nature of the job, such as the
          duties, working conditions, and expected outcomes. Some job positions
          may be entry-level, while others may require significant experience or
          specialized training. Employers often create job positions based on
          the needs of their organization and the skills and expertise required
          to meet those needs. Job positions may also evolve over time to adapt
          to changing organizational needs or external factors.
        </p>
      </Container>
    </>
  );
};

export default JobPage;
