
import React from 'react';
import { Menubar } from 'primereact/menubar';
import {Button} from 'primereact/button';
import '../../assets/css/customPrimeReact.css';
// import { useMediaQuery } from "react-responsive";

export default function Header() {
    // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <Button label="Register" className="p-button-text"></Button>
            <Button label="Sign In" className="p-button-text"></Button>   
        </div>
    );

    return (
        <>
        {/* {!isMobile && ( */}
            <Menubar mobileActive={false} start={start} end={end} style={{borderRadius:"0px"}}/>
        {/* )} */}
        </>
    )
}
        