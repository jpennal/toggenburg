import Navbar from "../navbar";
import Image from "next/image";
import Quiz from 'react-quiz-component'

export default function Home() {
    // https://github.com/wingkwong/react-quiz-component
    const quiz = {
        "quizTitle": "React Quiz Component Demo",
        "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "nrOfQuestions": "4",
        "questions": [
            {
                "question": "How can you access the state of a component from inside of a member function?",
                "questionType": "text",
                "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
                "answerSelectionType": "single",
                "answers": [
                    "this.getState()",
                    "this.prototype.stateValue",
                    "this.state",
                    "this.values"
                ],
                "correctAnswer": "3",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "20"
            },
            {
                "question": "ReactJS is developed by _____?",
                "questionType": "text",
                "answerSelectionType": "single",
                "answers": [
                    "Google Engineers",
                    "Facebook Engineers"
                ],
                "correctAnswer": "2",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "20"
            },
            {
                "question": "ReactJS is an MVC based framework?",
                "questionType": "text",
                "answerSelectionType": "single",
                "answers": [
                    "True",
                    "False"
                ],
                "correctAnswer": "2",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "10"
            },
            {
                "question": "Which of the following concepts is/are key to ReactJS?",
                "questionType": "text",
                "answerSelectionType": "single",
                "answers": [
                    "Component-oriented design",
                    "Event delegation model",
                    "Both of the above",
                ],
                "correctAnswer": "3",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "30"
            },
            {
                "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                "questionType": "photo",
                "answerSelectionType": "single",
                "answers": [
                    "https://dummyimage.com/600x400/000/fff&text=A",
                    "https://dummyimage.com/600x400/000/fff&text=B",
                    "https://dummyimage.com/600x400/000/fff&text=C",
                    "https://dummyimage.com/600x400/000/fff&text=D"
                ],
                "correctAnswer": "1",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "20"
            },
            {
                "question": "What are the advantages of React JS?",
                "questionType": "text",
                "answerSelectionType": "multiple",
                "answers": [
                    "React can be used on client and as well as server side too",
                    "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
                    "React components have lifecycle events that fall into State/Property Updates",
                    "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
                ],
                "correctAnswer": [1, 2, 4],
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
                "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "point": "20"
            },
        ]
    };

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

                        <Quiz quiz={quiz} shuffle={true}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
