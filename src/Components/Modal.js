import React from 'react'

const Modal = ({ showModal, setShowModal }) => {
    return (showModal) ? <div className='modal' onClick={e => setShowModal(false)}>
        <div className='modalContent'>
            <div className='modalHeader'>
                <span id='modalTitle'>Job Application Tracker</span>
                <button id='closeModalBttn' onClick={e => setShowModal(false)}>X</button>
            </div>
            <div className='modalBody'>
                <div id='intro'>
                    <p>
                        Welcome!
                    </p>
                    <p id='introduction'>
                        If you found this site, then it probably means you are currently
                        job hunting. This is a simple web app that I created to help keep track of your job applications,
                        whether you are searching for your first or next job. At the top of the page, there are stats based on the data
                        you have entered into the tracker.
                    </p>
                    <hr />
                    <span className='sectionHeader'>Stat Meaning</span>
                    <p id='statDescription'>
                        <i># Days Searching: </i>Days since the first job app on the application was entered<br />
                        <i># Jobs Applied: </i>Total jobs you have applied to based on data submitted<br />
                        <i># Waiting on: </i>Total jobs that you're waiting to hear back from (Marked as 'Waiting')<br />
                        <i># Rejections: </i>Total jobs that you've been rejected from so far<br />
                        <i>Rejection Rate: </i>Percentage of your rejection (# of Rejections / # jobs Applied)<br />
                    </p>
                </div>
                <hr />
                <div id='directions'>
                    <span className='sectionHeader'>Directions</span>
                    <p id='directionDescription'>
                        To add a new application to the table, Company Name, Location and App Link can't be left empty.
                        <br />
                        To keep stats accurate, update your progress and status of each job app as they change.
                        <br />
                        To delete a job app, click on the app's X button on its row (Last column of job app's row)
                        <br />
                        To update progress/status of an app, click on the job app's respective progress/status button
                        <br />
                        Note: Marking a job's status as "Rejected" will disable the job's progress button.
                    </p>
                </div>
            </div>
            <div className='modalFotter'>
                <i>IMPORTANT: Job data entered into this app are stored in localStorage.
                    DO NOT CLEAR CACHE OR DATA WILL BE LOST.</i>
            </div>
        </div>
    </div> : null
}

export default Modal;