import Link from "next/link";

function HomeIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                fill="currentColor">
        <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
    </svg>;
}

function NavLink(props) {
    return <div className={`text-white p-2 ${props.selected ? "bg-gray-900 rounded-md" : ""}`}>
        <Link href={props.href}>
            <a>
                {props.label}
            </a>
        </Link>
    </div>;
}

export default function Navbar(props) {
    return <div className="flex items-center justify-center gap-x-4 bg-gray-700 p-2 fixed top-0 left-0 right-0 z-50">
        <NavLink label={<HomeIcon/>} href={"/"} selected={props.selection === 'HOME'}/>
        <NavLink label={"Games"} href={"/games"} selected={props.selection === 'GAMES'}/>
        <NavLink label={"Crosswords"} href={"/crosswords"} selected={props.selection === 'CROSSWORDS'}/>
        <NavLink label={"Scorecards"} href={"/scorecards"} selected={props.selection === 'SCORECARDS'}/>
    </div>;
}
