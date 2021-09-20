
export class Types{
  type: any;
}

export class Abilities{
  ability: any;
}

export class Pokemon{
  id: number;
  name: string;
  types: Types[];
  abilities: Abilities[];
  weight: string;
  height: string;
}
