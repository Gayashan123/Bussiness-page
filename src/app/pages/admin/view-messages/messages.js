"use client";

import React, { useEffect, useState } from "react";

export default function ViewMessages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  // Fetch messages when the component mounts
  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const res = await fetch("/api/view_messages");
      const data = await res.json();

      if (res.ok) {
        setMessages(data);
      } else {
        setMessages([]);
        setError("Failed to load messages.");
      }
    } catch (err) {
      console.error("Error loading messages:", err);
      setMessages([]);
      setError("An error occurred while fetching messages.");
    } finally {
      setIsLoading(false);
    }
  };

  // Filter messages based on search input
  const filteredMessages = messages.filter(
    (msg) =>
      msg.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      msg.email?.toLowerCase().includes(search.toLowerCase()) ||
      msg.message?.toLowerCase().includes(search.toLowerCase())
  );

  // Format date for display
  const formatDate = (dateString) => {
    // Check if dateString is valid
    if (!dateString) {
      return "Invalid Date";
    }
  
    // Attempt to create a Date object
    const date = new Date(dateString);
  
    // Check if the Date object is valid
    if (isNaN(date.getTime())) {
      return "Invalid Date"; // Return a default message if the date is invalid
    }
  
    // Return the formatted date (you can adjust the format as needed)
    return date.toLocaleString(); // You can also use date.toLocaleDateString() or custom format
  };
  
  // Delete message by ID
  const deleteMessage = async (id) => {
    try {
      const res = await fetch(`/api/view_messages`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        // Remove the deleted message from the state
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        setError("Failed to delete the message.");
      }
    } catch (err) {
      console.error("Error deleting message:", err);
      setError("An error occurred while deleting the message.");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">User Messages</h1>

      <div className="mb-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {isLoading ? (
        <div className="text-center mt-20">
          <div className="animate-spin border-t-4 border-indigo-500 border-solid w-12 h-12 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Loading messages...</p>
        </div>
      ) : error ? (
        <div className="text-center mt-6 text-red-500">
          <p className="text-lg">{error}</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-indigo-600 text-white text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Message</th>
               
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.length > 0 ? (
                filteredMessages.map((msg) => (
                  <tr key={msg._id} className="border-b hover:bg-gray-100 text-gray-800">
                    <td className="p-4">{msg.fullName}</td>
                    <td className="p-4">{msg.email}</td>
                    <td className="p-4">{msg.message}</td>
                   
                    <td className="p-4">
                      <button
                        onClick={() => deleteMessage(msg._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-600">
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
