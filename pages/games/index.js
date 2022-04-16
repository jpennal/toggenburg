import {Navbar} from "../navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className="container bg-gray-50 h-screen relative">
            <div className="background-pattern pt-12 w-screen">
                <Navbar selection={"GAMES"}/>
                <div className="px-4 mt-10 mx-10">
                    <div className="bg-white rounded-lg content-center h-full border-dashed border text-center">
                        <h1 className="text-7xl font-pressStart2P pt-5">GAMES</h1>

                        <div className="flex p-4">
                            <div className="flex flex-col text-center">
                                <h1 className="text-2xl mb-4 font-pressStart2P">Body Parts</h1>
                                <Image src={require("../../public/bodyparts.png")}/>
                            </div>
                            <div className="border bg-black"></div>
                            <div>
                                <h1 className="text-2xl mb-4 font-pressStart2P">Scorecard</h1>
                                <Image src={require("../../public/scorecard.png")}/>

                            </div>
                            <div className="border bg-black"></div>
                            <div>
                                <h1 className="text-2xl mb-4 font-pressStart2P">Positioning</h1>
                                <Image src={require("../../public/positioning.png")}/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
