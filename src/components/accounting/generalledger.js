import React from "react";
import './style.css'

class Generallegder extends React.Component {
    render() {
        return (
            <div>
                <table className="w-full">
                    <thead>
                        <h1 className="text-left p-3 ml-2 text-xl">
                            Mananthavady Govt Employees Co-op Society Ltd W 288
                        </h1>

                        <div className="flex justify-end text-right mr-2">
                            <h3>
                                Report Date
                            </h3>
                            <h3 className="mr-2">
                                19/04/2022
                            </h3>
                        </div>

                        <div className="flex justify-between" >
                            <div className="flex text-left p-3 ml-2 text-lg font-bold">
                                <h3>
                                    General Ledger for
                                </h3>
                                <h3 className="ml-2">
                                    12/04/2022
                                </h3>
                                <h3 className="ml-2">
                                    to
                                </h3>
                                <h3 className="ml-2">
                                    14/04/2022
                                </h3>
                            </div>
                            <div>
                                <h3 className="p-3 mr-2">page #1</h3>
                            </div>
                        </div>
                    </thead>
                    <tbody>
                        <tr>
                            <table className="border-4 w-full p-1 table-auto ">
                                <tr>
                                    <th className="col-span-4 text-2xl text-center" colSpan="6">MISCELLANEOUS EXPENSE</th>
                                </tr>
                                <tr className="border-4">
                                    <td>Date</td>
                                    <td>Receipt</td>
                                    <td>Progressive Receipt</td>
                                    <td>Disbursement</td>
                                    <td>Progressive Disbursement</td>
                                    <td>Balance</td>
                                </tr>

                                <tr className="">
                                    <td className="text-lg font-bold text-left underline">Head Office</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="">
                                    <td ></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>

                                <tr className="">
                                    <td >19/04/2022</td>
                                    <td>4000</td>
                                    <td> 22000</td>
                                    <td></td>
                                    <td> 160,152.00</td>
                                    <td>142,152.00DB</td>
                                </tr>

                                <tr className="">
                                    <td >20/04/2022</td>
                                    <td></td>
                                    <td> 22000</td>
                                    <td>4500</td>
                                    <td> 164,652.00</td>
                                    <td>142,652.00DB</td>
                                </tr>

                                <tr className="">
                                    <td className="text-lg font-bold  ">Total</td>
                                    <td className="font-bold underline">4000</td>
                                    <td> </td>
                                    <td className="font-bold underline">4500</td>
                                    <td></td>
                                    <td>142,152.00DB</td>
                                </tr>


                                {/* end of MISCELLANEOUS */}


                                {/* start of rent */}

                                <tr>
                                    <th className="col-span-4 text-2xl text-center border-4" colSpan="6">RENT</th>
                                </tr>
                                <tr className="border-4">
                                    <td>Date</td>
                                    <td>Receipt</td>
                                    <td>Progressive Receipt</td>
                                    <td>Disbursement</td>
                                    <td>Progressive Disbursement</td>
                                    <td>Balance</td>
                                </tr>

                                <tr className="">
                                    <td className="text-lg font-bold text-left underline">Head Office</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="">
                                    <td ></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>
                                <tr className="">
                                    <td className="text-lg font-bold  ">Total</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>

                                {/* end of rent */}



                                {/* start of ADVERTISEMENT */}
                                <tr>
                                    <th className="col-span-4 text-2xl text-center border-4" colSpan="6">ADVERTISEMENT</th>
                                </tr>
                                <tr className="border-4">
                                    <td>Date</td>
                                    <td>Receipt</td>
                                    <td>Progressive Receipt</td>
                                    <td>Disbursement</td>
                                    <td>Progressive Disbursement</td>
                                    <td>Balance</td>
                                </tr>

                                <tr className="">
                                    <td className="text-lg font-bold text-left underline">Head Office</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="">
                                    <td ></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>
                                <tr className="">
                                    <td className="text-lg font-bold  ">Total</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>
                                {/* end of ADVERTISEMENT */}


                                {/* start of electricity */}

                                <tr>
                                    <th className="col-span-4 text-2xl text-center border-4" colSpan="6">ELECTRICITY CHARGE</th>
                                </tr>
                                <tr className="border-4">
                                    <td>Date</td>
                                    <td>Receipt</td>
                                    <td>Progressive Receipt</td>
                                    <td>Disbursement</td>
                                    <td>Progressive Disbursement</td>
                                    <td>Balance</td>
                                </tr>

                                <tr className="">
                                    <td className="text-lg font-bold text-left underline">Head Office</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="">
                                    <td ></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>
                                <tr className="">
                                    <td className="text-lg font-bold  ">Total</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>

                                {/* end of electricity */}

                                {/* start of SALARY */}

                                <tr>
                                    <th className="col-span-4 text-2xl text-center border-4" colSpan="6">SALARY</th>
                                </tr>
                                <tr className="border-4">
                                    <td>Date</td>
                                    <td>Receipt</td>
                                    <td>Progressive Receipt</td>
                                    <td>Disbursement</td>
                                    <td>Progressive Disbursement</td>
                                    <td>Balance</td>
                                </tr>

                                <tr className="">
                                    <td className="text-lg font-bold text-left underline">Head Office</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="">
                                    <td ></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>
                                <tr className="">
                                    <td className="text-lg font-bold  ">Total</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>


                                {/* start of printing */}

                                <tr>
                                    <th className="col-span-4 text-2xl text-center border-4" colSpan="6">PRINTING AND STATIONARY</th>
                                </tr>
                                <tr className="border-4">
                                    <td>Date</td>
                                    <td>Receipt</td>
                                    <td>Progressive Receipt</td>
                                    <td>Disbursement</td>
                                    <td>Progressive Disbursement</td>
                                    <td>Balance</td>
                                </tr>

                                <tr className="">
                                    <td className="text-lg font-bold text-left underline">Head Office</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="">
                                    <td ></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>
                                <tr className="">
                                    <td className="text-lg font-bold  ">Total</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>

                                {/* start of POSTAGE AND TELEPHONE */}

                                <tr>
                                    <th className="col-span-4 text-2xl text-center border-4" colSpan="6">PRINTING AND STATIONARY</th>
                                </tr>
                                <tr className="border-4">
                                    <td>Date</td>
                                    <td>Receipt</td>
                                    <td>Progressive Receipt</td>
                                    <td>Disbursement</td>
                                    <td>Progressive Disbursement</td>
                                    <td>Balance</td>
                                </tr>

                                <tr className="">
                                    <td className="text-lg font-bold text-left underline">Head Office</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                </tr>
                                <tr className="">
                                    <td ></td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>
                                <tr className="">
                                    <td className="text-lg font-bold  ">Total</td>
                                    <td></td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td>142,152.00DB</td>
                                </tr>

                                start of



                            </table>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Generallegder;