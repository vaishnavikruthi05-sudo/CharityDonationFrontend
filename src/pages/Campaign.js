import React, { useState, useEffect } from "react";
import axios from "axios";

function Campaign() {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [campaigns, setCampaigns] = useState([]);

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/campaigns",
        { title, goal },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Campaign created!");
      fetchCampaigns();
    } catch (err) {
      alert("Error creating campaign");
    }
  };

  const fetchCampaigns = async () => {
    try {
      const res = await axios.get("http://localhost:5000/campaigns");
      setCampaigns(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Campaigns</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} /><br/>
        <input placeholder="Goal Amount" onChange={(e) => setGoal(e.target.value)} /><br/>
        <button type="submit">Create Campaign</button>
      </form>

      <ul>
        {campaigns.map((c) => (
          <li key={c._id}>{c.title} — ₹{c.goal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Campaign;
