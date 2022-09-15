import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Button, Col, Form, ListGroupItem, Row } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import styled from 'styled-components';
import { TarefaTypes } from '../types/types';

export type ListaItemProps = TarefaTypes & {
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
        <Col sm={12} className="border-bottom mb-2">
          <Paragrafo feito={foiFeito}>{props.tarefa}</Paragrafo>
        </Col>
        <Col sm={12} className="d-flex align-items-center flex-row justify-content-end">
          <div className="rounded border py-1 px-2">
            <Form.Check
              type="checkbox"
              id="feito"
              label="Feito"
              checked={foiFeito}
              onClick={() => setFoiFeito(!foiFeito)} />
          </div>
          <Button
            className="d-flex align-items-center ms-1"
            variant="primary"
            onClick={props.onClickEditar}
          >
            <AiFillEdit />
            <span className="ms-1">Editar</span>
          </Button>
          <Button
            className="d-flex align-items-center ms-1"
            variant="danger"
            onClick={props.onClickRemover}
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
};

const Paragrafo = styled.p<ParagrafoStyledProps> `
  text-decoration: ${(props) => (props.feito) ? "line-through" : "none"};
`;
