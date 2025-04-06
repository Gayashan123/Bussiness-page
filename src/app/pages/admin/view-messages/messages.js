"use client";

import React, { useEffect, useState } from "react";

export default function ViewMessages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const res = await fetch("/api/messages"); // Adjust API route as needed
      const data = await res.json();
      if (res.ok) {
        setMessages(data);
      } else {
        setMessages([]);
      }
    } catch (err) {
      console.error("Error loading messages:", err);
      setMessages([]);
    } finally {
      setIsLoading(false);
    }
  };

  const filtered = messages.filter((msg) =>
    msg.name?.toLowerCase().includes(search.toLowerCase()) ||
    msg.email?.toLowerCase().includes(search.toLowerCase()) ||
    msg.message?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">User Messages</h1>

      <div className="mb-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {isLoading ? (
        <div className="text-center mt-20">
          <div className="animate-spin border-t-4 border-indigo-500 border-solid w-12 h-12 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Loading messages...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-indigo-600 text-white text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Message</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((msg) => (
                  <tr key={msg._id} className="border-b hover:bg-gray-100 text-gray-800">
                    <td className="p-4">{msg.name}</td>
                    <td className="p-4">{msg.email}</td>
                    <td className="p-4">{msg.message}</td>
                    <td className="p-4">{new Date(msg.date).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-600">
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
