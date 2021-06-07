import { Utente } from './utente.model';

export class Progetto {
  id: number;
  nome: string;
  percentuale: number;
  scadenza: Date;
  descrizione: string;
  team: Array<Utente>;
}
