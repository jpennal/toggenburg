import Navbar from "../navbar";
import Crossword from "@jaredreisinger/react-crossword";
import {useEffect, useRef, useState} from "react";
import {useWindowSize} from "react-use";
import Confetti from 'react-confetti'

export default function Home() {
    const crosswordRef = useRef()
    const [isCorrect, setIsCorrect] = useState(false);
    const {width, height} = useWindowSize()

    // NOTE: source of crossword
    // https://www.npmjs.com/package/@jaredreisinger/react-crossword#usage

    // site that generated the crossword clues in order
    // https://www.armoredpenguin.com/crossword/
    // https://www.armoredpenguin.com/crossword/Data/2022.05/0808/08080534.130.html
    // 21 across x 24 down
    const data = {
        across: {
            3: {clue: 'Junior points for legs, pasturns and feet', answer: 'TWENTYTHREE', row: 1, col: 8},
            5: {clue: 'Points for chest on a senior doe', answer: 'FOUR', row: 3, col: 12},
            6: {clue: 'Points for appearance of animal', answer: 'FORTY', row: 5, col: 7},
            7: {clue: 'At the top of the heart-girth and in front of the chine', answer: 'CROPS', row: 6, col: 14},
            9: {clue: 'Senior points for udder support', answer: 'THIRTEEN', row: 8, col: 1},
            12: {clue: 'Points for rear udder', answer: 'SEVEN', row: 9, col: 11},
            13: {clue: 'Points for showing animal to the best advantage', answer: 'FIFTEEN', row: 10, col: 3},
            14: {clue: 'Where the udder attaches to the skin', answer: 'ESCUTCHEON', row: 12, col: 5},
            16: {clue: 'The shoulder of the goat is called the', answer: 'POINTOFSHOULDER', row: 14, col: 4},
            18: {clue: 'Bone on either side of the tail', answer: 'PINBONE', row: 16, col: 3},
            19: {clue: 'In between the chine and the rump', answer: 'LOIN', row: 16, col: 18},
            22: {clue: 'State where ADGA is located', answer: 'NORTHCAROLINA', row: 19, col: 6},
            23: {clue: 'City where ADGA is located', answer: 'SPINDALE', row: 21, col: 0},
            24: {clue: 'The vein in front of the udder', answer: 'MILKVEIN', row: 22, col: 11},
        },
        down: {
            1: {clue: 'On the rear leg below the pin-bone', answer: 'THURL', row: 0, col: 15},
            2: {
                clue: 'The divider between the two sides of the udder',
                answer: 'MEDIALSUSPENSORYLIGAMENT',
                row: 0,
                col: 18
            },
            4: {clue: 'Points for head and breed characteristics for a buck', answer: 'EIGHT', row: 1, col: 10},
            8: {clue: 'The joint on the rear leg behind the flank', answer: 'STIFLEJOINT', row: 7, col: 5},
            10: {clue: 'Junior point for head and breed characteristics', answer: 'TEN', row: 8, col: 12},
            11: {clue: 'Junior points for chest', answer: 'SEVEN', row: 8, col: 14},
            15: {clue: 'In-between the knee and the dew-claw', answer: 'CANNONBONE', row: 12, col: 7},
            17: {clue: 'Senior points for barrel', answer: 'SIX', row: 14, col: 11},
            20: {clue: 'The front of the chest', answer: 'BRISKET', row: 17, col: 16},
            21: {clue: 'The flappy part of skin attaching the legs to the body', answer: 'FLANK', row: 18, col: 3},
        }
        ,
    };

    useEffect(() => {
        if (crosswordRef.current) {
            crosswordRef.current.reset()
        }
    }, [crosswordRef])

    return (
        <div className="container bg-gray-50 h-screen relative">
            <div className="background-pattern pt-12 w-screen">
                <Navbar selection={"CROSSWORD"}/>
                <div className="px-4 mt-10 mx-10">
                    <div className="bg-white rounded-lg content-center h-full border-dashed border text-center">
                        <h1 className="text-7xl font-schoolbell pt-5">CROSSWORDS</h1>

                        <div className="flex justify-center">
                            {isCorrect ? <h4 className="text-3xl uppercase mr-2">You did it!!</h4> : null}
                            {!isCorrect ?
                                <button onClick={() => {
                                    crosswordRef?.current?.fillAllAnswers()
                                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Show Answers
                                </button> :
                                <button onClick={() => {
                                    crosswordRef?.current?.reset();
                                    setIsCorrect(false)
                                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Reset
                                </button>
                            }

                                </div>


                        <div className="flex p-4">
                            <Crossword data={data} ref={crosswordRef}
                                       onCrosswordCorrect={setIsCorrect}
                            />
                        </div>

                        {isCorrect ? <Confetti
                            width={width}
                            height={height}
                        /> : null}

                    </div>
                </div>
            </div>
        </div>
    )
}
