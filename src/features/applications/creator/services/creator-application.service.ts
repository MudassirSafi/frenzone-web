import type {
  CreatorApplicationInput,
  ApplicationSubmissionResult,
} from "../../types/application";

export const creatorApplicationService = {
  async submit(_input: CreatorApplicationInput): Promise<ApplicationSubmissionResult> {
    throw new Error("Creator application submission is not configured yet.");
  },
};
