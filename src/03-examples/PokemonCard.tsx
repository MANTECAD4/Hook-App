import type { Sprites } from "@/Types/PokeApi"
import { useLayoutEffect, useRef } from "react"

type Props = {
    id: number,
    name: (undefined | string),
    sprites?: Sprites
}
export const PokemonCard = ( {id, name = 'No name', sprites }:Props) => {


    const headerRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        if(headerRef.current){
            
            const { height, width} = headerRef.current.getBoundingClientRect();
            console.log({height, width});
        }
    

    }, [name]);


    return (
        <>
            <h2 
                ref={headerRef}
                className="text-capitalize"
            > # {id} - {name}</h2>
            <div className="mx-auto w-fit ">
                <div className="w-full h-full relative">
                    <img alt={name} className="w-full h-full object-cover" src={sprites?.front_default}/>
                </div>
            </div>
        </>
    )
}
