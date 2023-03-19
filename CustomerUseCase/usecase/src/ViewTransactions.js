import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export const ViewTransactions=()=>
{
    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
        <table className="table text-center ">
          <thead className="bg-light">
            <tr>
              <th scope="col">Transaction ID</th>
              <th scope="col">To</th>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
              <th scope="col">Mode</th>
              <th scope="col">Amount</th>
              <th scope="col">Balance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1234</th>
              <td>ganesh</td>
              <td>19-04-2002</td>
              <td>credit</td>
              <td>UPI</td>
              <td>400</td>
              <td>7000</td>
             
            </tr>
            <tr>
              <th scope="row">1234</th>
              <td>yuvaraj</td>
              <td>01-01-1999</td>
              <td>debit</td>
              <td>NEFT</td>
              <td>6700</td>
              <td>10500</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <Link className="btn btn-success mx-5" to={`/transaction`}>
            New Transaction
          </Link>
          <Link className="btn btn-secondary mx-5" to={`/account`}>
            Back to Home
          </Link>
        </div>
      </div>
    );
}