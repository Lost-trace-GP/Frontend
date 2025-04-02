"use client"
import FirstHeader from "@/components/common/Heading/FirstHeader/FirstHeader";
import { Col, Row, Form, Button } from "react-bootstrap";
import useRegister from "./useRegister";
import Input from "@/components/forms/input/Input";





const Register = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
    submitForm,
    emailOnBlurHandler,
    emailAvailabilityStatus,
  } = useRegister();

 
  return (
    <div className="mb-19">
      <FirstHeader title="Register" />
      <Row className="mt-5 d-flex justify-content-center ">
        <Col md={{ span: 6 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              register={register}
              name="firstName"
              label="First Name"
              error={errors.firstName?.message}
            />

            <Input
              register={register}
              name="lastName"
              label="Last Name"
              error={errors.lastName?.message}
            />

            <Input
              register={register}
              name="email"
              label="Email"
              error={
                errors.email?.message
                  ? errors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "this email already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server"
                  : ""
              }
              type="email"
              onBlur={emailOnBlurHandler}
              formText={
                emailAvailabilityStatus === "checking"
                  ? "we are currently checking the avilability of email address. please wait a moment"
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "this email is available for user "
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" ? true : false}
            />

            <Input
              register={register}
              name="password"
              label="Password"
              error={errors.password?.message}
              type="password"
            />

            <Input
              register={register}
              name="confirmPassword"
              label="Confirm Password"
              error={errors.confirmPassword?.message}
              type="password"
            />

            <Button variant="primary" type="submit" className="  ">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
