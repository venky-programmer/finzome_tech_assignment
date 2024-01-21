// import React, { useState } from "react";
// import Form from "./Components/Form";
// import Table from "./Components/Table";
// import EditModal from "./Components/EditModal";
// import "./App.css";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);

//   const addData = (rowData) => {
//     // Generate a unique id for the row
//     const id = new Date().getTime().toString();
//     setData((prevData) => [...prevData, { id, ...rowData }]);
//   };

//   const editRow = (row) => {
//     setSelectedRow(row);
//     setEditModalOpen(true);
//   };

//   const updateRow = (updatedRow) => {
//     setData((prevData) =>
//       prevData.map((row) => (row.id === updatedRow.id ? updatedRow : row))
//     );
//     setEditModalOpen(false);
//   };

//   const deleteRow = (id) => {
//     setData((prevData) => prevData.filter((row) => row.id !== id));
//   };

//   const closeModal = () => {
//     setEditModalOpen(false);
//     setSelectedRow(null);
//   };

//   return (
//     <div>
//       <h1>CRUD Web App</h1>
//       <Form addData={addData} />
//       <Table data={data} editRow={editRow} deleteRow={deleteRow} />
//       {editModalOpen && (
//         <EditModal
//           rowData={selectedRow}
//           updateRow={updateRow}
//           closeModal={closeModal}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
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

// App.js

import React, { useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import EditModal from "./Components/EditModal";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const addData = (rowData) => {
    // Generate a unique id for the row
    const id = new Date().getTime().toString();

    // Generate a serial number based on the current number of rows
    const serialNumber = data.length + 1;

    setData((prevData) => [...prevData, { id, serialNumber, ...rowData }]);
  };

  const editRow = (row) => {
    setSelectedRow(row);
    setEditModalOpen(true);
  };

  const updateRow = (updatedRow) => {
    setData((prevData) =>
      prevData.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );
    setEditModalOpen(false);
  };

  const deleteRow = (id) => {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const closeModal = () => {
    setEditModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <div>
      <h1>CRUD Web App</h1>
      <Form addData={addData} />
      <Table data={data} editRow={editRow} deleteRow={deleteRow} />
      {editModalOpen && (
        <EditModal
          rowData={selectedRow}
          updateRow={updateRow}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
