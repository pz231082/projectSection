import React from 'react'
import "./Skill.css"
import projectData from '../assets/Data'

const Skillsections = () => {
    return (
        <>
            <div className='conatiner'>
                    <h2>Project section</h2>             
                <div className='project-section'>
                    {
                        projectData.map((item, index) => {
                            console.log(item.desrciption)
                            return (
                                <div className='project1' key={index}>
                                    <img src={item.image} alt="" />
                                    <h1>{item.name}</h1>
                                    <p>{item.desrciption}</p>
                                    <div className='btn'>
                                        <a href=""><i className="fa-brands fa-github"></i></a>
                                        <a href=""> <i className="fa-brands fa-linkedin"></i></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skillsections
