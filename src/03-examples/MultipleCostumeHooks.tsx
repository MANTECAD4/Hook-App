import { useFecth } from "../hooks/useFecth"

const url:string = 'https://pokeapi.co/api/v2/pokemon/ditto';

export const MultipleCustomHooks = () => {

  useFecth(url);
  return (
    <div>MultipleCustomHooks</div>
  )
}
