import {   Row , Col } from 'react-bootstrap'
import Image from 'next/image'
import person from "../../../assets/images/person.png";

const SearchResult = () => {
  return (
    <>
      <div style={{ width: "70%", margin: "70px auto" }}>
        <Row className="justify-content-center align-items-center ">
          {/* Text Data */}
          <Col md={6}>
            <h4 className="fw-bold">
              Full Name: <span className="fw-normal"></span>
            </h4>
            <h4 className="fw-bold">
              Last Seen Date: <span className="fw-normal"></span>
            </h4>
            <h4 className="fw-bold">
              Last Seen Location: <span className="fw-normal"></span>
            </h4>
            <h4 className="fw-bold">
              Age: <span className="fw-normal"></span>
            </h4>
            <h4 className="fw-bold">
              Finder Phone Number: <span className="fw-normal"></span>
            </h4>
          </Col>

          {/* Image */}
          <Col md={4} className="text-center">
            <Image src={person} alt="Image" />
          </Col>
        </Row>
      </div>
    </>
  );
 
}

export default SearchResult