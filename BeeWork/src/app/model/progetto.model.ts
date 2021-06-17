import { Utente } from './utente.model';
import { Task } from './task.model';

export interface Progetto {
  id?: number;
  nome: string;
  percentuale?: number;
  descrizione: string;
  membriProgetto?: Array<Utente>;
  listaTask?: Array<Task>;
}
