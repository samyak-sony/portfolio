import React from "react";
import Box  from "@mui/material/Box";
import { skills } from "@/data";
import Skill from "./Skill";
import { useTheme } from "@mui/material";
import  useMediaQuery  from "@mui/material/useMediaQuery";

const Divider = ()=>{
    return <hr style={{width:"100%",margin:"1rem 0"}}></hr>
}

const Skills = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));


    return(
        <Box 
        sx={{
            display:"flex",
            flexDirection:matches?"column":"row",
            alignItems:"center",
            textAlign:matches?"center":"left",
            flexWrap:matches?"nowrap":"wrap",
            justifyContent:matches?"auto":"space-between"
        }}
        >
            <Divider/>
            {skills.map((skill)=>{
            return <Skill skill={skill.skill}
            key={skill.skill}/>;
            })}
            {matches?<Divider/>:null}
        </Box>
    );
};

export default Skills;