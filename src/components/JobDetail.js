import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getJobById } from "../graphql/queries";

function JobDetail() {
  const { jobId } = useParams();
  console.log(jobId);
  const [job, setJob] = useState(null);

  useEffect(() => {
    // get job details
    getJobById(jobId).then(setJob);
  }, [jobId]);

  // const job =  getJobById(jobId);
  if (!job) {
    return <p>Loading..</p>;
  }
  return (
    <div>
      <h1 className="title">{job.title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className="box">{job.description}</div>
    </div>
  );
}

export default JobDetail;
