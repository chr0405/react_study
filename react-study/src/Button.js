import React from 'react'
import PropTyes from "prop-types";
import styles from "./Button.module.css";

Button.propTyes = {
    text: PropTyes.string.isRequired,
};

export default function Button({text}) {
  return (
    <button className={styles.btn}>{text}</button>
  )
}
