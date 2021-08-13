import { useState } from "react";
import JobOpening from "@/components/jobs/JobOpening";
import Navbar from "@/components/navbar/Navbar";
import { classNames } from "@/src/util";

const sideBar: { name: string }[] = [
  { name: "Career Opportunities " },
  { name: "Interested in" },
  { name: "My Job Postings" },
];

export default function Jobs() {
  const [curPage, setCurPage] = useState<string>(sideBar[0].name);
  // const [navHeight, setNavHeight] = useState<number>(0);

  // const getHeight = (h: number) => {
  //   setNavHeight(h);
  // };

  // const [jobs, setJobs] = useState([]);

  return (
    <>
      <Navbar />
      <main
        className="flex justify-center mt-10"
        style={{ minHeight: "480px" }}
      >
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
            <JobOpening isOwner={curPage === "My Job Postings"} />
            <hr />
            <JobOpening isOwner={curPage === "My Job Postings"} />
          </div>
        </div>
      </main>
    </>
  );
}
