import React, {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import logo from '../src/assets/JG.png'

export default function SideBar(){
    const [hide , setHide] = useState(false)
    const [nav, setNav] = useState(false)
    const sidebar = nav?"mobileNav h-screen w-3/4 z-0 fixed flex flex-col px-3 py-4 m-0 overflow-y-auto ":"hideNav h-screen w-3/4 z-0 fixed flex flex-col px-3 py-4 m-0 overflow-y-auto ";

    return(
        <div> 
            <div className="flex sm:hidden justify-end">  
                <div className={sidebar} style={{backgroundColor:'#292929'}} >
                    
                    <div className="h-5/6">
                        <img src={logo} style={{width:"150px"}} alt="logo"/>
                        <li className="nav flex space-x-2 mb-3">
                            <button onClick={() => setHide(!hide)}>{hide? <FontAwesomeIcon icon={faChevronDown} rotation={270} style={{color: "#b9b8b8",}} />:<FontAwesomeIcon icon={faChevronDown} style={{color: "#b9b8b8",}} />}</button>
                            <p style={{color:"#0AA736"}}>joseph_george</p>
                        </li>
                        {hide? <ol></ol>:<ol className="flex flex-col nav relative border-l border-gray-600 px-2 space-y-6">
                            <a href="/about">
                                <p>about<span>.js</span></p>
                            </a>
                            <a href="#">
                                <p>projects<span>.js</span></p>
                            </a>
                            <a href="#">
                                <p>resume<span>.pdf</span></p>
                            </a>
                            <a href="#">
                                <p>contacts<span>.js</span></p>
                            </a>
                        </ol>}
                    </div>

                    <div className="flex justify-around mt-3">
                        <a href="https://github.com/BreadJG" target="_blank">
                            <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
                        </a>
                        <a href="https://www.linkedin.com/in/joseph-george-405b38223/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
                        </a>
                        <a href="https://www.tiktok.com/@breadjg" target="_blank">
                            <FontAwesomeIcon icon={faTiktok} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                    
                </div>

                <button type="button" onClick={() => setNav(!nav)} className="sticky mx-3 inline-flex items-start p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            </div>
                
            <aside className="flex h-screen hidden top-0 left-0 z-40 w-44 transition-transform -translate-x-full md:block sm:translate-x-0 " >
                <div className="h-full flex flex-col px-3 py-4 overflow-y-auto" style={{backgroundColor:'#292929'}}>
                    <div className="h-5/6 mb-3">
                        <img src={logo} style={{width:"150px"}} alt="logo"/>
                        <li className="nav flex space-x-2 mb-3">
                            <button onClick={() => setHide(!hide)}>{hide? <FontAwesomeIcon icon={faChevronDown} rotation={270} style={{color: "#b9b8b8",}} />:<FontAwesomeIcon icon={faChevronDown} style={{color: "#b9b8b8",}} />}</button>
                            <p style={{color:"#0AA736"}}>joseph_george</p>
                        </li>
                        {hide? <ol></ol>:<ol className="flex flex-col nav relative border-l border-gray-600 px-2 space-y-6">
                            <a href="/about">
                                <p>about<span>.js</span></p>
                            </a>
                            <a href="/#">
                                <p>projects<span>.js</span></p>
                            </a>
                            <a href="#">
                                <p>resume<span>.pdf</span></p>
                            </a>
                            <a href="#">
                                <p>contacts<span>.js</span></p>
                            </a>
                        </ol>}
                    </div>

                    <div className="flex justify-around mt-3">
                        <a href="https://github.com/BreadJG" target="_blank">
                            <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
                        </a>
                        <a href="https://www.linkedin.com/in/joseph-george-405b38223/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
                        </a>
                        <a href="https://www.tiktok.com/@breadjg" target="_blank">
                            <FontAwesomeIcon icon={faTiktok} style={{color: "#ffffff",}} />
                        </a>
                    </div>
                   
                </div>
                
            </aside>
           
        </div>
    )
}