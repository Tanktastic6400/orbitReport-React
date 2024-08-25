import './Table.css';

const Table = ({ sat }) => {
  return (
    <table>
      <thead >
        <tr className="tableHeaders">
          <th id="th1">Name</th>
          <th id="th2">Type of Satellite</th>
          <th id="th3"> Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {sat.map((data, id) => {
          return (
            <div>
              <tr className="tableData" key={id}>
                <td headers="th1">{data.name}</td>

                <td headers="th2">{data.type}</td>


                <td headers="th3">{data.launchDate}</td>


                <td>{data.operational ? "active" : "inactive"}</td>
              </tr>
            </div>
          );
        })}

      </tbody>
    </table>
  );
};


export default Table;