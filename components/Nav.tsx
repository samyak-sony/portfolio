import  Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
import { useTheme } from "@mui/material";
import  useMediaQuery  from "@mui/material/useMediaQuery";
import NavLink from "./NavLink";

const Nav = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const navLinks = [
        {src:"/github.svg",link:"https://github.com/samyak-sony/"},
        {src:"/linkedin.svg",link:"https://www.linkedin.com/in/samyak-jain-0404gtb/"},
        {src:"/twitter.svg",link:"https://x.com/__sonyyy"}
    
    ]
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            position:"relative",
            zIndex: 5,
            marginRight:matches? 0:"1.5rem"
            }}> 
            <Box sx={{
                display:"flex", 
                flexDirection:matches ?"column":"row", 
                alignItems:"center",
                maxWidth:matches ? "10.875rem": "none",
                justifyContent:matches? "none":"space-between",
                width: matches?"auto":"100%",
                marginTop: matches? "none":"2.4375rem"

            }}>
                <Typography sx={{margin:matches ? "1.25rem":0}} variant="h1">
                    SamyakJain
                </Typography>
                <Box sx={{display:"flex",
                  justifyContent:"space-between",width:matches ? "10.875rem":"12.5rem"}}>
                    {navLinks.map((navLink)=>{
                        return(
                        <NavLink
                            src={navLink.src}
                            link={navLink.link}
                            key={navLink.src}
                         />
                    );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default Nav;