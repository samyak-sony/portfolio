import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "./Button";
import Project from "./Project";
import { projects } from "@/data";
import { useTheme } from "@mui/material";
import  useMediaQuery  from "@mui/material/useMediaQuery";

const Projects = () =>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box sx={{margin:"5rem 0" }}>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography variant="h2" sx={{fontSize:matches?"auto":"5.5rem"}}>Projects</Typography>
                
            </Box>
            <Box sx={{
                display:"flex",
                flexDirection:matches?"column":"row",
                flexWrap:matches?"nowrap":"wrap",
                justifyContent:matches?"none":"space-between"

            }}>
                {projects.map((project)=>{
                    return (
                    <Project 
                        title={project.title} 
                        image = {project.image}
                        skills ={project.skills}
                        link = {project.link}
                        key={project.link}
                        />
                        
                );
                })}
            </Box>
        </Box>
    );
};

export default Projects;