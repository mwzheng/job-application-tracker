import React from 'react';

// Component used to reset/delete all data information
const Reset = ({ setJobs }) => {

    // Resets the job apps currently in the table
    const resetJobAppList = () => {
        if (window.confirm("Are you sure you want to reset table?\nThis CANNOT be undone!")) {
            localStorage.removeItem('jobAppList');
            setJobs('[]');
        }
    }

    return <div id='resetContainer'>
        <button id='resetButton' onClick={resetJobAppList}>Reset Table</button>
    </div>
}

export default Reset;