import JobList from "./JobList";
import { getJobs } from "../graphql/queries";
import { useEffect, useState } from "react";

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // call the server
    // set jobs
    console.log("mounted");
    // getJobs().then(jobs => setJobs(jobs));
    getJobs().then(setJobs);
  }, []);
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
