import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import PageLoader from "../Components/PageLoader";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(true); 
  
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

    setLoading(true); 
    await updateUserProfile({ displayName: name, photoURL: photo });
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />; 
  }

  return (
    <div className="min-h-screen bg-gradient-to-br py-30 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl shadow-xl overflow-hidden transform">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-gradient-to-br from-green-600 to-emerald-600 p-8 flex flex-col items-center justify-center text-white">
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Photo URL</label>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <button
                onClick={handleUpdate}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
