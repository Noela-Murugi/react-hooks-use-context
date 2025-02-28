import React,{ useContext} from "react";
import { Theme } from '../context/theme'


function ThemedButton({ ...props }) {
  const {theme} = useContext(Theme)
  return <button className={theme} {...props} />;
}

export default ThemedButton;
