import React from "react";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="flex flex-col items-center">
        <img
          src="/images/profile-placeholder.png"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold">John Doe</h2>
        <p className="text-gray-600">johndoe@example.com</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">About Me</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
          venenatis.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">My Music Preferences</h3>
        <ul className="list-disc list-inside">
          <li>Rock</li>
          <li>Jazz</li>
          <li>Classical</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
