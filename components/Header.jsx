import Image from "next/image";
import logo from "../public/Logo_orion.png";
import Navigation from "./Navigation";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
            <div className="container flex items-center justify-between py-2 ">

                <Image src={logo} alt="logo" className="w-60 h-10" />

                <Navigation />
            </div>
        </div>
    );
}