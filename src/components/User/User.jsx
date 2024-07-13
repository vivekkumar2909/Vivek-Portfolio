/* eslint-disable react-refresh/only-export-components */

import { useCallback, useEffect, useState } from 'react';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import axios from 'axios'

import "./User.scss"

function User() {



  const [questionsDone, setQuestionsDone] = useState();


  // setTimeout(() => {

  // }, 3000);
  useEffect(() => {
    axios.get('https://leetcode-stats-api.herokuapp.com/vivek_kumar030929/').then((result) => {
      console.log(result);
      setQuestionsDone(result.data);
      console.log('hii', questionsDone);
    }).catch((err) => {
      console.log(err);
    });
    axios.get('https://leetcode-stats-api.herokuapp.com/Vivek_Kumar-29/').then((result) => {
      console.log(result);
      //   // setQuestionsDone(result.data);
      //   // console.log('hii', questionsDone?);
    }).catch((err) => {
      console.log(err);
    });
  }, [questionsDone]);

  console.log('hii', questionsDone);


  const percentageEasySolved = (questionsDone?.easySolved / questionsDone?.totalEasy) * 100;
  const percentageMediumSolved = (questionsDone?.mediumSolved / questionsDone?.totalMedium) * 100;
  const percentageHardSolved = (questionsDone?.hardSolved / questionsDone?.totalHard) * 100;

  let totalSolvedQuestion = (questionsDone?.totalSolved / questionsDone?.totalQuestions) * 100;

  totalSolvedQuestion = Math.round(totalSolvedQuestion * 100) / 100;

  console.log(percentageEasySolved, percentageMediumSolved, percentageHardSolved, totalSolvedQuestion)

  return (
    <>
      <div>

        <h1 className='user-heading'>
          my coding profile
        </h1>

        <div className='app_User-container'>

          <div className='box'>

            <div className='User_heading'>
              <div>LeetCode: </div>
              <h3> <strong>Vivek_kumar030929</strong></h3>
            </div>
            <div className='solved'>
              Solved:  {<strong>{questionsDone?.totalSolved} / {questionsDone?.totalQuestions}</strong>}
            </div>

            <div className='stat_container'>
              <div className="box1" style={{ "--i": `${totalSolvedQuestion}%`, "--clr": "#ffc01e" }}>
                <div className="circle">
                  <h2>{totalSolvedQuestion} <small>%</small></h2>
                </div>
              </div>
              <div className="linear_box">
                <div className="gap_box">
                  <div className="questions">Easy: {questionsDone?.easySolved} / {questionsDone?.totalEasy}</div>
                  <div className="line">
                    <div className="linear_progress" style={{ width: `${percentageEasySolved}%` }}>
                    </div>
                  </div>
                  <div className="questions">Medium: {questionsDone?.mediumSolved} /{questionsDone?.totalMedium}</div>
                  <div className="line1">
                    <div className="linear_progress1" style={{ width: `${percentageMediumSolved}%` }}>
                    </div>
                  </div>
                  <div className="questions">Hard: {questionsDone?.hardSolved} / {questionsDone?.totalHard}</div>
                  <div className="line2">
                    <div className="linear_progress2" style={{ width: `${percentageHardSolved}%` }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='box'>

            <div className='User_heading'>
              <div>LeetCode: </div>
              <h3> <strong>Vivek_kumar030929</strong></h3>
            </div>
            <div className='solved'>
              Solved:  {<strong>{questionsDone?.totalSolved} / {questionsDone?.totalQuestions}</strong>}
            </div>

            <div className='stat_container'>
              <div className="box1" style={{ "--i": `${totalSolvedQuestion}%`, "--clr": "#ffc01e" }}>
                <div className="circle">
                  <h2>{totalSolvedQuestion} <small>%</small></h2>
                </div>
              </div>
              <div className="linear_box">
                <div className="gap_box">
                  <div className="questions">Easy: {questionsDone?.easySolved} / {questionsDone?.totalEasy}</div>
                  <div className="line">
                    <div className="linear_progress" style={{ width: `${percentageEasySolved}%` }}>
                    </div>
                  </div>
                  <div className="questions">Medium: {questionsDone?.mediumSolved} /{questionsDone?.totalMedium}</div>
                  <div className="line1">
                    <div className="linear_progress1" style={{ width: `${percentageMediumSolved}%` }}>
                    </div>
                  </div>
                  <div className="questions">Hard: {questionsDone?.hardSolved} / {questionsDone?.totalHard}</div>
                  <div className="line2">
                    <div className="linear_progress2" style={{ width: `${percentageHardSolved}%` }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(User, 'app__User'),
  'coding',
  'app__primarybg',
);
