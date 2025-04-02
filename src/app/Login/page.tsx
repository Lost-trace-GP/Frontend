'use client'
import useLogin from "./useLogin";
import { Col, Row, Button, Form } from "react-bootstrap";
import { FirstHeader } from "@/components/common"
import { Input } from "@/components/forms"



const Login = () => {

const {submitForm, register, handleSubmit, formState: { errors }} = useLogin();


  return (
    <div className="d-flex flex-column min-vh-100 ">
      <FirstHeader title="Login" />
      <Row className="">
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              register={register}
              name="email"
              label="Email"
              error={errors.email?.message}
              type="email"
            />
            <Input
              register={register}
              name="password"
              label="Password"
              error={errors.password?.message}
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
}

export default Login