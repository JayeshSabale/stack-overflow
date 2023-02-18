import React from 'react'

import './HomeMainbar.css'

import { useLocation , useNavigate} from "react-router-dom";

import QuestionList from './QuestionList';



const HomeMainbar = () => {

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

        var questionsList = [{ 
        _id: 1,
        votes: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "mano",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 2,
        votes: 0,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 3,
        votes: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }]

       

        // const redirect = () => {
        // alert("login or signup to as a question")
        //     navigate("/Auth")
        // }

       
    const checkAuth = () => {
        if(user === null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }

    return (
        <div className='main-bar'>
             <div className='main-bar-header'>
                 {

                    location.pathname  === "/" 
                    ?
                     <h1>Top Questions</h1> 
                    :
                    <h1>All Questions</h1>
                 }
       <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
           </div>
               {
                    questionsList === null
                    ?
                    <h1>Loading...</h1>
                    :
                    <>
                    <p>{questionsList.length} questions</p>
                    <QuestionList questionsList={questionsList} />
          
                    </>
                }
        
        </div>
    )
}

export default HomeMainbar
