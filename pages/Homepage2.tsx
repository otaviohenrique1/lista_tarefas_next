import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaTasks } from "react-icons/fa";
import { FormTypes, TarefaTypes } from '../types/types';
import { FormikHelpers } from 'formik/dist/types';
import { v4 as uuidv4 } from 'uuid';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';

export default function Homepage2() {
  const [data, setData] = useState<TarefaTypes[]>([]);
  
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
