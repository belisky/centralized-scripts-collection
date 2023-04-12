import { gql } from "@apollo/client";

export const UPLOAD_ENVELOPES = gql`
  mutation UpdateScripts($updateScriptInput: [UpdateScriptInput]) {
    updateScripts(updateScriptInput: $updateScriptInput)
  }
`;

export const UPLOAD_SIGNATURES = gql`
  mutation CollectManyScripts($collectedScripts: [CollectScriptInput]) {
    collectManyScripts(collectedScripts: $collectedScripts)
  }
`;
