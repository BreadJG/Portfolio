import React, {useState, useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState("Joseph George ")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
          setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
          }, 120)
        }
      }, [index])

    return(
        <div className="contentFont text-white md:py-28 md:flex">
            <div className="p-5 md:ml-10 md:w-3/5">
                <h1 className="text-center mb-5 text-4xl md:text-left md:text-7xl">{text}<span className="blinkMe">|</span></h1>
                <p className="text-left">Text stuff blah blah blah blah blah</p>
            </div>
            <div className="md:p-20 p-5">
                <p className="text-green-500 text-xl">Skills</p>
                <ul>
                    <li><FontAwesomeIcon icon={faCaretRight} /> Html</li>
                    <li><FontAwesomeIcon icon={faCaretRight} /> CSS</li>
                    <li><FontAwesomeIcon icon={faCaretRight} /> JavaScript</li>
                </ul>
            </div>
        </div>
    )
}