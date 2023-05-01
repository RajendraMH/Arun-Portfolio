import React from "react";
import { Tilt } from "react-tilt";
import { motion, spring } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { certi } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import { pdf_logo } from "../assets";



const CertificationCard = ({index,name,company_name,source_code_link}) =>{
    return(
        <motion.div variants={fadeIn("down","spring",index * 0.5,0.75)}>
            <Tilt 
                options={
                    {
                        max: 45,
                        scale: 1,
                        speed: 100
                    }
                }
                className="bg-tertiary p-5 rounded-2xl sm:w-[360] w-full h-100">
        
            <div className="mt-5 relative">
                <div className="absolute inset-0 flex justify-end card-img_hover top-8">
                    <div onClick={() => window.open(source_code_link,"_blank")}
                        className="black-gradient h-7 w-7 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img 
                            src={pdf_logo}
                            alt="PDF_LOGO"
                            className="h-1/2 w-1/2 object-contain"
                            
                        />


                    </div>
                </div>
                <h5 className="text-white font-bold text-[18px]">{name}</h5>
                <p className="text-secondary mt-2 text-[14px]">{company_name}</p>                    
            </div>    
            </Tilt>

        </motion.div>
    )
}



const Certifications = () =>{
    return(
        <>
            <motion.div variants={textVariant()} className="text-center">
                <p className={`${styles.heroSubText}`}>Self Learn I have Done</p>
                <h2 className={`${styles.heroHeadText}`}>Certifications</h2>
            </motion.div>
           
            <div className="flex flex-wrap mt-20 gap-7 cursor-pointer justify-center items-center">
                {certi.map((certification,index) =>(
                    <CertificationCard
                        key={`certification-${index}`}
                        index={index}
                        {...certification}
                    
                    />
                ))}
            </div>
        </>
        
    )
}

export default SectionWrapper(Certifications,"certifications")