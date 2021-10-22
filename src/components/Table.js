import "../components/Table.css";
const Table = ({ countries }) => {
  return (
    <div className="table">
      {countries.map(
        (
          { country, cases } //map countries then return country name and cases by using destructuring
        ) => (
          <tr>
            <td>{country}</td>
            <td>
              {" "}
              <strong>{cases}</strong>{" "}
            </td>
          </tr>
        )
      )}
    </div>
  );
};

export default Table;
