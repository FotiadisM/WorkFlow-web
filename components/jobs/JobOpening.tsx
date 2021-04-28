import React, { useState } from "react";
import { classNames } from "../../src/util";

const JobDetail: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <div>
      <h3 className="text-lg">{name}</h3>
      <hr className="mb-2" />
      {children}
    </div>
  );
};

interface JobOpeningPros {
  isOwner: boolean;
}

export default function JobOpening({ isOwner }: JobOpeningPros) {
  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div style={{ minWidth: "900px" }}>
      <div className="flex justify-between items-center space-x-44 p-2">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 mb-2">
            Back End Developer
          </h2>
          <div className="flex items-center space-x-3 text-gray-600">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="h-5 w-5 text-gray-400 mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
              </svg>
              Full time
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="h-5 w-5 text-gray-400 mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              Remote
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 text-gray-400"
                x-description="Heroicon name: solid/currency-dollar"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                ></path>
              </svg>
              120K-140K
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="mr-2 h-5 w-5 text-gray-400"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                />
                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
              </svg>
              Google
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center btn px-3 py-2 border border-gray-300 text-gray-800 hover:bg-gray-100"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="mr-2 h-5 w-5 text-gray-500"
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="mr-2 h-5 w-5 text-gray-500"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            )}
            View
          </button>
          {isOwner ? (
            <button
              className={classNames(
                edit
                  ? "bg-purple-800 text-white hover:bg-purple-600"
                  : "text-gray-800 hover:bg-gray-100",
                "flex items-center btn px-3 py-2 border border-gray-300"
              )}
              onClick={() => {
                setEdit((e) => !e);
                if (!open) {
                  setOpen(true);
                }
              }}
            >
              <svg
                className={classNames(
                  edit ? "" : "text-gray-500",
                  "mr-2 h-5 w-5"
                )}
                x-description="Heroicon name: solid/pencil"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
              Edit
            </button>
          ) : (
            <button className="btn px-3 py-2 text-white bg-purple-800 hover:bg-purple-700 active:bg-purple-900">
              I'm interested
            </button>
          )}
        </div>
      </div>
      {/* {open ? ( */}
      <div
        className={
          (classNames("pt-3 pb-4 pl-2 space-y-4"), open ? "" : "hidden")
        }
      >
        <JobDetail name={"Description"}>
          <p className="text-gray-700 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </JobDetail>
        <JobDetail name={"Prefered Skills"}>
          <div className="flex space-x-2">
            {["C", "C++", "Go", "Python"].map((i) => (
              <div className="py-1 px-2 bg-gray-200 rounded-md">{i}</div>
            ))}
          </div>
        </JobDetail>
      </div>
      {/* ) : null} */}
    </div>
  );
}
