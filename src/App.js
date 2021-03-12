import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';
import Stats from './Components/Stats';

function App() {
  // Below are 2 examples of job objects in JSON format
  // 
  //const jobList = [
  //   {
  //     "number": 1,
  //     "name": "Ascending LLC",
  //     "location": "Rockville, Md",
  //     "link": "https://www.linkedin.com/jobs/view/java-software-developer-in-test-jr-to-senior-at-ascending-llc-2438936060/",
  //     "status": "Rejected"
  //   },
  //   {
  //     "number": 2,
  //     "name": "T-Mobile",
  //     "location": "Reston, Va",
  //     "link": "https://www.linkedin.com/jobs/view/2442945207/",
  //     "status": "Applied"
  //   }
  // ]

  const jobList = localStorage.getItem('jobAppList');
  const [jobs, setJobs] = useState(jobList);
  const jobAppList = JSON.parse(jobs)

  const calcJobStats = () => {
    console.log(jobAppList)
    let numbOfApplications = jobAppList.length
    let numbOfRejections = jobAppList.filter(anApp => anApp.status === 'Rejected').length;
    let rejectionPercentage = ((numbOfRejections) / numbOfApplications) * 100
    let waitingApps = numbOfApplications - numbOfRejections;
    rejectionPercentage = (isNaN(rejectionPercentage)) ? 0 : rejectionPercentage.toFixed(2);

    console.log("Number of rejections: " + rejectionPercentage);

    document.getElementById('numbApplied').innerHTML = numbOfApplications;
    document.getElementById('numbWaiting').innerHTML = waitingApps;
    document.getElementById('numbRejections').innerHTML = numbOfRejections;
    document.getElementById('rejections').innerHTML = rejectionPercentage;
  }

  useEffect(calcJobStats)

  return (
    <div className="App">
      <Stats jobs={jobs} />
      <Form jobs={jobs} setJobs={setJobs} />
      <Table jobs={jobs} setJobs={setJobs} />
    </div>
  );
}

export default App;