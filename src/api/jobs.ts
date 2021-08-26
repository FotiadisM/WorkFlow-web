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
    type: "part_time",
    location: "Athens, Greece",
    company: {
      company_id: "0",
      company_name: "Patrakala FC",
    },
    salary: {
      min: 50,
      max: 70,
    },
    description: "wow wow wow",
    skills: [],
  },
  {
    id: "2",
    user_id: "1",
    title: "Job Title 3",
    type: "internship",
    location: "International baby",
    company: {
      company_id: "0",
      company_name: "Skrrr International",
    },
    salary: {
      min: 69,
      max: 69,
    },
    description: "skrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    skills: [],
  },
  {
    id: "3",
    user_id: "1",
    title: "Job Title 3",
    type: "full_time",
    location: "New York, USA",
    company: {
      company_id: "0",
      company_name: "Snoop Dog GG",
    },
    salary: {
      min: 420,
      max: 420,
    },
    description: "blaze it",
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
