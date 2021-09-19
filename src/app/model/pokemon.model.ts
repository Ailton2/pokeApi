import { Sprites } from "./sprites.model";


export class Tipes{
  type: any;
}

export class Pokemon{
  id: number;
  name: string;
  types: Tipes[];
  abilities: any[];
}
