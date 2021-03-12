import React from 'react';
import Tablerow from './Tablerow';

const Table = ({ jobs, setJobs }) => {
    const lst = JSON.parse(jobs);

    // Populates the table with data on job apps
    const makeTable = () => {
        return lst.map(anApp => {
            let { number, name, location, link, status } = anApp;

            return <Tablerow
                key={number} jobs={jobs} setJobs={setJobs} number={number} name={name}
                location={location} link={link} status={status}
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
                <th>Status</th>
            </tr>
            {
                makeTable()
            }
        </tbody>
    </table>)
}

export default Table;