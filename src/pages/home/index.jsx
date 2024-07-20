import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Enter Room Code
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Room ID"
                required
                onChange={(e) => setRoomCode(e.target.value)}
                value={roomCode}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Enter Room
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomePage;
