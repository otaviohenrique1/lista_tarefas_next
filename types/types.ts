export type TarefaTypes = {
  id: string;
  tarefa: string;
  feito: boolean;
  criado: Date;
  atualizado: Date;
}

export interface FormTypes {
  tarefa: string;
}

export type TarefaContextType = {
  tarefas: TarefaTypes[];
  criarTarefa: (tarefa: string) => void;
  editarTarefa: (id: string, tarefa: string) => void;
  editarTarefa2: (id: string, tarefa: string) => void;
  removerTarefa: (id: string) => void;
  listarTarefas: () => TarefaTypes[];
}