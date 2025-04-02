import Image from "next/image";

import {  FirstHeader, SecondHeader, SearchResult } from "@/components/common";

import {  Row, Col } from "react-bootstrap";
import upload from "../../assets/images/upload.png";

const Search = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div>
        <FirstHeader title="Search for Someone" />
        <SecondHeader title="Fill in the details to help us locate the missing individual. Don’t give up!" />

        {/* Form section */}
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={{ span: 6 }}>
            <div
              style={{
                background:
                  "linear-gradient(120deg, #3B5998 10%, #1E40AF 50%, #0F256E 90%)",
                borderRadius: "15px",
                padding: "20px",
                color: "white",
                boxShadow: "0 4px 15px rgba(30, 64, 175, 0.4)",
              }}
            >
              <form action="">
                <div className="mb-3">
                  <label className="form-label">
                    Full Name ( the missing person ):
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      color: "white",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Age:</label>
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      color: "white",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Seen Location:</label>
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      color: "white",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date Last Seen:</label>
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      color: "white",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Full Name ( Family Member ) :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      color: "white",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contact Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      color: "white",
                    }}
                  />
                  {/* upload image section */}
                  <div className="mt-5 align-items-center justify-around d-flex pb-4 ">
                    <div>
                      <h1 className="fw-bold text-gray-950 ">
                        Upload image :{" "}
                      </h1>
                    </div>
                    <div>
                      <Image
                        src={upload}
                        alt="upload"
                        width={100}
                        height={100}
                        className="cursor-pointer border-sky-100 border-2 rounded-md"
                      />
                    </div>
                  </div>

                  {/* submit button */}
                  <div className="d-flex justify-content-center mb-">
                    <button
                      type="submit"
                      className="btn btn-primary fs-2 fw-bold py-2 px-4 custom-hover-btn"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>

        <div className="text-center mt-24  ">
          <h1 className="fw-bold">Results Display :</h1>
          <p className="fst-italic fs-5">
            {" "}
            Match Found! Please Review the Details Below.
          </p>
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default Search;
