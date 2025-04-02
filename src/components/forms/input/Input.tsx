"use client";
import { Form } from "react-bootstrap";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps<TFieldValue extends FieldValues> = {
  register: UseFormRegister<TFieldValue>;
  name: Path<TFieldValue>;
  error?: string;
  label: string;
  type?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
 
  formText?: string;
  success?: string;
  disabled?: boolean;
};







const Input = <TFieldValue extends FieldValues>({
  type = "text",
  register,
  name,
  error,
  label,
  onBlur,
  formText,
  success,
  disabled,
}: InputProps<TFieldValue>) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...register(name)}
        isInvalid={error ? true : false}
        onBlur={onBlurHandler}
        disabled={disabled}
        isValid={success ? true : false}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      {formText && <Form.Text className="text-muted">{formText}</Form.Text>}
    </Form.Group>
  );
};

export default Input;
