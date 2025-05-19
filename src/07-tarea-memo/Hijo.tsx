import React from 'react';
type Props = {
    numero:number,
    incrementar:Function
}

export const Hijo = React.memo(({ numero, incrementar }:Props) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary me-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
