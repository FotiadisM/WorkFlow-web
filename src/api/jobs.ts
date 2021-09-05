import { Job } from "@/src/types/job";
import { serverURI } from "./url";

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
    interested: [],
    applied: [],
    created: "",
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
    interested: [],
    applied: [],
    created: "",
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
    interested: [],
    applied: [],
    created: "",
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
    interested: [],
    applied: [],
    created: "",
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

export const fetchJobs = async (): Promise<Job[] | null> => {
  const res = await fetch(serverURI + "/jobs/");

  if (!res.ok) {
    const text = await res.text();
    console.log("ERROR fetching jobs:", text);
    return null;
  }

  const data = await res.json();

  let jobs: Job[] = [];

  data.jobs.forEach((j: any) => {
    jobs.push({
      id: j.id,
      user_id: j.user_id,
      title: j.title,
      type: j.type,
      location: j.location,
      company: { company_name: j.company },
      description: j.description,
      salary: { min: j.min_salary, max: j.max_salary },
      skills: j.skills,
      interested: j.interested,
      applied: j.applied,
      created: j.created,
    });
  });

  return jobs;
};

export const postJob = async (j: Job, user_id: string): Promise<Job | null> => {
  const res = await fetch(serverURI + "/jobs/", {
    method: "POST",
    headers: {},
    body: JSON.stringify({
      user_id: user_id,
      title: j.title,
      type: j.type,
      location: j.location,
      company: j.company.company_name,
      min_salary: j.salary.min,
      max_salary: j.salary.max,
      description: j.description,
      skills: j.skills,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.log("ERROR posting job:", text);
    return null;
  }

  const data = await res.json();

  j.id = data.id;
  j.created = data.created;

  return j;
};
