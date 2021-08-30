import { AuthRoute } from "@/components/auth/AuthRoute";
import Navbar from "@/components/navbar/Navbar";

export default function Settings() {
  return (
    <AuthRoute>
      <Navbar />
      <main className="py-10 flex justify-center">
        <div style={{ minWidth: "650px" }}>
          <h1 className="text-6xl text-gray-800 italic font-medium">
            Settings
          </h1>
          <hr className="mt-3" />
          <div className="mt-8">
            <h2 className="text-gray-600 font-medium text-3xl">Information</h2>
            <form
              className="px-10 mt-2 mb-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label className="block text-xl text-gray-800">
                  First name:
                </label>
                <input
                  type="text"
                  className="py-2 px-3 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-xl text-gray-800">
                  Last name:
                </label>
                <input
                  type="text"
                  className="py-2 px-3 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-xl text-gray-800">Email:</label>
                <input
                  type="email"
                  className="py-2 px-3 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-xl text-gray-800">Company:</label>
                <input
                  type="text"
                  className="py-2 px-3 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-xl text-gray-800">
                  Profile picture:
                </label>
                <input
                  type="file"
                  className="py-2 px-3 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-xl text-gray-800">Resume:</label>
                <input
                  type="file"
                  className="py-2 px-3 w-full border rounded-md"
                />
              </div>
              <div className="pt-5 flex justify-end items-center space-x-4">
                <button className="btn px-3 py-2 border rounded-md border-purple-800 text-purple-800">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn px-3 py-2 bg-red-600 text-white"
                >
                  Update Information
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8">
            <h2 className="text-gray-600 font-medium text-3xl mb-5">
              Danger zone
            </h2>
            <div className="px-10">
              <div className="flex items-center">
                <button className="btn px-3 py-2 bg-red-600 text-white">
                  Delete Account
                </button>
                <label className="text-gray-600 ml-4 text-lg">
                  Delete everyting, no way going back!
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AuthRoute>
  );
}
