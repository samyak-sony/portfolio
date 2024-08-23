import React from "react";
import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import  useMediaQuery  from "@mui/material/useMediaQuery";


const Skill = ({skill}:{skill:string}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
    <Box sx={{margin:matches?"1.5rem 0":"3.625rem 0",marginRight:matches?"0":"6.25rem"}}>
        <Typography variant="h3" sx={{fontSize:matches?"auto":"3rem"}}>{skill}</Typography>
    </Box>
    )
}

export default Skill;