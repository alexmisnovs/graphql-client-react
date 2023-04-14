import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCompanyById } from "../graphql/queries";

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(false);

  useEffect(() => {
    getCompanyById(companyId).then(setCompany);
  }, [companyId]);

  if (!company) <p>Loading..</p>;

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
    </div>
  );
}

export default CompanyDetail;
