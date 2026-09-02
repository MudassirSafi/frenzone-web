import type {
  AgencyApplicationInput,
  ApplicationSubmissionResult,
} from "../../types/application";

export const agencyApplicationService = {
  async submit(_input: AgencyApplicationInput): Promise<ApplicationSubmissionResult> {
    throw new Error("Agency application submission is not configured yet.");
  },
};
