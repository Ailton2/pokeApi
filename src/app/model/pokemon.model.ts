
export class Types{
  type: any;
}

export class Abilities{
  ability: any;
}

export class Stats {
 stat: string;
 name: string;
}

export class Pokemon{
  id: number;
  name: string;
  types: Types[];
  abilities: Abilities[];
  stats: any;
  weight: string;
  height: string;
}
