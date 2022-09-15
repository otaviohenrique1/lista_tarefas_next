import { FormikHelpers, useFormik } from 'formik';
import React from 'react'
import { Button, ButtonGroup, Col, Form } from 'react-bootstrap';
import * as yup from "yup";
import { FormTypes } from '../types/types';
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";

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
    onSubmit: props.onSubmit
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
          <div className="d-flex align-items-center justify-content-end">
            <ButtonGroup className="mt-2">
              <Button
                variant="primary"
                type="submit"
                className="d-flex align-items-center flex-row"
              >
                <MdOutlineAddCircleOutline size={20}/>
                <span className="ms-1">Criar</span>
              </Button>
              <Button
                variant="danger"
                type="button"
                className="d-flex align-items-center flex-row"
                onClick={() => formik.resetForm()}
              >
                <AiOutlineClear size={20} color="#ffffff" />
                <span className="ms-1">Limpar</span>
              </Button>
            </ButtonGroup>
          </div>
        </Form>
      </div>
    </Col>
  )
}
