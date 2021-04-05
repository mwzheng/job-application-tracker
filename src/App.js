import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';
import Stats from './Components/Stats';
import Reset from './Components/Reset';

function App() {
  //const sampleData = [
  //   {
  //     "number": 1,
  //     "date": "03/13/21"
  //     "name": "Ascending LLC",
  //     "location": "Rockville, Md",
  //     "link": "https://www.linkedin.com/jobs/view/java-software-developer-in-test-jr-to-senior-at-ascending-llc-2438936060/",
  //     "status": "Rejected"
  //   }
  // ]

  const jobList = (localStorage.getItem('jobAppList')) ? localStorage.getItem('jobAppList') : '[]';
  const [jobs, setJobs] = useState(jobList);
  const jobAppList = JSON.parse(jobs)

  const calcJobStats = () => {
    let numbOfApplications = jobAppList.length
    let daysOfJobSearching = 0;

    // Calculate # rejections & rejection rate
    let numbOfRejections = jobAppList.filter(anApp => anApp.status === 'Rejected').length;
    let rejectionPercentage = ((numbOfRejections) / numbOfApplications) * 100
    rejectionPercentage = (isNaN(rejectionPercentage)) ? 0 : rejectionPercentage.toFixed(2);

    // Calculate # of apps still waiting on
    let waitingApps = numbOfApplications - numbOfRejections;

    // Calculate # of days job searching
    if (jobAppList[0]) {
      let dateToday = new Date();
      let earliestAppDate = new Date(jobAppList[0]["date"]);
      daysOfJobSearching = Math.floor((dateToday - earliestAppDate) / (1000 * 60 * 60 * 24)) + 1;
      daysOfJobSearching = (isNaN(daysOfJobSearching)) ? 0 : daysOfJobSearching;
    }

    document.getElementById('jobSearchingDays').innerHTML = daysOfJobSearching;
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
      <Reset setJobs={setJobs} />
    </div>
  );
}

export default App;