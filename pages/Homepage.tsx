import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { FaTasks } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import styled from 'styled-components';

type TarefaTypes = {
  tarefa: string;
  feito: boolean;
}

export default function Homepage() {
  const [data, setData] = useState<ListaItemProps[]>([]);

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
            {listaTarefas.map((item, index) => (
                <ListaItem
                  key={index}
                  tarefa={item.tarefa}
                  feito={item.feito}
                />
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

type ListaItemProps = TarefaTypes;

function ListaItem(props: ListaItemProps) {
  const [foiFeito, setFoiFeito] = useState<boolean>(false);
  
  useEffect(() => {
    setFoiFeito(props.feito)
  }, [props.feito]);
  

  return (
    <ListGroupItem>
      <Row>
        <Col sm={12} className="border-bottom mb-2">
          <Paragrafo feito={props.feito}>{props.tarefa}</Paragrafo>
        </Col>
        <Col sm={12} className="d-flex align-items-center flex-row justify-content-end">
          <div className="rounded border py-1 px-2">
            <Form.Check
              type="checkbox"
              id="feito"
              label="Feito"
              checked={foiFeito}
              onClick={() => setFoiFeito (!foiFeito)}
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

type ParagrafoStyledProps = { 
  feito: boolean;
}

const Paragrafo = styled.p<ParagrafoStyledProps>`
  text-decoration: ${(props) => (props.feito) ? "line-through" : "none" };
`;

const listaTarefas = [
  {
    tarefa: "Limpar a casa",
    feito: true,
  },
  {
    tarefa: "Limpar a janela",
    feito: false,
  },
  {
    tarefa: "Escrever um poema",
    feito: true,
  },
  {
    tarefa: "Limpar o carro",
    feito: true,
  },
  {
    tarefa: "Ir ao cinema",
    feito: false,
  },
  {
    tarefa: "Ler um livro de poemas",
    feito: false,
  },
];
