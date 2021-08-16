import { useEffect, useState } from "react";
import JobOpening from "@/components/jobs/JobOpening";
import Navbar from "@/components/navbar/Navbar";
import { classNames } from "@/src/util";

interface Job {
  id: string;
  user_id: string;
  title: string;
  type: "full_time" | "part_time" | "internship";
  location: string;
  company: {
    company_id: string;
    company_name: string;
  };
  salary: {
    min: number;
    max: number;
  };
  description: string;
  skills: string[];
}

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
];

const dummyInterestedJobs: Job[] = [
  {
    id: "0",
    user_id: "1",
    title: "Interested Job Title",
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
    title: "Interested Job Title 2",
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
];

const dummyUserJobs: Job[] = [
  {
    id: "2",
    user_id: "1",
    title: "User Jobs Title",
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

const sideBar: { name: string }[] = [
  { name: "Career Opportunities " },
  { name: "Interested in" },
  { name: "My Job Postings" },
];

export default function Jobs() {
  const [curPage, setCurPage] = useState<string>(sideBar[0].name);
  const [currJobs, setCurrJobs] = useState<Job[]>([]);
  const [interestedJobs, setInterestedJobs] = useState<Job[]>([]);
  const [searchJobs, setSearchJobs] = useState<Job[]>([]);
  const [userJobs, setUserJobs] = useState<Job[]>([]);

  const onButtonPress = (
    job_id: string,
    buttonType: "interested" | "edit" | "default"
  ) => {
    switch (buttonType) {
      case "interested":
        setInterestedJobs((old) => old.filter((j) => job_id !== j.id));
        break;
      case "edit":
        break;
      default:
        for (let j of searchJobs) {
          if (job_id === j.id) {
            setInterestedJobs((o) => [j, ...o]);
          }
        }
    }
  };

  useEffect(() => {
    if (curPage === sideBar[0].name || curPage === sideBar[1].name) {
      // fetch interested jobs
      setInterestedJobs(dummyInterestedJobs);
    }

    if (curPage === sideBar[0].name) {
      // fetch search jobs
      setSearchJobs(dummyJobs);
      setCurrJobs(dummyJobs);
    } else if (curPage === sideBar[1].name) {
      setCurrJobs(dummyInterestedJobs);
    } else {
      // fetch userJobs
      setUserJobs(dummyUserJobs);
      setCurrJobs(dummyUserJobs);
    }
  }, [curPage]);

  const evaluteButtonType = (
    job_id: string
  ): "interested" | "edit" | "default" => {
    if (curPage == sideBar[2].name) {
      return "edit";
    }

    for (let j of interestedJobs) {
      if (job_id === j.id) return "interested";
    }

    return "default";
  };

  return (
    <>
      <Navbar />
      <main className="flex justify-center mt-10">
        <div className="px-7 border-r space-y-1">
          {sideBar.map((i) => (
            <h1
              key={i.name}
              className={classNames(
                curPage === i.name
                  ? " bg-gray-200 text-purple-800"
                  : "text-gray-800 hover:bg-gray-100",
                "text-lg rounded-md px-2 py-3 cursor-pointer"
              )}
              onClick={() => setCurPage(i.name)}
            >
              {i.name}
            </h1>
          ))}
        </div>
        <div className="pl-20">
          <h1 className="text-4xl font-semibold">{curPage}</h1>
          <hr className="mt-2 mb-4 border shadow-md" />
          <div className="space-y-1">
            {currJobs.map((j, i) => {
              return (
                <>
                  {i !== 0 ? <hr /> : null}
                  <JobOpening
                    key={j.id}
                    job={j}
                    onButtonPress={onButtonPress}
                    buttonType={evaluteButtonType(j.id)}
                  />
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
