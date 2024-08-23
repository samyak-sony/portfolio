import React from "react";
import MUIButton from "@mui/material/Button";
import { COLORS } from "@/styles/colors";
import { SxProps } from "@mui/material";

const Button = ({children, link,sx}: {children:React.ReactElement| string; link:string,sx?:SxProps})=>{
    return (
        <a href={link}>
            <MUIButton sx={{color:COLORS.white,fontWeight:600,fontSize:"1rem",padding:0,...sx}}>
                <u 
                    style={{
                        marginBottom:"1.8rem",
                        textDecorationColor:COLORS.green,
                        textUnderlineOffset:".7rem",
                        textDecorationThickness:"0.25rem"
                    }}
                >
                {children}

                </u>
            </MUIButton>
        </a>
    );
};

export default Button;