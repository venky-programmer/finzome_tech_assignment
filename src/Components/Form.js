import React, { useState } from "react";

const Form = ({ addData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [weekdays, setWeekdays] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform Valiadtion
    if (
      !name ||
      !email ||
      !contact ||
      !weekdays.length === 0 ||
      !gender ||
      !dob
    ) {
      setError("All fields are required");
      // alert("All fields are required");
      return;
    }

    // Add data to the table
    addData({ name, email, contact, weekdays, gender, dob });

    // Reset form and error
    setName("");
    setEmail("");
    setContact("");
    setWeekdays([]);
    setGender("");
    setDob("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
        ></input>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email name"
        ></input>
      </div>
      <div>
        <label>Contact:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter contact number"
        />
      </div>
      <div>
        {/* <label>Weekdays</label>
        <label key={day}>
          <input
            type="checkbox"
            checked={weekdays.includes(day)}
            onChange={() =>
              setWeekdays((weekdays) => {
                if (weekdays.includes(day)) {
                  return weekdays.filter((d) => d !== day);
                } else {
                  return [...weekdays, day];
                }
              })
            }
          />
          {day}
        </label> */}
        {/*  Rendering checkboxes for each day */}
        <label>Weekdays:</label>
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={weekdays.includes(day)}
              onChange={() =>
                setWeekdays((prevWeekdays) => {
                  if (prevWeekdays.includes(day)) {
                    return prevWeekdays.filter((d) => d !== day);
                  } else {
                    return [...prevWeekdays, day];
                  }
                })
              }
            />
            {day}
          </label>
        ))}
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={() => setGender("Male")}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={() => setGender("Female")}
          />
          Female
        </label>
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add Data</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Form;
