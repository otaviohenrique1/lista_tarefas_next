import React from 'react'
import { Button, ButtonGroup, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { FaTasks } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

export default function Homepage() {
  return (
    <Container className="pt-5 pb-5">
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
            {[1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => (
                <ListaItem key={index} />
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

interface ListaItemProps {
  // 
}

function ListaItem(props: ListaItemProps) {
  return (
    <ListGroupItem>
      <Row>
        <Col sm={12} className="border-bottom mb-2">
          <p>asdasdasdasdasdasdasd</p>
        </Col>
        <Col sm={12} className="d-flex align-items-center flex-row justify-content-end">
          <div className="rounded border py-1 px-2">
            <Form.Check
              type="checkbox"
              id="feito"
              label="Feito"
            />
          </div>
          <Button
            className="d-flex align-items-center ms-1"
            variant="primary"
          >
            <AiFillEdit />
            <span className="ms-1">Editar</span>
          </Button>
          <Button
            className="d-flex align-items-center ms-1"
            variant="danger"
          >
            <AiFillDelete />
            <span className="ms-1">Remover</span>
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
}
