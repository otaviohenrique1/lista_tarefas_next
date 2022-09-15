import React, { useEffect, useState } from 'react'
import { ButtonGroup, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FaTasks } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";
import { listaTarefas } from '../utils/listaTarefas';
import { ListaItem } from '../components/ListaItem';
import { TarefaTypes } from '../types/types';

export default function Homepage() {
  const [data, setData] = useState<TarefaTypes[]>([]);
  useEffect(() => {
    setData(listaTarefas);
  }, []);
  

  return (
    <Container className="pt-5 pb-5" fluid>
      <Row>
        <Col sm={12} className="mb-5 d-flex flex-row align-items-center justify-content-center">
          <FaTasks size={30} />
          <h1 className="ms-3">Lista de Tarefas</h1>
        </Col>
        <Col sm={12}>
          {/*  */}
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
                  onClickEditar={() => {}}
                  onClickRemover={() => {}}
                />
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
