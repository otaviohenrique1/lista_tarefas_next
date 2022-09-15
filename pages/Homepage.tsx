import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { FaTasks } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";
import { listaTarefas } from '../utils/listaTarefas';
import { ListaItem } from '../components/ListaItem';
import { TarefaTypes } from '../types/types';
import * as yup from "yup";
import { useFormik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';

interface FormTypes {
  tarefa: string;
}

const valoresIniciais: FormTypes = {
  tarefa: "",
};

const validationSchema = yup.object().shape({
  tarefa: yup.string().required("Campo vazio"),
});

export default function Homepage() {
  const [data, setData] = useState<TarefaTypes[]>([]);
  useEffect(() => {
    setData(listaTarefas);
  }, []);

  const formik = useFormik({
    initialValues: valoresIniciais,
    validationSchema: validationSchema,
    onSubmit: (values: FormTypes, helpers: FormikHelpers<FormTypes>) => {
      helpers.resetForm();
    }
  });

  return (
    <Container className="pt-5 pb-5" fluid>
      <Row>
        <Col sm={12} className="mb-5 d-flex flex-row align-items-center justify-content-center">
          <FaTasks size={30} />
          <h1 className="ms-3">Lista de Tarefas</h1>
        </Col>
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
                  onClick={() => formik.resetForm() }
                >Limpar</Button>
              </ButtonGroup>
            </div>
          </div>
        </Col>
        <Col sm={12}>
          <ListGroup>
            {data.map((item, index) => (
              <ListaItem
                key={index}
                id={item.id}
                tarefa={item.tarefa}
                feito={item.feito}
                criado={item.criado}
                atualizado={item.atualizado}
                onClickEditar={() => { }}
                onClickRemover={() => { }}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
