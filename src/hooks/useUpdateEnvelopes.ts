import { gql } from "@apollo/client";

export const UPLOAD_ENVELOPES = gql`
  mutation UpdateScripts($updateScriptInput: [UpdateScriptInput]) {
    updateScripts(updateScriptInput: $updateScriptInput)
  }
`;
