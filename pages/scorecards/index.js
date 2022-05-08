import Navbar from "../navbar";

export default function Home() {
    return (
        <div className="container bg-gray-50 h-screen relative">
            <div className="background-pattern pt-12 w-screen">
                <Navbar selection={"SCORECARDS"}/>
                <div className="px-4 mt-10 mx-10">
                    <div className="bg-white rounded-lg content-center h-full border-dashed border text-center">
                        <h1 className="text-7xl font-robotoMono pt-5">Scorecards</h1>

                        <div className="flex p-4"></div>

                    </div>
                </div>
            </div>
        </div>
    )
}
