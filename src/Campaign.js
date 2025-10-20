import React, { useState, useEffect } from "react";
import API from "../axiosConfig";

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goalAmount: "",
  });

  const fetchCampaigns = async () => {
    try {
      const res = await API.get("/api/campaigns");
      setCampaigns(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Login first!");

    try {
      await API.post("/api/campaigns", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Campaign created!");
      fetchCampaigns();
    } catch (err) {
      alert("Error creating campaign");
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Campaigns</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} /><br /><br />
        <input name="description" placeholder="Description" onChange={handleChange} /><br /><br />
        <input name="goalAmount" placeholder="Goal Amount (₹)" onChange={handleChange} /><br /><br />
        <button type="submit">Add Campaign</button>
      </form>

      <h3 style={{ marginTop: "40px" }}>All Campaigns:</h3>
      <ul style={{ listStyle: "none" }}>
        {campaigns.map((c) => (
          <li key={c._id}>
            <strong>{c.title}</strong> — {c.description} — ₹{c.goalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Campaign;

