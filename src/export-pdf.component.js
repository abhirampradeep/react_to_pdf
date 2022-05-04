import React from 'react';
import ReactToPrint from 'react-to-print';
import Accounthead from './components/accounting/accounthead';
import Daybook from './components/accounting/daybook';
import Generallegder from './components/accounting/generalledger';
import Headofaccount from './components/accounting/headofaccount';
import Statementaccount from './components/accounting/statementofaccount';
import Dividendpayable from './components/dividend/dividendpayable';
import ShareHistory from './components/membership/sharehistory';
import TableComponent from './table.component';
 
class ExportPdfComponent extends React.Component {
     
    render() {
      return (
        <div>

           {/* <h1 className=" text-center">Transaction History</h1>  */}

          <Statementaccount ref={(response) => (this.componentRef = response)} />
          
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary mt-4">Print to PDF!</button>}
          />
        </div>
      );
    }
}
 
export default ExportPdfComponent;