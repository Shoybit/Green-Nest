import React, { useEffect, useState } from "react";
import PageLoader from "./PageLoader";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';

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

  // Delete with SweetAlert2
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setBookings(prev => prev.filter(b => b._id !== id));
          Swal.fire('Deleted!', 'Your booking has been deleted.', 'success');
        } else {
          Swal.fire('Error!', 'Failed to delete booking.', 'error');
        }
      } catch (error) {
        console.error(error);
        Swal.fire('Error!', 'Something went wrong!', 'error');
      }
    }
  };

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
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >

                 {/* Plant Image */}
                {booking.plantImage && (
                  <img
                    src={booking.plantImage}
                    alt={booking.plantName}
                    className="w-full max-w-[120px] h-30 object-cover rounded-lg"
                  />
                )}
                {/* Text Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800">{booking.plantName}</h2>
                  <p className="text-gray-700">
                    <strong>User:</strong> {booking.userName} 
                  </p>
                  <p>
                    <strong>Email:</strong> {booking.userEmail} 
                  </p>
                  <p className="text-gray-700">
                    <strong>Date:</strong> {new Date(booking.date).toLocaleString()}
                  </p>
                </div>



                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 "
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
