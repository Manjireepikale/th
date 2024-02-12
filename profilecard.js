// src/ProfileCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      {user && (
        <>
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.location.city}, {user.location.country}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
