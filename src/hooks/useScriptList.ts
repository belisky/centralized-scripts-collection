import { useQuery, gql } from "@apollo/client";

const GET_SCRIPTS = gql`
  query {
    getAllScripts {
      _id
      courseName
      courseCode
      collectedBy
      deliveredBy
      signatureUrl
      numOfEnvelopes
      collectedDate
      class
    }
  }
`;

export const useScriptList = () => {
  const { error, data, loading } = useQuery(GET_SCRIPTS);
  return {
    error,
    data,
    loading,
  };
};
