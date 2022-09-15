import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FaTasks } from "react-icons/fa";
import { listaTarefas } from '../utils/listaTarefas';
import { ListaItem } from '../components/ListaItem';
import { FormTypes, TarefaTypes } from '../types/types';
import { FormikHelpers } from 'formik/dist/types';
import { v4 as uuidv4 } from 'uuid';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';

export default function Homepage() {
  const [data, setData] = useState<TarefaTypes[]>([]);
  
  // useEffect(() => {
  //   setData(listaTarefas);
  // }, []);
  
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
    
    console.log("item_data");
    
    helpers.resetForm();
  }

  return (
    <Container className="pt-5 pb-5" fluid>
      <Row>
        <Col sm={12} className="mb-5 d-flex flex-row align-items-center justify-content-center">
          <FaTasks size={30} />
          <h1 className="ms-3">Lista de Tarefas</h1>
        </Col>
        <Formulario onSubmit={onSubmitForm} />
        <Lista lista={data} />
      </Row>
    </Container>
  )
}
