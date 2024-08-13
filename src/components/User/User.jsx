/* eslint-disable react-refresh/only-export-components */

import { useEffect, useState } from 'react';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import axios from 'axios'

import "./User.scss"

function User() {



  const [questionsDone, setQuestionsDone] = useState();
  const [questionsDone1, setQuestionsDone1] = useState();


  // setTimeout(() => {

  // }, 3000);
  useEffect(() => {
    setTimeout(() => {
      axios.get('https://leetcode-stats-api.herokuapp.com/vivek_kumar030929/').then((result) => {
        console.log(result);
        setQuestionsDone(result.data);
        console.log('hii', questionsDone);
      }).catch((err) => {
        console.log(err);
      });
    }, 3000);

    axios.get('https://leetcode-stats-api.herokuapp.com/Vivek_Kumar-29/').then((result) => {
      console.log(result);
      setQuestionsDone1(result.data);

      console.log('hii', questionsDone1);
    }).catch((err) => {
      console.log(err);
    });
  }, [questionsDone, questionsDone1]);

  console.log('hii', questionsDone);


  const percentageEasySolved = (questionsDone?.easySolved / questionsDone?.totalEasy) * 100;
  const percentageMediumSolved = (questionsDone?.mediumSolved / questionsDone?.totalMedium) * 100;
  const percentageHardSolved = (questionsDone?.hardSolved / questionsDone?.totalHard) * 100;

  let totalSolvedQuestion = (questionsDone?.totalSolved / questionsDone?.totalQuestions) * 100;

  totalSolvedQuestion = Math.round(totalSolvedQuestion * 100) / 100;


  const percentageEasySolved1 = (questionsDone1?.easySolved / questionsDone1?.totalEasy) * 100;
  const percentageMediumSolved1 = (questionsDone1?.mediumSolved / questionsDone1?.totalMedium) * 100;
  const percentageHardSolved1 = (questionsDone1?.hardSolved / questionsDone1?.totalHard) * 100;

  let totalSolvedQuestion1 = (questionsDone1?.totalSolved / questionsDone1?.totalQuestions) * 100;

  totalSolvedQuestion1 = Math.round(totalSolvedQuestion1 * 100) / 100;

  console.log(percentageEasySolved, percentageMediumSolved, percentageHardSolved, totalSolvedQuestion)

  return (
    <>
      <div>

        <h1 className='user-heading'>
          my coding profile
        </h1>

        <div className='app_User-container'>

          <div className='box'>
            <a href='https://leetcode.com/u/vivek_kumar030929/'>
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
            </a>
          </div>
          <div className='box'>

            <a href='https://leetcode.com/u/Vivek_Kumar-29/'>

              <div className='User_heading'>
                <div>LeetCode: </div>
                <h3> <strong>Vivek_kumar-29</strong></h3>
              </div>
              <div className='solved'>
                Solved:  {<strong>{questionsDone1?.totalSolved} / {questionsDone1?.totalQuestions}</strong>}
              </div>

              <div className='stat_container'>
                <div className="box1" style={{ "--i": `${totalSolvedQuestion1}%`, "--clr": "#ffc01e" }}>
                  <div className="circle">
                    <h2>{totalSolvedQuestion1} <small>%</small></h2>
                  </div>
                </div>
                <div className="linear_box">
                  <div className="gap_box">
                    <div className="questions">Easy: {questionsDone1?.easySolved} / {questionsDone1?.totalEasy}</div>
                    <div className="line">
                      <div className="linear_progress" style={{ width: `${percentageEasySolved1}%` }}>
                      </div>
                    </div>
                    <div className="questions">Medium: {questionsDone1?.mediumSolved} /{questionsDone1?.totalMedium}</div>
                    <div className="line1">
                      <div className="linear_progress1" style={{ width: `${percentageMediumSolved1}%` }}>
                      </div>
                    </div>
                    <div className="questions">Hard: {questionsDone1?.hardSolved} / {questionsDone1?.totalHard}</div>
                    <div className="line2">
                      <div className="linear_progress2" style={{ width: `${percentageHardSolved1}%` }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
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
