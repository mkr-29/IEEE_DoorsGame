import "./profile.css";
import { useAuthValue } from "../../Firebase/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import React from "react";
import "../../../Landing/Landing.css";
import V1 from "../../../Landing/Assets/V1.svg";
import V2 from "../../../Landing/Assets/V2.svg";
import V3 from "../../../Landing/Assets/V3.svg";
import V4 from "../../../Landing/Assets/V4.svg";
import V5 from "../../../Landing/Assets/V5.svg";
import V6 from "../../../Landing/Assets/V6.svg";
import V7 from "../../../Landing/Assets/V7.svg";
import V8 from "../../../Landing/Assets/V8.svg";
import IEEE from "../../../Landing/Assets/ieeelogo.svg";
import V9 from "../../../Landing/Assets/V9.svg";
import V10 from "../../../Landing/Assets/V10.svg";
import V11 from "../../../Landing/Assets/V11.svg";
import V12 from "../../../Landing/Assets/V12.svg";
import V13 from "../../../Landing/Assets/V13.svg";
import V14 from "../../../Landing/Assets/V14.svg";
import V15 from "../../../Landing/Assets/V15.svg";
import V16 from "../../../Landing/Assets/V16.svg";
import V17 from "../../../Landing/Assets/V17.svg";
import V18 from "../../../Landing/Assets/V18.svg";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const { currentUser } = useAuthValue();

  return (
    <div className="center">
      <div className="profile">
        <div className="d-landing">
          <span className="d-signup" onClick={() => signOut(auth)}>
            Sign Out
          </span>
          <p className="p-user">
            <strong>Email: </strong>
            {currentUser?.email}
          </p>
            <img src={IEEE} alt="" className="p-ieee" />
          <img src={V1} alt="" className="v1" />
          <img src={V2} alt="" className="v2" />
          <img src={V2} alt="" className="v3" />
          <img src={V2} alt="" className="v4" />
          <img src={V3} alt="" className="v5" />
          <img src={V4} alt="" className="v6" />
          <img src={V5} alt="" className="v7" />
          <img src={V6} alt="" className="v8" />
          <img src={V7} alt="" className="v9" />
          <img src={V8} alt="" className="v10" />
          <img src={V8} alt="" className="v11" />
          <img src={V16} alt="" className="v16" />
          <img src={V17} alt="" className="v17" />
          <img src={V18} alt="" className="v18" />
          <div className="r-section">
            
            <span className="r-head">Rules</span>
            <span className="r-rules">1. The Contest duration will be 60 minutes only.</span>
            <span className="r-rules">2. You must be present in the LAB (CL4) for the event.</span>
            <span className="r-rules">3. Registration on the website should be done only after the event starts.</span>
            <span className="r-rules">4. Submissions made from other places would  be rejected.</span>
            <span className="r-rules">5. Can't go out of the venue until the competition finishes.</span>
            <span className="r-rules">6. Use of mobile phone is strictly prohibited during the event.</span>
            <span className="r-rules">7. Changing Tabs is not allowed.</span>

            <Link className="q-start" to="/q1">Start!!!</Link>

            <div className="d-socials">
              <a href="/">
                <img src={V11} alt="" />
              </a>
              <a href="/">
                <img src={V12} alt="" />
              </a>
              <a href="/">
                <img src={V13} alt="" />
              </a>
              <a href="/" className="d-website">
                ieeejuit.co.in
              </a>
            </div>
          </div>
          <div className="ornaments">
            <span className="o1" />
          </div>
          <img src={V14} alt="" className="v14" />
          <img src={V15} alt="" className="v15" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
