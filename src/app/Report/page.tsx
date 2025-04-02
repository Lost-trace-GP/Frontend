import Image from "next/image";
import { Header, FirstHeader, SecondHeader, Footer } from "@/components/common";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Report.module.css";
import upload from "../../assets/images/upload.png";

const Report = () => {
  return (
    <>
      <div style={{  marginBottom: "50px" }}>

        <FirstHeader title="Report a Missing Person" />
        <SecondHeader title="Fill in the details to help us locate the missing individual. Every report matters" />
        {/* Form section */}
        <div>
          <Row className="mt-5   d-flex justify-content-center">
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
                    Full Name ( the finder person ):
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
                  <div className="d-flex justify-content-center ">
                    <button
                      type="submit"
                      className="btn btn-primary fs-2 fw-bold py-2 px-4 custom-hover-btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Report;
