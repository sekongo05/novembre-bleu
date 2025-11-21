import './Border.css'
import { useEffect, useState } from 'react';
let Border = ()=>{
   

  const message = "Novembre Bleu, c'est l'occasion d'en parler, d'informer, et surtout... de sauver des vies.";
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
                <div  className="border w-full h-screen  border-white flex justify-center flex-col items-center">
                   <div className=" border-white w-full h-screen bg-[url(/Images/p3.jpg)] bg-cover  flex bg-center flex-col  gap-y-40 sm:gap-0 items-center overflow-scroll">
                        <div  className=" border-red-200  flex justify-center items-center mb-[-50px] sm:mb-[100px] text-2xl sm:text-6xl font-extrabold w-full h-[200px] sm:h-[300px] "> 
                            <p id='texte' className='border text-center  text-white rounded-2xl p-6 '>LE SAVIEZ-VOUS ?</p>
                        </div>
                        <div  id='police' className="  border-white w-[95%] h-min p-4 flex justify-center  items-center flex-col font-bold text-white text-2xl sm:gap-0 gap-15  sm:text-[50px]">
                            <p className="flex  justify-center text-center items-center">En Côte d'Ivoire, le cancer de la prostate représente le cancer le plus fréquent chez les hommes. Le pays dispose heureusement d'une technologie de radiothérapie de pointe pour son traitement. Des campagnes de dépistage à coût réduit sont régulièrement organisées dans le cadre de l'initiative "Novembre Bleu", notamment au CHU de Cocody (3 000 FCFA) et au CHU de Treichville (5 000 FCFA), particulièrement recommandées aux hommes dès 35 ans. Les hommes de plus de 50 ans présentent un risque accru, et les données ethniques confirment une prévalence plus élevée chez les hommes noirs ou d'ascendance africaine (1 homme noir sur 6 face à 1 homme blanc sur 8).</p>
{/*                             <p className="flex justify-center mt-5 text-center items-center ">{displayedText}</p> */}
                            <p className='h-[100px]'></p>
                        </div>
                    </div>
                    
                     
                    


                </div>
    
    
            </>
}



export default Border;