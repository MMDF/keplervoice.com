import React from "react";
import "./career.css";

function Careertable() {
  return (
    <div id="table-style">
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Full/Part Time</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Graphic Designer</td>
            <td>Internship</td>
            <td>
              <a href="#" alt="apply now">Apply Now</a>
            </td>
          </tr>
          <tr>
            <td>Backend Developer</td>
            <td>Full Time</td>
            <td>
              <a href="#" alt="apply now">Apply Now</a>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default Careertable;