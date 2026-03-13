import { useEffect, useState } from "react"
import type { Bowler } from "./types/Bowler"

function BowlerTable() {
  const [bowlers, setBowlers] = useState<Bowler[]>([])

  // Fetch bowlers from the API when the component mounts
    useEffect(() => {
    const fetchBowlers = async () => {
        const response = await fetch('https://localhost:5001/api/bowling');
        const data = await response.json();
        setBowlers(data);
        };
        fetchBowlers();
    }, []);

    // Render the table of bowlers
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        {bowlers.map((b, index) => (
          <tr key={index}>
            <td>
              {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
            </td>
            <td>{b.teamName}</td>
            <td>{b.bowlerAddress}</td>
            <td>{b.bowlerCity}</td>
            <td>{b.bowlerState}</td>
            <td>{b.bowlerZip}</td>
            <td>{b.bowlerPhoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BowlerTable