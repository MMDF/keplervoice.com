import React from "react";
import "./career.css";
import { Link } from "react-router-dom";

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
            <Link to="https://forms.gle/hH2tkoBES5BAhTN28" target="_blank" className="font_apply"><p>Apply Now</p></Link>
            </td>
          </tr>
          <tr>
            <td>Backend Developer</td>
            <td>Full Time</td>
            <td>
            <Link to="https://forms.gle/hH2tkoBES5BAhTN28" target="_blank" className="font_apply"><p>Apply Now</p></Link>
            </td>
          </tr>
          <tr>
            <td>Human Resourse (HR)</td>
            <td>Full Time</td>
            <td>
            <Link to="https://forms.gle/hH2tkoBES5BAhTN28" target="_blank" className="font_apply"><p>Apply Now</p></Link>
            </td>
          </tr>
          <tr>
            <td>Data Analyst</td>
            <td>Full Time</td>
            <td>
            <Link to="https://forms.gle/hH2tkoBES5BAhTN28" target="_blank" className="font_apply"><p>Apply Now</p></Link>
            </td>
          </tr>
          <tr>
            <td>Customer Care Executive</td>
            <td>Full Time</td>
            <td>
            <Link to="https://forms.gle/hH2tkoBES5BAhTN28" target="_blank" className="font_apply"><p>Apply Now</p></Link>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default Careertable;