import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import PageLoader from "../Components/PageLoader";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(true); 
    const [editMode, setEditMode] = useState(false);
    const [updating, setUpdating] = useState(false); 

    useEffect(() => {
    document.title = "My Profile | Green-Nest";
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        setName(user.displayName);
        setPhoto(user.photoURL);
      }
      setLoading(false); 
    }, 1500);

    return () => clearTimeout(timer);
  }, [user]);

  const handleUpdate = async () => {
    if (!name.trim()) return;

    setUpdating(true); 
    await updateUserProfile({ displayName: name, photoURL: photo });
    setUpdating(false);
    toast.success("Profile updated successfully!"); 
    setEditMode(false); 

  };

  if (loading) {
    return <PageLoader />; 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4]">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">

        <div className="rounded-2xl shadow-xl overflow-hidden transform">
          <div className="flex flex-col lg:flex-row">

            <div className="lg:w-2/5 bg-linear-to-br from-green-600 to-emerald-600 p-8 flex flex-col items-center justify-center text-white">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-48 h-48 rounded-full border-4 border-white shadow-2xl object-cover mb-4"
              />
              <h2 className="text-2xl font-bold text-center mb-2">{user.displayName}</h2>
              <p className="text-green-100 text-center">{user.email}</p>
            </div>

            <div className="lg:w-3/5 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h3>
              
             {!editMode ? (
                <div>
                  <div className="mb-4">
                    <p className="text-gray-700">
                      <strong>Name:</strong> {user.displayName}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong> {user.email}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 break-all">
                      <strong>Photo URL:</strong> {user.photoURL}
                    </p>
                  </div>

                  <button
                    onClick={() => setEditMode(true)}
                    className="w-full bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                  >
                    Update Profile
                  </button>
              </div>
              ) : (
                <div>
                  <div className="transition-all duration-500 ease-in-out">
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Photo URL
                      </label>
                      <input
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={handleUpdate}
                        disabled={updating}
                        className={`flex-1 bg-linear-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 ${
                          updating && "opacity-70 cursor-not-allowed"
                        }`}
                      >
                        {updating ? "Saving.." : "Save Changes"}
                      </button>

                      <button
                        onClick={() => setEditMode(false)}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MyProfile;
