export type UserStatusType = "none" | "worker" | "company";

export interface WorkerInfo {
  name: string;
  afterName: string;
  age: string;
  about: string;
  previousJobs: string;
  workTime: string;
  id: string;
  profilePic: string;
  type: "worker" | "company";
}

export interface CompanyInfo {
  companyName: string;
  employer: string;
  id: string;
  type: "worker" | "company";
}
