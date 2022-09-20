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
  tarefas: TarefaTypes[]; /* Ver se vai sair ou continuar */
  criarTarefa: (tarefa: string) => void;
  editarNomeTarefa: (id: string, tarefa: string) => void;
  editarNomeTarefa2: (id: string, tarefa: string) => void;
  editarStatusTarefa: (id: string) => void;
  removerTarefa: (id: string) => void;
  listarTarefas: () => TarefaTypes[];
}