import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../styles/Form.css"

type Props = {};

const FormAccount = (props: Props) => {
  const handleClickCadastro = (e: any) => {
    e.preventDefault();
  };

  const validationCadastro = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email!")
      .required("Este campo é obrigatório!"),
    confirmEmail: yup
        .string()
        .oneOf([yup.ref("email"), null], "Os Emails não são iguais!"),
    password: yup
      .string()
      .min(8, "A senha deve ter 8 caracteres!")
      .required("Este campo é obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As Senhas não são iguais!"),
  });

  return (
    <Formik
      initialValues={{email: "", password: "", confirmPassword: "", confirmEmail: ""}}
      onSubmit={handleClickCadastro}
      validationSchema={validationCadastro}
    >
      <Form className="form-cadastro">
        <h3>CONTA</h3>
        <div className="form-container-cadastro">
          <Field autoFocus={true} name="email" className="form-field" placeholder="Email"/>
          <ErrorMessage
            component="span"
            name="email"
            className="form-cadastro-error"
          />
        </div>
        <div className="form-container-cadastro">
          <Field name="confirmEmail" className="form-field" placeholder="Confirme seu Email" />
          <ErrorMessage
            component="span"
            name="confirmEmail"
            className="form-cadastro-error"
          />
        </div>
        <div className="form-container-cadastro">
          <Field required="required" name="password" className="form-field" placeholder="Senha" />
          <ErrorMessage
            component="span"
            name="password"
            className="form-cadastro-error"
          />
        </div>
        <div className="form-container-cadastro">
          <Field
          
            name="confirmPassword"
            className="form-field"
            placeholder="Confirme sua Senha"
          />
          <ErrorMessage
            component="span"
            name="confirmPassword"
            className="form-cadastro-error"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default FormAccount;
