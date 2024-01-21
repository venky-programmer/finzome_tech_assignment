import React from "react";

const Table = ({ data, editRow, deleteRow }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Weekdays</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.serialNumber}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.contact}</td>
            <td>{row.weekdays.join(", ")}</td>
            <td>{row.gender}</td>
            <td>{row.dob}</td>
            <td>
              <button onClick={() => editRow(row)}>Edit</button>
              <button onClick={() => deleteRow(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
