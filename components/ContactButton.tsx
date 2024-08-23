import React from "react";
import MUIButton from "@mui/material/Button";
import { COLORS } from "@/styles/colors";
import { SxProps } from "@mui/material";

interface ButtonProps {
    children: React.ReactElement | string;
    type?: "button" | "submit" | "reset"; 
    sx?: SxProps;
}

const ContactButton: React.FC<ButtonProps> = ({ children,sx,type="button" })=>{
    
    return (
            <MUIButton
                type={type}
                sx={{
                    color:COLORS.white,
                    fontWeight:600,
                    fontSize:"1rem",
                    padding:0,...sx}}>
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
    );
};

export default ContactButton;