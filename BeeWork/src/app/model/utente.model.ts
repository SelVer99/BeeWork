import { Task } from './task.model';
import {Progetto} from './progetto.model';

export interface Utente {
  id?: number;
  username: string;
  password?: string;
  nome: string;
  cognome: string;
  email: string;
  bio: string;
  listaTask?: Array<Task>;
  listaProgetti?: Array<Progetto>;
}
