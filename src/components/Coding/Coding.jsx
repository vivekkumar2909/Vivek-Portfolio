/* eslint-disable react-refresh/only-export-components */

import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Coding.scss"

const Coding=()=> {

  let valur = (500 * 100) / 2600;
  return (

    <div className="code_profile">
    
      <div className="container">

        <div className="">

          <h1 className="coding_heading">My Coding Profile</h1>
        </div>


        <div className="coding_profile">
          <div className="coding_stat">
            <h1>LeetCode : Vivek</h1>

            <div>
              Solved 570/2700
            </div>

            <div className="con">
              <div className="box" style={{ "--i": `${valur}%`, "--clr": "#fd0a54" }}>

                <div className="circle">
                  <h2>19 <small>%</small></h2>
                </div>

              </div>
              <div className="linear_box">
                <div className="gap_box">
                  <div className="questions">Easy: 250/900</div>
                  <div className="line">
                    <div className="linear_progress" style={{ width: `${valur}%` }}>
                    </div>
                  </div>
                  <div className="questions">Easy: 250/900</div>
                  <div className="line">
                    <div className="linear_progress" style={{ width: `${valur}%` }}>
                    </div>
                  </div>
                  <div className="questions">Easy: 250/900</div>
                  <div className="line">
                    <div className="linear_progress" style={{ width: `${valur}%` }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="coding_stat">
            <h1>Codeforces : Vivek_shah2909</h1>


            <div className="codeforces">

              <div className="Eachrow">
                <div>Rank</div>
                <div>NewBie</div>
              </div>
              <div className="Eachrow">
                <div>Rank</div>
                <div>NewBie</div>
              </div>
              <div className="Eachrow">
                <div>Rank</div>
                <div>NewBie</div>
              </div>
              <div className="Eachrow">
                <div>Rank</div>
                <div>NewBie</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Coding, 'app_coding'),
  'coding',
  'app__whitebg',
);
