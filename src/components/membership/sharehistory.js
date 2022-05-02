import React from "react";

class ShareHistory extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr className="border-r-4 border-l-4 border--4">
            <th>Member ID</th>
            <th>Member Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-r-4 border-l-4">
            <td>A178213</td>
            <td>Doe</td>
            <td>12/09/20</td>
            <td>500</td>
          </tr>
          <tr className="border-r-4 border-l-4">
            <td>A178213</td>
            <td>Doe</td>
            <td>12/09/20</td>
            <td>500</td>
          </tr>
          <tr className="border-r-4 border-l-4">
            <td>A178213</td>
            <td>Doe</td>
            <td>12/09/20</td>
            <td>500</td>
          </tr>
          <tr className="border-r-4 border-l-4">
            <td>A178213</td>
            <td>Doe</td>
            <td>12/09/20</td>
            <td>500</td>
          </tr>
          <tr className="border-r-4 border-l-4">
            <td>A178213</td>
            <td>Doe</td>
            <td>12/09/20</td>
            <td>500</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ShareHistory;