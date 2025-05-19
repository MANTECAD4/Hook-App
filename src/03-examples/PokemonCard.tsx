import type { Sprites } from "@/Types/PokeApi"

type Props = {
    id: number,
    name: (undefined | string),
    sprites?: Sprites
}
export const PokemonCard = ( {id, name = 'No name', sprites }:Props) => {
    return (
        <>
            <h2 className="text-capitalize"> # {id} - {name}</h2>
            <div className="mx-auto w-fit ">
                <div className="w-full h-full relative">
                    <img alt={name} className="w-full h-full object-cover" src={sprites?.front_default}/>
                </div>
            </div>
        </>
    )
}
