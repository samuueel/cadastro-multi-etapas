import React, { FormEvent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../styles/Form.css";

type Props = {};

const FormPersonalDetails = (props: Props) => {
  const handleClickCadastro = (e: any) => {
    e.preventDefault();
  };

  const validationCadastro = yup.object().shape({
    nome: yup
      .string()
      .required("Este campo é obrigatório!"),
    idade: yup
      .number().positive().integer()
      .min(18, "Deve ser maior de idade").max(99, "Número muito alto")
      .required("Este campo é obrigatório!"),
    cpf: yup
      .string()
      .min(8, "O CPF deve ter 11 caracteres!")
      .required("Este campo é obrigatório!"),
    celular: yup
      .number().positive().integer()
      .min(11, "O CPF deve ter 11 caracteres, com o DDD")
      .required("Este campo é obrigatório!"),
  });


  return (
    <Formik
      initialValues={{}}
      onSubmit={handleClickCadastro}
      validationSchema={validationCadastro}
    >
      <Form className="form-cadastro">
        <h3>DADOS PESSOAIS</h3>
        <div className="form-container-cadastro">
          <Field autoFocus={true} name="nome" className="form-field" placeholder="Nome Completo" />
          <ErrorMessage
            component="span"
            name="nome"
            className="form-cadastro-error"
          />
        </div>
        <div className="form-container-cadastro">
          <Field name="idade" className="form-field" placeholder="Idade" />
          <ErrorMessage
            component="span"
            name="idade"
            className="form-cadastro-error"
          />
        </div>
        <div className="form-container-cadastro">
          <Field name="cpf" className="form-field" placeholder="CPF" />
          <ErrorMessage
            component="span"
            name="cpf"
            className="form-cadastro-error"
          />
        </div>
        <div className="form-container-cadastro">
          <Field
            name="celular"
            className="form-field"
            placeholder="Celular"
          />
          <ErrorMessage
            component="span"
            name="celular"
            className="form-cadastro-error"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default FormPersonalDetails;
