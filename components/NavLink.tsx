import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import Link from "next/link";

const NavLink = ({src,link}:{src:string, link: string}) =>{
    return (
        <Link href={link}>
            <Image src={src} alt="github-logo" width={20} height={20}/>
        </Link>
    );
};
export default NavLink;