/* eslint-disable react-refresh/only-export-components */

import { useEffect } from 'react';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import axios from 'axios'

import "./User.scss"

function User() {
  const val = 19;


  useEffect( ()=>{
      axios.get('https://leetcode-stats-api.herokuapp.com/vivek_kumar2909/').then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
      <div>

        <h1 className='user-heading'>
          my coding profile
        </h1>

        <div className='app_User-container'>
          <div className='box'>

            <div className='User_heading'>
              <div>LeetCode:</div>
              <h2>Vivek_Kumar2909</h2>
            </div>
            <div className='solved'>
              Solved
            </div>

            <div className='stat_container'>
              <div className="box1" style={{ "--i": `${val}%`, "--clr": "#ffc01e"}}>
                <div className="circle">
                  <h2>19 <small>%</small></h2>
                </div>
              </div>
              <div className="linear_box">
                <div className="gap_box">
                  <div className="questions">Easy: 250/900</div>
                  <div className="line">
                    <div className="linear_progress" style={{ width: `${val}%` }}>
                    </div>
                  </div>
                  <div className="questions">Easy: 250/900</div>
                  <div className="line1">
                    <div className="linear_progress1" style={{ width: `${val}%` }}>
                    </div>
                  </div>
                  <div className="questions">Easy: 250/900</div>
                  <div className="line2">
                    <div className="linear_progress2" style={{ width: `${val}%` }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='User_heading'>
              <div>LeetCode:</div>
              <h2>Vivek_Kumar2909</h2>
            </div>

            <div className='box2'>
              <div className='ranking'>
                <div>
                  Ranked
                </div>
                <div>
                  Ranked
                </div>
              </div>
              <div className='ranking'>
                <div>
                  Ranked
                </div>
                <div>
                  Ranked
                </div>
              </div>
              <div className='ranking'>
                <div>
                  Ranked
                </div>
                <div>
                  Ranked
                </div>
              </div>
              <div className='ranking'>
                <div>
                  Ranked
                </div>
                <div>
                  Ranked
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
