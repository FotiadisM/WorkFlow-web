import { AuthRoute, useAuth } from "@/components/auth/AuthRoute";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Settings() {
  const auth = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    f_name: auth?.user?.f_name,
    l_name: auth?.user?.l_name,
    email: auth?.user?.email,
    company: auth?.user?.company,
    position: auth?.user?.position,
  });

  const onCancel = () => {
    setForm({
      f_name: auth?.user?.f_name,
      l_name: auth?.user?.l_name,
      email: auth?.user?.email,
      company: auth?.user?.company,
      position: auth?.user?.position,
    });
  };

  const onUpdate = () => {
    auth?.setUser((u) => {
      if (u === null) {
        return u;
      }

      return {
        ...u,
        f_name: form.f_name!,
        l_name: form.l_name!,
        email: form.email!,
        company: form.company!,
        position: form.position!,
      };
    });
    window.alert("Done!");
    router.push("/home");
  };

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
                  value={form.f_name}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, f_name: e.target.value }));
                  }}
                />
              </div>
              <div>
                <label className="block text-xl text-gray-800">
                  Last name:
                </label>
                <input
                  type="text"
                  className="py-2 px-3 w-full border rounded-md"
                  value={form.l_name}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, l_name: e.target.value }));
                  }}
                />
              </div>
              <div>
                <label className="block text-xl text-gray-800">Email:</label>
                <input
                  type="email"
                  className="py-2 px-3 w-full border rounded-md"
                  value={form.email}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, email: e.target.value }));
                  }}
                />
              </div>
              <div>
                <label className="block text-xl text-gray-800">Company:</label>
                <input
                  type="text"
                  className="py-2 px-3 w-full border rounded-md"
                  value={form.company}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, company: e.target.value }));
                  }}
                />
              </div>
              <div>
                <label className="block text-xl text-gray-800">Position</label>
                <input
                  type="text"
                  className="py-2 px-3 w-full border rounded-md"
                  value={form.position}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, position: e.target.value }));
                  }}
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
                <button
                  className="btn px-3 py-2 border rounded-md border-purple-800 text-purple-800"
                  onClick={onCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn px-3 py-2 bg-red-600 text-white"
                  onClick={onUpdate}
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
