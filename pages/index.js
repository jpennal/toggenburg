import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
    return (
        <div className="container bg-gray-50 h-screen relative">
            <div className="background-pattern pt-12 w-screen">
                <Navbar selection={"HOME"}/>
                <div className="px-4 mt-10 mx-10">
                    <div className="bg-white rounded-lg content-center h-full border-dashed border text-center">
                        <h1 className="text-7xl font-mooLahLah pt-5">GOAT SHOWMANSHIP!</h1>
                        <h4 className="text-3xl font-serif">Play games to learn</h4>
                        <h4 className="text-3xl font-serif pt-3">When you feel ready to quiz yourself</h4>

                        <Image src={require("../public/dashboard.png")} alt="goats"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
