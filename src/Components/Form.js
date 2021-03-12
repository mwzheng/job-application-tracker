import React from 'react';

const Form = ({ jobs, setJobs }) => {
    const jobList = JSON.parse(jobs);

    // Convert input into title case (Ex: hi there => Hi There)
    const titleCase = (input) => {
        if (input === '') return;
        return input.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
    }

    // Capitalizes the state for locations
    const capitalizeState = (input) => {
        if (input === undefined) return;
        let tokens = input.split(',').map(token => token.trim())

        if (tokens[1])
            tokens[1] = tokens[1].toUpperCase();

        return tokens.join(', ');
    }

    // Adds a new job application to the table
    const addNewJobApp = () => {
        let name = titleCase(document.getElementById('companyName').value);
        let location = capitalizeState(titleCase(document.getElementById('jobLocation').value));
        let link = document.getElementById('appLink').value;

        if (name === '' || location === '' || link === '') return

        const newJobApp = {
            "number": jobList.length + 1,
            "name": name,
            "location": location,
            "link": link,
            "status": "Applied"
        }

        jobList.push(newJobApp);
        let newJobAppList = JSON.stringify(jobList)
        localStorage.setItem('jobAppList', newJobAppList);
        setJobs(newJobAppList);
        clearInputs();
    }

    // Clears out input fields
    const clearInputs = () => {
        document.getElementById('companyName').value = "";
        document.getElementById('jobLocation').value = "";
        document.getElementById('appLink').value = "";
    }

    return <div className='inputDiv'>
        <label>Company Name:<input id='companyName'></input></label>
        <label>Location:<input id='jobLocation'></input></label>
        <label>App Link:<input id='appLink'></input></label>
        <button id='addJobButton' onClick={addNewJobApp}>Add</button>
    </div >
}

export default Form;