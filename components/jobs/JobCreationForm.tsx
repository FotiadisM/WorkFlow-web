import { Job } from "@/src/types/job";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface JobCreationFormProps {
  jobFormState: {
    open: boolean;
    mode: "create" | "edit";
    job: Job | null;
  };
  setJobFormState: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      mode: "create" | "edit";
      job: Job | null;
    }>
  >;
  onJobCreate: () => void;
  onJobEdit: () => void;
}

export default function JobCreationForm({
  jobFormState,
  setJobFormState,
  onJobCreate,
  onJobEdit,
}: JobCreationFormProps) {
  const onClose = () => {
    setJobFormState((o) => ({
      open: false,
      mode: o.mode,
      job: o.job,
    }));
  };

  return (
    <Transition appear show={jobFormState.open} as={Fragment}>
      <Dialog
        className="fixed inset-0 z-10 overflow-y-auto hello"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h2"
                className="text-2xl font-medium leading-6 text-gray-900"
              >
                {jobFormState.mode === "edit"
                  ? "Edit Job Details"
                  : "Create a new Job Opening"}
              </Dialog.Title>
              <hr className="my-2" />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-600">Job Title:</label>
                    <input
                      type="text"
                      placeholder="ex Senior Software Enginner"
                      className="py-2 px-3 w-full border rounded-md border-gray-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Company Name:</label>
                    <input
                      type="text"
                      placeholder="ex Workflow"
                      className="py-2 px-3 w-full border rounded-md border-gray-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Job Description:</label>
                    <textarea className="py-2 px-3 w-full border rounded-md border-gray-700 focus:outline-none"></textarea>
                  </div>
                  <div>
                    <label className="text-gray-600">Job Type:</label>
                    <input
                      type="text"
                      placeholder="ex Full-Time or Part-Time or Internship"
                      className="py-2 px-3 w-full border rounded-md border-gray-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Job Location:</label>
                    <input
                      type="text"
                      placeholder="ex Athens, Greece"
                      className="py-2 px-3 w-full border rounded-md border-gray-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">
                      Skills Required - (space separated words)
                    </label>
                    <input
                      type="text"
                      placeholder="Golang Docker Kubernetes helm git"
                      className="py-2 px-3 w-full border rounded-md border-gray-700 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-4 mt-8">
                  <button
                    type="button"
                    className="btn border-2 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white hover:border-0 py-2 px-3"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-purple-800 hover:bg-purple-900 text-white py-2 px-3"
                  >
                    Create Job Listing
                  </button>{" "}
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
