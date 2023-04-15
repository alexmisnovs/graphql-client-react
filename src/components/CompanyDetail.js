import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCompanyById } from "../graphql/queries";

import JobList from "./JobList";

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(false);

  useEffect(() => {
    getCompanyById(companyId).then(setCompany);
  }, []);

  if (!company) <p>Loading..</p>;
  // console.log(company);
  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <h1 className="title is-5">Jobs at {company.name}</h1>
      {company.jobs && <JobList jobs={company.jobs} />}
    </div>
  );
}

export default CompanyDetail;
