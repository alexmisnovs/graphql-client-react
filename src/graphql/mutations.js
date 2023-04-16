import { request, gql } from "graphql-request";

const GRAPHQL_URL = "http://localhost:9000/graphql";

export async function createJob(title, companyId, description) {
  const query = gql`
    mutation CreateJob($title: String!, $companyId: ID!, $description: String) {
      createJob(title: $title, companyId: $companyId, $description: description) {
        id
        title
        company {
          id
          name
        }
        description
      }
    }
  `;
  const variables = { title, companyId, description };
  const { job } = await request(GRAPHQL_URL, query, variables);
  return job;
}
