import React, { useEffect, useState } from "react";
import JobListItem from "@/components/jobs/JobListItem";
import Navbar from "@/components/navbar/Navbar";
import JobCreationForm from "@/components/jobs/JobCreationForm";
import { classNames } from "@/src/util";
import { Job, SideBarType } from "@/src/types/job";
import {
  fetchAllJobs,
  fetchUserAppliedJobs,
  fetchUserCreatedJobs,
  fetchUserInterestedJobs,
} from "@/src/api/jobs";
import { AuthRoute } from "@/components/auth/AuthRoute";

const sideBar: { name: string; type: SideBarType }[] = [
  { name: "Career Opportunities", type: SideBarType.SEARCH },
  { name: "Interested in", type: SideBarType.INTERESTED },
  { name: "Applied", type: SideBarType.APPLIED },
  { name: "My Job Postings", type: SideBarType.CREATE },
];

export default function Jobs() {
  const [curPage, setCurPage] = useState<number>(0);
  const changePage = (i: number) => {
    if (sideBar[i].type == SideBarType.SEARCH) {
      setCurPage(i);
      setCurrJobs(jobs.all);
    } else if (sideBar[i].type == SideBarType.INTERESTED) {
      setCurPage(i);
      setCurrJobs(jobs.interested);
    } else if (sideBar[i].type == SideBarType.APPLIED) {
      setCurPage(i);
      setCurrJobs(jobs.applied);
    } else {
      setCurPage(i);
      setCurrJobs(jobs.user);
    }
  };

  const [currJobs, setCurrJobs] = useState<Job[]>([]);
  const [jobs, setJobs] = useState<{
    all: Job[];
    interested: Job[];
    applied: Job[];
    user: Job[];
  }>({
    all: [],
    interested: [],
    applied: [],
    user: [],
  });

  useEffect(() => {
    (async function () {
      try {
        const [all, inte, appl, crt] = await Promise.all([
          fetchAllJobs(),
          fetchUserInterestedJobs(""),
          fetchUserAppliedJobs(""),
          fetchUserCreatedJobs(""),
        ]);
        setJobs({ all: all, interested: inte, applied: appl, user: crt });
        setCurrJobs(all);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const onJobButtonPress = (job: Job, action: SideBarType) => {
    if (action === SideBarType.CREATE) {
      setJobFormState({ open: true, mode: "edit", job: job });
      return;
    }

    // remove from interested
    if (action === SideBarType.SEARCH) {
      setJobs((old) => {
        old.interested.splice(old.interested.indexOf(job), 1);
        return { ...old };
      });
      return;
    }

    if (action === SideBarType.INTERESTED) {
      setJobs((old) => ({
        ...old,
        interested: [...old.interested, job],
      }));
      return;
    }
  };

  const [jobFormState, setJobFormState] = useState<{
    open: boolean;
    mode: "create" | "edit";
    job: Job | null;
  }>({
    open: false,
    mode: "create",
    job: null,
  });

  const onJobEdit = (j: Job) => {};

  const onJobCreate = (j: Job) => {
    j.id = "8";
    setJobFormState({ open: false, mode: "create", job: null });
    setJobs((o) => {
      setCurrJobs([...o.user, j]);
      return { ...o, all: [...o.all, j], user: [...o.user, j] };
    });
  };

  return (
    <AuthRoute>
      <Navbar />
      <main className="flex justify-center py-10 px-44">
        <div className="px-7 border-r space-y-1 flex flex-col">
          {sideBar.map((s, i) => (
            <button
              key={s.type}
              className={classNames(
                sideBar[curPage].type === sideBar[i].type
                  ? " bg-gray-200 text-purple-800"
                  : "text-gray-800 hover:bg-gray-100",
                "text-lg rounded-md px-2 py-3 cursor-pointer focus:outline-none"
              )}
              onClick={() => changePage(i)}
            >
              {s.name}
            </button>
          ))}
        </div>
        <div className="pl-20 flex-1">
          <div className="flex justify-between">
            <h1 className="text-4xl font-semibold">{sideBar[curPage].name}</h1>
            <button
              className={classNames(
                sideBar[curPage].type === SideBarType.CREATE ? "" : "invisible",
                "btn bg-purple-800 text-white rounded-md py-2 px-3 hover:bg-purple-900 flex justify-center items-center"
              )}
              onClick={() =>
                setJobFormState({ open: true, mode: "create", job: null })
              }
            >
              <div className="mr-2">Create new</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
              </svg>
            </button>
          </div>
          <hr className="mt-2 mb-4 border shadow-md" />
          <div className="space-y-1">
            {currJobs.map((j, i) => {
              return (
                <>
                  {i !== 0 ? <hr /> : null}
                  <JobListItem
                    key={j.id}
                    currJob={j}
                    jobs={jobs}
                    currPage={sideBar[curPage]}
                    onJobButtonPress={onJobButtonPress}
                  />
                </>
              );
            })}
          </div>
        </div>
      </main>

      <JobCreationForm
        {...{ jobFormState, setJobFormState, onJobEdit, onJobCreate }}
      />
    </AuthRoute>
  );
}
