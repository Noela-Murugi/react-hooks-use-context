import React,{ useContext} from "react";
import {Theme} from '../context/theme'


function Interests({ interests}) {
  const {theme} = useContext(Theme)

  return (
    <div>
      <h4>Interests</h4>
      <ul className={theme}>{interests.map((interest) => (<li key={interest}>{interest}</li> ))}
      </ul>
    </div>
  );
}

export default Interests;
