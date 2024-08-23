import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";
import Button from "./Button";
import { useTheme } from "@mui/material";
import  useMediaQuery  from "@mui/material/useMediaQuery";

const Project = ({image,skills,title,link}:{image:string,skills:string[],title:string,link:string}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box sx={{margin:"2.5rem 0"}}>
            {matches?(
                <Image src={image} alt={title} width={400} height={200}/>):
                (
                    <Image src={image} alt={title} width={550} height={290}/>
                )
            }
            <Typography variant="h4" sx={{margin:"1.25rem 0 0.5rem 0"}}>{title}</Typography>
            <Box sx={{display:"flex"}}>
                {skills.map((skill)=>{
                    return <Typography variant="body2" sx={{margin:"0 1.125rem 1.125rem 0"}}>{skill}</Typography>
                })}
            </Box>
            <Button link={link} sx={{marginRight:"1.875rem"}}> View Repository</Button>
            
        </Box>
    );
};

export default Project;