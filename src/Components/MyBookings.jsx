import React, { useEffect, useState } from "react";
import PageLoader from "./PageLoader";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My Bookings | Green-Nest";

    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:3000/bookings");
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className="min-h-screen bg-[#f0fdf4] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">My Bookings</h1>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings yet.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between"
              >
                {/* Text Info */}
                <div className="mr-4 flex-1">
                  <h2 className="text-xl font-bold text-gray-800">{booking.plantName}</h2>
                  <p className="text-gray-700">
                    <strong>User:</strong> {booking.userName} ({booking.userEmail})
                  </p>
                  <p className="text-gray-700">
                    <strong>Date:</strong> {new Date(booking.date).toLocaleString()}
                  </p>
                </div>

                {/* Plant Image on Right */}
                {booking.plantImage && (
                  <img
                    src={booking.plantImage}
                    alt={booking.plantName}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
