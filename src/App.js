import "./styles.css";
import React, { useState } from "react";
import pic from "./images/loginph.png";
import data from "./mock.json";

export default function App() {
  const [records, setRecords] = useState(data);
  return (
    <div className="App">
      <button id="fk" type="button" class="btn btn-primary" onClick="#">
        Edit
      </button>
      <br />
      <br />
      <center>
        <img src={pic} />
        <br />
        <center>
          <button id="fks" type="button" class="btn btn-secondary" onClick="#">
            Patient Name
          </button>
        </center>
      </center>

      <table className="tbx">
        <thead>
          <tr>
            <th>Patient Name: abc xyz</th>
            <th>Patient ID: 12fff</th>
            <th>Blood Group: A+</th>
          </tr>
        </thead>
      </table>
      {records.map((record) => (
        <table>
          <tr>
            <td>{record.labelname}</td>
            <td>{record.valuex}</td>
            <hr />
          </tr>
        </table>
      ))}
    </div>
  );
}
