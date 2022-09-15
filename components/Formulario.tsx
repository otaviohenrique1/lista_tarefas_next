import { FormikHelpers, useFormik } from 'formik';
import React from 'react'
import { Button, ButtonGroup, Col, Form } from 'react-bootstrap';
import * as yup from "yup";

interface FormTypes {
  tarefa: string;
}

const valoresIniciais: FormTypes = {
  tarefa: "",
};

const validationSchema = yup.object().shape({
  tarefa: yup.string().required("Campo vazio"),
});

interface FormularioProps {
  onSubmit: (values: FormTypes, formikHelpers: FormikHelpers<FormTypes>) => void
}

export default function Formulario(props: FormularioProps) {
  const formik = useFormik({
    initialValues: valoresIniciais,
    validationSchema: validationSchema,
    onSubmit: (values: FormTypes, helpers: FormikHelpers<FormTypes>) => {
      helpers.resetForm();
    }
  });

  return (
    <Col sm={12} className="mb-2">
      <div className="rounded border px-2 py-3">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group
            controlId="tarefa"
            onChange={formik.handleChange}
            defaultValue={formik.values.tarefa}
          >
            <Form.Label>Nova tarefa</Form.Label>
            <Form.Control
              type="text"
              name="tarefa"
              placeholder="Digite a tarefa"
              value={formik.values.tarefa}
            />
            {formik.errors.tarefa && formik.touched.tarefa ? (
              <Form.Text className="text-danger">
                {formik.errors.tarefa}
              </Form.Text>
            ) : null}
          </Form.Group>
        </Form>
        <div className="d-flex align-items-center justify-content-end">
          <ButtonGroup className="mt-2">
            <Button
              variant="primary"
              type="submit"
            >Entrar</Button>
            <Button
              variant="danger"
              type="button"
              onClick={() => formik.resetForm()}
            >Limpar</Button>
          </ButtonGroup>
        </div>
      </div>
    </Col>
  )
}
