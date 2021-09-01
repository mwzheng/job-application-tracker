import React from 'react';
import Tablerow from './Tablerow';

// Component to make and display the entire table
const Table = ({ jobs, setJobs, setShowInfoModal }) => {
    const lst = JSON.parse(jobs);

    // Populates the table with data on job apps
    const makeTable = () => {
        return lst.map(anApp => {
            let { number, name, date, location, link, status, progress } = anApp;

            return <Tablerow
                key={number} jobs={jobs} setJobs={setJobs} number={number} name={name}
                date={date} location={location} link={link} status={status} progress={progress}
            />;
        })
    }

    return (<table>
        <tbody>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Company Name</th>
                <th>Location</th>
                <th>Link</th>
                <th>Progress</th>
                <th>Status</th>
                <th className='infoTh'>
                    <button id='infoBttn' onClick={e => setShowInfoModal(true)}>
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </button>
                </th>
            </tr>
            {
                makeTable()
            }
        </tbody>
    </table>)
}

export default Table;