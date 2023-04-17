import { gql } from "@apollo/client";

export const GET_SCRIPTS = gql`
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
            collected
            date
            session
            rooms
            toPrint
            seen
        }
    }
`;
