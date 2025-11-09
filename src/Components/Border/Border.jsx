import './Border.css'
import { useEffect, useState } from 'react';
import Aos from 'aos';
let Border = ()=>{
   

  const message = "Détecté tôt, il peut être totalement éradiqué.";
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
                <div  className="bg-blue-500 w-full h-screen  border-white flex justify-center flex-col items-center">
                   <div className="border-2 border-white w-full h-[800px] bg-[url(/Images/p3.jpg)] bg-cover bg-top flex  flex-col justify-center items-center overflow-hidden">
                        <div data-aos="fade-right" className=" border-red-200 flex justify-center items-center text-6xl font-extrabold w-full h-[100px]"> 
                            <p id='texte' className='  text-white rounded-2xl p-6 '>Agir tôt, c’est vivre mieux</p>
                        </div>
                        <div  id='police' className="  border-white w-full h-[500px] flex justify-center mt-3 items-center flex-col font-bold text-white text-[55px]">
                            <p className="flex justify-center text-center items-center">Le cancer de la propstate touche 1 Homme sur 8</p>
                            <p className="flex justify-center text-center items-center ">{displayedText}</p>
                    </div>
                    </div>
                    
                     
                    


                </div>
    
    
            </>
}



export default Border;