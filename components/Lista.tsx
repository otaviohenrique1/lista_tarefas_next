import React, { useEffect, useState } from 'react'
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { TarefaTypes } from '../types/types';
import { ListaItem } from './ListaItem';

type ListaProps = {
  lista: TarefaTypes[];
}

export default function Lista(props: ListaProps) {
  const [data, setData] = useState<TarefaTypes[]>([]);

  useEffect(() => {
    setData(props.lista);
  }, [props.lista]);

  return (
    <Col sm={12}>
      <ListGroup>
        {(data.length === 0)
          ? <ListGroupItem>
              <h5 className="text-center">Lista vazia</h5>
            </ListGroupItem>
          : data.map((item, index) => (
            <ListaItem
              key={index}
              id={item.id}
              tarefa={item.tarefa}
              feito={item.feito}
              criado={item.criado}
              atualizado={item.atualizado}
              onClickEditar={() => { }}
              onClickRemover={() => {
                let filtraItem = (item_filtrado: TarefaTypes): boolean => item_filtrado.id !== item.id;
                let resultado = data.filter(filtraItem)
                setData(resultado);
              }}
            />
          ))
        }
      </ListGroup>
    </Col>
  );
}
