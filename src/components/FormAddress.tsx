import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../styles/Form.css";

type Props = {};

const FormAddress = (props: Props) => {
  const handleClickCadastro = (e: any) => {
    e.preventDefault();
  };

  const validationCadastro = yup.object().shape({
    cidade: yup.string().required("Este campo é obrigatório!"),
    rua: yup.string().required("Este campo é obrigatório!"),
    cep: yup
      .string()
      .min(8, "O CEP deve ter 8 caracteres!")
      .required("Este campo é obrigatório!"),
    complemento: yup.string().required("Este campo é obrigatório!"),
  });

  return (
    <Formik
      initialValues={{}}
      onSubmit={handleClickCadastro}
      validationSchema={validationCadastro}
    >
      <Form className="form-cadastro">
        <h3>ENDEREÇO</h3>
        <div className="form-container-cadastro">
          <Field autoFocus={true} name="cidade" className="form-field" placeholder="Cidade" />
          <ErrorMessage
            component="span"
            name="cidade"
            className="form-cadastro-error"
          />
        </div>
        <div className="form-container-cadastro">
          <Field name="rua" className="form-field" placeholder="Rua" />
          <ErrorMessage
            component="span"
            name="rua"
            className="form-cadastro-error"
          />
        </div>
        <div className="form-container-cadastro">
          <Field name="cep" className="form-field" placeholder="CEP" />
          <ErrorMessage
            component="span"
            name="cep"
            className="form-cadastro-error"
          />
        </div>
        <div className="form-container-cadastro">
          <Field
            name="complemento"
            className="form-field"
            placeholder="Complemento"
          />
          <ErrorMessage
            component="span"
            name="complemento"
            className="form-cadastro-error"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default FormAddress;
