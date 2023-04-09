import { useQuery, gql } from "@apollo/client";

const GET_SCRIPTS = gql`
  query {
    getPapers {
      courseCode
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
