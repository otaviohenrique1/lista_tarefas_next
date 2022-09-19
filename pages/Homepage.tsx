import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { FaTasks } from "react-icons/fa";
import { listaTarefas } from '../utils/listaTarefas';
import { ListaItem } from '../components/ListaItem';
import { v4 as uuidv4 } from 'uuid';
import * as yup from "yup";
import { useFormik, FormikHelpers } from 'formik';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { AiFillDelete, AiFillEdit, AiOutlineClear } from 'react-icons/ai';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Flex } from '../components/Flex';
import { Paragrafo } from '../components/Paragrafo';

type TarefaTypes = {
  id: string;
  tarefa: string;
  feito: boolean;
  criado: Date;
  atualizado: Date;
}

type FormTypes = {
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
  const [modoEditar, setModoEditar] = useState<boolean>(false);

  const onSubmitForm = (values: FormTypes, helpers: FormikHelpers<FormTypes>) => {
    let id = uuidv4().toString();

    let item_data: TarefaTypes = {
      id: uuidv4().toString(),
      tarefa: values.tarefa,
      feito: false,
      criado: new Date,
      atualizado: new Date,
    }

    setData([...data, item_data]);

    helpers.resetForm();
  }

  const formik = useFormik({
    initialValues: valoresIniciais,
    validationSchema: validationSchema,
    onSubmit: onSubmitForm
  });

  return (
    <Container className="py-5 px-3" fluid>
      <Row>
        <Col sm={12} className="mb-5 d-flex flex-row align-items-center justify-content-center">
          <Flex

          ></Flex>
          <FaTasks size={30} />
          <h1 className="ms-3">Lista de Tarefas</h1>
        </Col>
        <Col sm={12} className="mb-2">
          <div className="rounded border p-3">
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group
                controlId="tarefa"
                onChange={formik.handleChange}
                defaultValue={formik.values.tarefa}
              >
                <Form.Label
                  className="mb-1"
                >Nova tarefa</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  name="tarefa"
                  placeholder="Digite a tarefa"
                  rows={1}
                  value={formik.values.tarefa}
                />
                {formik.errors.tarefa && formik.touched.tarefa ? (
                  <Form.Text className="text-danger ps-1" as="span">
                    {formik.errors.tarefa}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Flex alignItems="center" justifyContent="end">
                {/* <div className="d-flex align-items-center justify-content-end"> */}
                  <ButtonGroup className="mt-2">
                    <Button
                      variant="primary"
                      type="submit"
                    >
                      <Flex alignItems="center" flexDirection="row">
                        <MdOutlineAddCircleOutline size={20} />
                        <span className="ms-1">Criar</span>
                      </Flex>
                    </Button>
                    <Button
                      variant="danger"
                      type="button"
                      onClick={() => formik.resetForm()}
                    >
                      <Flex alignItems="center" flexDirection="row">
                        <AiOutlineClear size={20} color="#ffffff" />
                        <span className="ms-1">Limpar</span>
                      </Flex>
                    </Button>
                  </ButtonGroup>
                {/* </div> */}
              </Flex>
            </Form>
          </div>
        </Col>
        <Col sm={12}>
          <ListGroup>
            {(data.length === 0)
              ? <ListGroupItem>
                <h5 className="text-center">Lista vazia</h5>
              </ListGroupItem>
              : data.map((item, index) => (
                <ListGroupItem key={index}>
                  <Row>
                    {(modoEditar) ? (
                      <>
                        <Col sm={12} className="mt-2 mb-4">
                          <Form>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                as="textarea"
                                id="editar_tarefa"
                                value={item.tarefa}
                                rows={1}
                              />
                              <Form.Text className="text-danger"></Form.Text>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col sm={12} className="d-flex align-items-center flex-row justify-content-end">
                          <ButtonGroup>
                            <Button
                              variant="primary"
                              onClick={() => {
                                setModoEditar(!modoEditar);
                              }}
                            >
                              <Flex alignItems="center" flexDirection="row">
                                <AiFillEdit />
                                <span className="ms-1">Salvar</span>
                              </Flex>
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => { }}
                            >
                              <Flex alignItems="center" flexDirection="row">
                                <AiFillDelete />
                                <span className="ms-1">Limpar</span>
                              </Flex>
                            </Button>
                          </ButtonGroup>
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col sm={12} className="my-2">
                          <Paragrafo
                            feito={item.feito}
                            className="form-control bg-secondary bg-opacity-10"
                          >{item.tarefa}</Paragrafo>
                        </Col>
                        <Col sm={12} className="d-flex align-items-center flex-row justify-content-between">
                          <div className="rounded border py-1 px-2">
                            <Form.Check
                              className="my-0"
                              type="checkbox"
                              id={`feito-checkbox-${item.id}`}
                              label="Feito"
                              checked={item.feito}
                              onClick={() => {
                                let resultado = data.map((item_busca) => {
                                  if (item_busca.id === item.id) {
                                    return {
                                      ...item_busca,
                                      feito: !item.feito,
                                      atualizado: new Date(),
                                    }
                                  }
                                  return item_busca;
                                });
                                setData(resultado);
                              }} />
                          </div>
                          <ButtonGroup>
                            <Button
                              variant="primary"
                              onClick={() => {
                                setModoEditar(!modoEditar);
                              }}
                              disabled={(item.feito) ? true : false}
                            >
                              <Flex alignItems="center" flexDirection="row">
                                <AiFillEdit />
                                <span className="ms-1">Editar</span>
                              </Flex>
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => {
                                let filtraItem = (item_filtrado: TarefaTypes): boolean => item_filtrado.id !== item.id;
                                let resultado = data.filter(filtraItem)
                                setData(resultado);
                              }}
                              disabled={(item.feito) ? true : false}
                            >
                              <Flex alignItems="center" flexDirection="row">
                                <AiFillDelete />
                                <span className="ms-1">Remover</span>
                              </Flex>
                            </Button>
                          </ButtonGroup>
                        </Col>
                      </>
                    )}
                    <Col sm={12} className="d-flex flex-row align-items-center justify-content-end mt-2 px-2">
                      <Row className="m-0 p-0 w-100">
                        <Col sm={12} md={6} className="m-0 p-0">
                          <div className="rounded border py-1 px-2 m-1">
                            <span className="me-1">Criado em:</span>
                            <span>{FormataData(item.criado)}</span>
                          </div>
                        </Col>
                        <Col sm={12} md={6} className="m-0 p-0">
                          <div className="rounded border py-1 px-2 m-1">
                            <span className="me-1">Modificado em:</span>
                            <span>{FormataData(item.atualizado)}</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

function FormataData(valor_data: Date) {
  const data = format(valor_data, "dd/MM/yyyy");
  const hora = format(valor_data, "HH:mm:ss");
  const resultado = `${data} às ${hora}`;
  return resultado;
}
