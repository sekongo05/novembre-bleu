import './Border.css'
import { useEffect, useState } from 'react';
let Border = ()=>{
   

  const message = "Prends 5 secondes pour scanner !! ";
  const mots = message.split(" ");

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < mots.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + (prev ? " " : "") + mots[index]);
        setIndex(index + 1);
      }, 100); // ⏱️ vitesse d’écriture (500ms par mot)

      return () => clearTimeout(timer);
    }
  }, [index, mots]);

  





    return <>
                <div  className=" w-full h-screen  border-white flex justify-center flex-col items-center">
                   <div className=" border-white w-full h-screen bg-[url(/Images/p3.jpg)] bg-cover bg-top flex  flex-col sm:justify-center justify-center gap-y-40 sm:gap-0 items-center overflow-hidden">
                        <div  className=" border-red-200 flex justify-center items-center  text-2xl sm:text-6xl font-extrabold w-full h-[100px] sm:h-[300px] "> 
                            <p id='texte' className='   text-center  text-white rounded-2xl p-6 '>Hé futur(e) pharmacien(ne)... oui toi!
</p>
                        </div>
                        <div  id='police' className="  border-white w-full h-[500px] p-4 flex justify-center sm:mt-3 items-center flex-col font-bold text-white text-5xl sm:gap-0 gap-5  sm:text-[55px]">
                            <p className="flex justify-center text-center items-center">Avant de filer en TP ou de t'endormir sur ton poly

</p>
                            <p className="flex justify-center mt-5 text-center items-center ">{displayedText}</p>
                    </div>
                    </div>
                    
                     
                    


                </div>
    
    
            </>
}



export default Border;