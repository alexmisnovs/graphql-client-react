import JobList from "./JobList";
import { getJobs } from "../graphql/queries";
import { useEffect, useState } from "react";

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  //basic error handling
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // call the server
    // set jobs
    // getJobs().then(jobs => setJobs(jobs));
    getJobs()
      .then(setJobs)
      .catch(err => {
        setErrorMessage(err.message);
        setIsError(true);
      });
  }, []);

  console.log(isError);
  if (isError) return <pre>Something went wrong: {errorMessage}</pre>;

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
