import React from 'react'

const footer = () => {
    const github = 'https://github.com/mwzheng/job-application-tracker';
    const yearCreated = 2021;

    return <div className='footer'>
        <i className="fa fa-copyright" aria-hidden="true">
            <span> {yearCreated} - {new Date().getFullYear()}</span>
        </i>
        <i className="fa fa-github" aria-hidden="true">
            <span> <a href={github} rel="noreferrer" target="_blank">GitHub</a></span>
        </i>
    </div>
}

export default footer;