import React from "react";

class Daybook extends React.Component {
    render() {
        return (
            <div>
                <table className="w-full">
                <thead>
                <h1 className="text-left p-3 ml-2 text-lg">
                    Mananthavady Govt Employees Co-op Society Ltd W 288
                </h1>

                <div className="flex justify-end text-right mr-2">
                    <h3>
                        Report ON
                    </h3>
                    <h3 className="ml-2">
                        19/04/2022
                    </h3>
                </div>

                <div className="flex justify-between" >
                    <div className="flex text-left p-3 ml-2">
                        <h3>
                            Day Book On
                        </h3>
                        <h3 className="ml-2">
                            12/04/2022
                        </h3>
                    </div>
                    <div>
                        <h3 className="p-3 mr-2">page #1</h3>
                    </div>
                </div>
                </thead>
                <tbody>
                <table className="border-4 w-full p-1 table-auto ">
                    <tr>
                        <th className="col-span-4 text-2xl" colSpan="7">Receipt</th>
                    </tr>
                    <tr className="border-4">
                        <td>Voucher NO</td>
                        <td>Account NO</td>
                        <td>Party/Particulars</td>
                        <td>GlF</td>
                        <td>Cash</td>
                        <td>Transfer</td>
                        <td>Total</td>
                    </tr>
                    <tr className="mr-3">
                        <td className="text-xl text-left font-bold ml-14 underline">Deposit</td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr>
                        <td className="text-sm text-left  ">Savings Deposit</td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr>
                        <td>64543</td>
                        <td>Sb-17  by Cash</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr>
                        <td>64543</td>
                        <td>Sb-17  by Cash</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">10</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr>
                        <td>64543</td>
                        <td>Sb-17  by Cash</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr>
                        <td>64543</td>
                        <td>Sb-17  by Cash</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">500</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr className="border-collapse">
                        <td>64543</td>
                        <td>Sb-17  by Cash</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>
                    {/* total to be found from the above cash, transfer column */}
                    <tr className="border-4">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">500</td>
                        <td className="border-r-4 border-l-4">4010</td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>

                    {/* total ends here for sd */}


                    <tr className="mr-3">
                        <td className="text-xl text-left font-bold ml-14 underline">Loans</td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr>
                        <td className="text-sm text-left ">MTCL</td><td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>

                    </tr>
                    <tr>
                        <td>64543</td>
                        <td>MTCL-676</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr>
                        <td>64543</td>
                        <td>MTCL-112</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">10</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr className="">
                        <td>64543</td>
                        <td>MTCL-653</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    {/* total sum to be found for loan */}
                    <tr className="border-4">
                        <td ></td>
                        <td ></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">1000</td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>
                    {/* ends here to find the sum */}


                    <tr className="mr-3">
                        <td className="text-xl text-left font-bold ml-14 underline">Interest Recieved</td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr>
                        <td className="text-sm text-left ">Interest on Loan</td><td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>

                    </tr>
                    <tr>
                        <td>64543</td>
                        <td>MTCL-676</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr>
                        <td>64543</td>
                        <td>MTCL-112</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">10</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr className="">
                        <td>64543</td>
                        <td>MTCL-653</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    {/* total sum to be found for loan */}
                    <tr className="border-4">
                        <td ></td>
                        <td ></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">1000</td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>
                    {/* ends here to find the sum */}


                    <tr className="mr-3">
                        <td className="text-xl text-left font-bold ml-14 underline">Bank Accounts</td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr>
                        <td className="text-sm text-left ">Sb Account WDCBank Mananthavady day branch</td><td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>

                    </tr>
                    <tr>
                        <td>64543</td>
                        <td>MTCL-676</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr>
                        <td>64543</td>
                        <td>MTCL-112</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">10</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr className="">
                        <td>64543</td>
                        <td>MTCL-653</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    {/* total sum to be found for loan */}
                    <tr className="border-4">
                        <td ></td>
                        <td ></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">1000</td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>
                    {/* ends here to find the sum */}


                    <tr className="mr-3">
                        <td className="text-xl text-left font-bold ml-14 underline">GDCS</td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr>
                        <td className="text-lg text-left ">GDS 1/18</td><td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>

                    </tr>
                    <tr>
                        <td>64543</td>
                        <td>MTCL-676</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr>
                        <td>64543</td>
                        <td>MTCL-112</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">10</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr className="">
                        <td>64543</td>
                        <td>MTCL-653</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    {/* total sum to be found for loan */}
                    <tr className="border-t-4">
                        <td ></td>
                        <td ></td>
                        <td className=""></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">1000</td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>
                    {/* ends here to find the sum */}

                    {/* grand total page  */}

                    <tr className=" border-t-4">
                        <td ></td>
                        <td ></td>
                        <td className="text-right">Total</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">1000</td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>
                    {/* ends here to find the sum */}
                    <tr className="">
                        <td ></td>
                        <td ></td>
                        <td className="text-right">Opening Cash Balance</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">1000</td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>
                    {/* ends here to find the sum */}
                    <tr className="border-4">
                        <td ></td>
                        <td ></td>
                        <td className="text-right">Grand Total</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">1100000</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">21828</td>
                    </tr>
                    {/* ends here to find the sum */}




                    <tr className="mr-3">

                        <td className="text-xl text-left font-bold ml-14 underline">Loans</td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr>
                        <td className="text-sm text-left ">MTCL</td><td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>

                    </tr>
                    <tr>
                        <td>64543</td>
                        <td>MTCL-676</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr>
                        <td>64543</td>
                        <td>MTCL-112</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">10</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr className="">
                        <td>64543</td>
                        <td>MTCL-653</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    {/* total sum to be found for loan */}
                    <tr className="border-4">
                        <td ></td>
                        <td ></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">1000</td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>
                    {/* ends here to find the sum */}


                    <tr className="mr-3">
                        <td className="text-xl text-left font-bold ml-14 underline">Loans</td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>
                    <tr>
                        <td className="text-sm text-left ">MTCL</td><td></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>

                    </tr>
                    <tr>
                        <td>64543</td>
                        <td>MTCL-676</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr>
                        <td>64543</td>
                        <td>MTCL-112</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">10</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    <tr className="">
                        <td>64543</td>
                        <td>MTCL-653</td>
                        <td>By Mr.Arun Krishna</td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">2000</td>
                        <td className="border-r-4 border-l-4"></td>
                    </tr>

                    {/* total sum to be found for loan */}
                    <tr className="border-4">
                        <td ></td>
                        <td ></td>
                        <td></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4"></td>
                        <td className="border-r-4 border-l-4">1000</td>
                        <td className="border-r-4 border-l-4">300</td>
                    </tr>
                    {/* ends here to find the sum */}





                </table>
                </tbody>
                </table>










            </div>

        )
    }

}

export default Daybook;