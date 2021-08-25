import React, { useState } from 'react';
import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';
import Stats from './Components/Stats';
import Reset from './Components/Reset';

function App() {
  // const sampleData = [
  //   {
  //     "number": 1,
  //     "date": "03/13/21",
  //     "name": "Ascending LLC",
  //     "location": "Rockville, Md",
  //     "link": "https://www.linkedin.com/jobs/view/java-software-developer-in-test-jr-to-senior-at-ascending-llc-2438936060/",
  //     "progress": "In Progress",
  //     "status": "Rejected"
  //   }
  // ]

  const jobList = (localStorage.getItem('jobAppList')) ? localStorage.getItem('jobAppList') : '[]';
  const [jobs, setJobs] = useState(jobList);

  return (
    <div className="App">
      <Stats jobs={jobs} />
      <Form jobs={jobs} setJobs={setJobs} />
      <Table jobs={jobs} setJobs={setJobs} />
      <Reset setJobs={setJobs} />
    </div>
  );
}

export default App;