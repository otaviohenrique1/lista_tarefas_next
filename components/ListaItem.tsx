import { format } from 'date-fns';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Button, Col, Form, ListGroupItem, Row } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import styled from 'styled-components';
import { TarefaTypes } from '../types/types';

type ListaItemProps = TarefaTypes & {
  onClickEditar: MouseEventHandler<HTMLButtonElement>;
  onClickRemover: MouseEventHandler<HTMLButtonElement>;
};

export function ListaItem(props: ListaItemProps) {
  const [foiFeito, setFoiFeito] = useState<boolean>(false);

  useEffect(() => {
    setFoiFeito(props.feito);
  }, [props.feito]);

  return (
    <ListGroupItem>
      <Row>
        <Col sm={12} className="my-2">
          <Paragrafo feito={foiFeito}>{props.tarefa}</Paragrafo>
        </Col>
        <Col sm={12} className="d-flex align-items-center flex-row justify-content-end">
          <div className="rounded border py-1 px-2 ms-1">
            <Form.Check
              className="my-0"
              type="checkbox"
              id={`feito-checkbox-${props.id}`}
              label="Feito"
              checked={foiFeito}
              onClick={() => setFoiFeito(!foiFeito)} />
          </div>
          <Button
            className="d-flex align-items-center ms-1"
            variant="primary"
            onClick={props.onClickEditar}
            disabled={(foiFeito) ? true : false}
          >
            <AiFillEdit />
            <span className="ms-1">Editar</span>
          </Button>
          <Button
            className="d-flex align-items-center ms-1"
            variant="danger"
            onClick={props.onClickRemover}
            disabled={(foiFeito) ? true : false}
          >
            <AiFillDelete />
            <span className="ms-1">Remover</span>
          </Button>
        </Col>
        <Col sm={12} className="d-flex flex-row align-items-center justify-content-end mt-2">
          <Row className="m-0 p-0 w-100">
            <ListaItemData
              label="Criado em:"
              data={props.criado}
            />
            <ListaItemData
              label="Modificado em:"
              data={props.atualizado}
            />
          </Row>
        </Col>
      </Row>
    </ListGroupItem>
  );
}

type ListaItemDataProps = {
  label: string;
  data: Date;
}

function ListaItemData(props: ListaItemDataProps) {
  const data = format(props.data, "dd/MM/yyyy");
  const hora = format(props.data, "HH:mm:ss");
  const resultado = `${data} às ${hora}`;
  return (
    <Col sm={12} md={6} className="m-0 p-0">
      <div className="rounded border py-1 px-2 m-1">
        <span className="me-1">{props.label}</span>
        <span>{resultado}</span>
      </div>
    </Col>
  );
}

type ParagrafoStyledProps = {
  feito: boolean;
};

const Paragrafo = styled.p<ParagrafoStyledProps> `
  text-decoration: ${(props) => (props.feito) ? "line-through" : "none"};
`;
