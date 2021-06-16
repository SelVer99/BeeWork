import { Utente } from './utente.model';
import { Task } from './task.model';

export interface Progetto {
  id?: number;
  nome: string;
  percentuale?: number;
  scadenza?: Date;
  descrizione: string;
  membri?: Array<Utente>;
  listaTask?: Array<Task>;
}
