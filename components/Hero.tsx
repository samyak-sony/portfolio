import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import { useTheme } from "@mui/material";
import  useMediaQuery  from "@mui/material/useMediaQuery";
import { COLORS } from "@/styles/colors";
import Button from "./Button";

const Hero = ( ) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
    <Box sx={{display:"flex",
        flexDirection: matches ? "column":"row-reverse",
        alignItems:"center",
        transform: matches?"translateY(-1px)":"none",
        justifyContent:matches?"none":"space-between"
    }}>
        {
        matches?(
        <Image 
            src="/BwPfpMobile.jpg" 
            alt="profile-picture" 
            width={195} 
            height={230}
            style={{marginBottom:"2.5rem",marginTop:"1rem"}}
        />) : (
        <Image 
            src="/BwPfpDesk.jpg" 
            alt="profile-picture" 
            width={400} 
            height={497}
            style={{marginBottom:"2.5rem",marginTop:"1rem"}}
        />
        )
    }
        <Box sx={{
            textAlign:matches? "center":"left",
            maxWidth:matches?"none":"44.3125rem",
            marginTop:matches?"none":"8.0625rem"
            }}>
            <Typography variant="h2" sx={{fontSize:matches?"auto":"5.5rem"}}>
                Nice To meet you! I'm&nbsp;   
                <u style={{textDecorationColor:COLORS.green,textUnderlineOffset:"0.5rem"}}>
                Samyak Jain.
                </u>
            </Typography>
            <Typography variant={matches?"body1":"body2"} sx={{margin:"1.5rem"}}>Based in New Delhi. I'm a final year back-end developer passionate about building accessible web apps that users love.</Typography>
            
        </Box>
    </Box>)
};

export default Hero;