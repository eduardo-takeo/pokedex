export interface IPokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}
