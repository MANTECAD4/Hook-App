import { useEffect } from "react"

const onMouseMove = ( {x,y}:MouseEvent ) => {
    const coords = {x,y}
    console.log(coords);
}

export const Message = () => {


    useEffect(() => {

        window.addEventListener('mousemove', onMouseMove);
      
         return () => {

             window.removeEventListener('mousemove', onMouseMove);

          }
    }, []);
    
  return (
    <>
        <h3>The user already exists</h3>
    </>
  )
}
