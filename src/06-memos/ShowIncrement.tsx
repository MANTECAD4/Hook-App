import React from 'react';

type Props = {
    increment:Function
}

export const ShowIncrement = React.memo(( { increment }:Props ) => {
    console.log('me genere');
  return (
    <>
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5);
            }}
        >
            Incrementar
        </button>
    </>
  )
}
)