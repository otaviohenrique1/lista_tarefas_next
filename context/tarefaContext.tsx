import { createContext, FC, ReactNode, useState } from "react";
import { TarefaContextType, TarefaTypes } from "../types/types";
import { v4 as uuidv4 } from 'uuid';

export const TarefaContext = createContext<TarefaContextType | null>(null);

export type TarefaProviderProps = {
  children: ReactNode;
}

export const TarefaProvider: FC<TarefaProviderProps> = ({ children }) => {
  const [tarefas, setTarefas] = useState<TarefaTypes[]>([]);

  const criarTarefa = (tarefa: string) => {
    let item_data: TarefaTypes = {
      id: uuidv4().toString(),
      tarefa: tarefa,
      feito: false,
      criado: new Date,
      atualizado: new Date,
    }

    setTarefas([...tarefas, item_data]);
  };

  const editarNomeTarefa = (id: string, tarefa: string) => {
    let resultado = tarefas.map((item_busca) => {
      if (item_busca.id === id) {
        return {
          ...item_busca,
          tarefa: tarefa,
          atualizado: new Date(),
        }
      }
      return item_busca;
    });
    setTarefas(resultado);
  };
  
  const editarNomeTarefa2 = (id: string, tarefa: string) => {
    tarefas.filter((item_busca: TarefaTypes) => {
      if (item_busca.id === id) {
        item_busca.tarefa = tarefa;
        setTarefas([...tarefas]);
      }
    })
  };

  return (
    <div>{children}</div>
  );
};
