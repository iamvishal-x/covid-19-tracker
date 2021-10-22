import "../components/Table.css";
import numeral from "numeral";
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
              <strong>{numeral(cases).format("0,0")}</strong>
            </td>
          </tr>
        )
      )}
    </div>
  );
};

export default Table;
