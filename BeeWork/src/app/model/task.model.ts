import { Commento } from './commento.model';

export class Task {
  id: number;
  nome: string;
  scadenza: Date;
  priorita: string;
  completato: boolean;
  descrizione: string;
  etichetta: string;
  commenti: Array<Commento>;
}
