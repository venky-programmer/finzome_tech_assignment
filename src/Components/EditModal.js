// import React, { useState, useEffect } from "react";

// const EditModal = ({ rowData, updateRow, closeModal }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [weekdays, setWeekdays] = useState("");
//   const [gender, setGender] = useState("");
//   const [dob, setDob] = useState("");
//   const error = "";

//   useEffect(() => {
//     setName(rowData.name);
//     setEmail(rowData.email);
//     setContact(rowData.contact);
//     setWeekdays(rowData.weekdays);
//     setGender(rowData.gender);
//     setDob(rowData.gender);
//   }, [rowData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Update the row
//     updateRow({ ...rowData, name, email, contact, weekdays, gender, dob });

//     // Close the modal
//     closeModal();
//   };

//   return (
//     <div>
//       <h2>Edit Row</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label>Contact:</label>
//           <input
//             type="text"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//           />
//         </div>
//         <div>
//           {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
//             <label key={day}>
//               <input
//                 type="checkbox"
//                 checked={weekdays.includes(day)}
//                 onChange={() =>
//                   setWeekdays((prevWeekdays) => {
//                     if (prevWeekdays.includes(day)) {
//                       return prevWeekdays.filter((d) => d !== day);
//                     } else {
//                       return [...prevWeekdays, day];
//                     }
//                   })
//                 }
//               />
//               {day}
//             </label>
//           ))}
//         </div>
//         <div>
//           <label>
//             <input
//               type="radio"
//               value="Male"
//               checked={gender === "Male"}
//               onChange={() => setGender("Male")}
//             />
//             Male
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="Female"
//               checked={gender === "Female"}
//               onChange={() => setGender("Female")}
//             />
//             Female
//           </label>
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//           />
//         </div>
//         <div>
//           <button type="submit">Add Data</button>
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <div>
//           <button type="submit">Update</button>
//           <button onClick={closeModal}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditModal;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// EditModal.js

import React, { useState, useEffect } from "react";
import "./EditModal.css"; // Import the CSS file for styling

const EditModal = ({ rowData, updateRow, closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [weekdays, setWeekdays] = useState([]);
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const error = "";

  useEffect(() => {
    setName(rowData.name);
    setEmail(rowData.email);
    setContact(rowData.contact);
    setWeekdays(rowData.weekdays);
    setGender(rowData.gender);
    setDob(rowData.dob);
  }, [rowData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the row
    updateRow({ ...rowData, name, email, contact, weekdays, gender, dob });

    // Close the modal
    closeModal();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>Edit Row</h2>
        <form onSubmit={handleSubmit}>
          {/* ... (your existing form code) */}
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Contact:</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div>
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button type="submit">Add Data</button>
            <button type="submit">Update</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div></div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
