import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
    return (
        <div className="container min-w-fit bg-gray-50 h-screen relative">
            <div className="background-pattern pt-12 w-screen">
                <Navbar selection={"HOME"}/>
                <div className="px-4 mt-10 mx-10">
                    <div className=" min-w-0 bg-white rounded-lg content-center h-full border-dashed border text-center">
                        <div className="text-9xl font-mooLahLah pt-5">GOAT</div>
                        <div className="text-7xl font-mooLahLah pb-5"> SHOWMANSHIP!</div>
                        <div className="text-3xl font-serif">Play games to learn</div>
                        <div className="text-3xl font-serif pt-3">When you feel ready, quiz yourself</div>

                        <Image src={require("../public/dashboard.png")} alt="goats"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
