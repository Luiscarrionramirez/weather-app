const MovingBackground = () => {
   return (
     <div className="absolute w-screen h-screen overflow-hidden">
       <div
         className="absolute w-full h-full top-0 left-0 bg-no-repeat  bg-center z-10 animate-background bg-cover"
         style={{
           backgroundImage: `url('icons/paisaje-nubes-fantastico.jpg')`,
           animation: 'moveBackground 20s linear infinite',
         }}
       ></div>
     </div>
   );
 };
 
 export default MovingBackground;