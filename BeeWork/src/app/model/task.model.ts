import { Commento } from './commento.model';
import {Utente} from './utente.model';

export class Task {
  id: number;
  nome: string;
  scadenza: Date;
  priorita: string;
  completato: boolean;
  descrizione: string;
  etichetta: string;
  commenti: Array<Commento>;
  listaMembri: Array<Utente>;
}
