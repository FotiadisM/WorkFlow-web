import { Job } from "@/src/types/job";

const dummyJobs: Job[] = [
  {
    id: "0",
    user_id: "1",
    title: "Job Title",
    type: "full_time",
    location: "Remote",
    company: {
      company_id: "0",
      company_name: "Google",
    },
    salary: {
      min: 40,
      max: 80,
    },
    description: "Hello this is a very wonderfull description",
    skills: ["C++", "Go", "Python", "Docker"],
  },
  {
    id: "1",
    user_id: "1",
    title: "Job Title 2",
    type: "full_time",
    location: "Athens, Greece",
    company: {
      company_id: "0",
      company_name: "",
    },
    salary: {
      min: 40,
      max: 80,
    },
    description: "",
    skills: [],
  },
  {
    id: "2",
    user_id: "1",
    title: "Job Title 3",
    type: "full_time",
    location: "",
    company: {
      company_id: "0",
      company_name: "",
    },
    salary: {
      min: 40,
      max: 80,
    },
    description: "",
    skills: [],
  },
  {
    id: "3",
    user_id: "1",
    title: "Job Title 3",
    type: "full_time",
    location: "",
    company: {
      company_id: "0",
      company_name: "",
    },
    salary: {
      min: 40,
      max: 80,
    },
    description: "",
    skills: [],
  },
];

export const fetchAllJobs = async (): Promise<Job[]> => {
  return dummyJobs;
};

export const fetchUserInterestedJobs = async (
  user_id: string
): Promise<Job[]> => {
  return [dummyJobs[2]];
};

export const fetchUserAppliedJobs = async (user_id: string): Promise<Job[]> => {
  return [dummyJobs[0]];
};

export const fetchUserCreatedJobs = async (user_id: string): Promise<Job[]> => {
  return [dummyJobs[1]];
};
