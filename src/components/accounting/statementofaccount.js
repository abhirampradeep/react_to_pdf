import React from 'react';
import './style.css'

class Statementaccount extends React.Component {
    render() {
        return (
            <div>
                <table className="w-full">
                    {/* header starts */}
                    <thead>
                        <tr>
                            <p className="content-block w-full">

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
                            </p>
                        </tr>
                    </thead>
                    {/* header ends */}
                    <tbody>
                        {/* user account starts */}
                        <tr>
                            <div className="flex justify-start" >
                                <div className="flex text-left p-3 ml-2">
                                    <h3>
                                        Account NO:
                                    </h3>
                                    <h3 className="ml-2">
                                        85
                                    </h3>
                                </div>

                                <div className="flex text-left p-3 ml-2">
                                    <h3>
                                        Name:
                                    </h3>
                                    <h3 className="ml-2">
                                        Mr.Abhiram
                                    </h3>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div className="flex justify-end" >
                                <div className="flex text-left p-3 ml-2">
                                    <h3>
                                        Opening Balance
                                    </h3>
                                    <h3 className="ml-2 ">
                                        117.00
                                    </h3>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <table className="border-4 w-full p-1 table-auto ">

                                <thead>

                                    <tr className="border-4">
                                        <th className="border-4">Date</th>
                                        <th className="border-4">Voucher NO</th>
                                        <th className="border-4">A/C</th>
                                        <th className="border-4">Narration</th>
                                        <th className="text-right">Cheque</th>
                                        <th className="text-left">Details</th>
                                        <th className="border-4">Deposits</th>
                                        <th className="border-4">Withdrawal</th>
                                        <th className="border-4">Balance</th>
                                    </tr>
                                </thead>

                                <tr className="border-4">
                                    <td className="border-4">18/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">C</td>
                                    <td className="border-4">By cash</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4">22,170.00</td>
                                    <td className="border-4"></td>
                                    <td className="border-4">22,287.00</td>
                                </tr>

                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">C</td>
                                    <td className="border-4">To Loose Leaf</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>

                            </table>
                        </tr>
                        <tr>
                            <div className="flex justify-end" >
                                <div className="flex text-left p-3 ml-2 underline">
                                    <h3>
                                        Closing Balance
                                    </h3>
                                    <h3 className="ml-2 underline">
                                        17,287.00
                                    </h3>
                                </div>
                            </div>
                        </tr>
                        {/* member accounts ends */}


                        {/* new member starts */}
                        <tr>
                            <div className="flex justify-start" >
                                <div className="flex text-left p-3 ml-2">
                                    <h3>
                                        Account NO:
                                    </h3>
                                    <h3 className="ml-2">
                                        85
                                    </h3>
                                </div>

                                <div className="flex text-left p-3 ml-2">
                                    <h3>
                                        Name:
                                    </h3>
                                    <h3 className="ml-2">
                                        Mr.Abhiram
                                    </h3>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div className="flex justify-end" >
                                <div className="flex text-left p-3 ml-2">
                                    <h3>
                                        Opening Balance
                                    </h3>
                                    <h3 className="ml-2 ">
                                        117.00
                                    </h3>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <table className="border-4 w-full p-1 table-auto ">

                                <tr className="border-4">
                                    <td className="border-4">Date</td>
                                    <td className="border-4">Voucher NO</td>
                                    <td className="border-4">A/C</td>
                                    <td className="border-4">Narration</td>
                                    <td className="text-right">Cheque</td>
                                    <td className="text-left">Details</td>
                                    <td className="border-4">Deposits</td>
                                    <td className="border-4">Withdrawal</td>
                                    <td className="border-4">Balance</td>
                                </tr>

                                <tr className="border-4">
                                    <td className="border-4">18/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">C</td>
                                    <td className="border-4">By cash</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4">22,170.00</td>
                                    <td className="border-4"></td>
                                    <td className="border-4">22,287.00</td>
                                </tr>

                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">C</td>
                                    <td className="border-4">To Loose Leaf</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>

                            </table>
                        </tr>
                        <tr>
                            <div className="flex justify-end" >
                                <div className="flex text-left p-3 ml-2 underline">
                                    <h3>
                                        Closing Balance
                                    </h3>
                                    <h3 className="ml-2 underline">
                                        17,287.00
                                    </h3>
                                </div>
                            </div>
                        </tr>
                        {/* member account ends */}

                        {/* new member starts */}
                        <tr>
                            <div className="flex justify-start" >
                                <div className="flex text-left p-3 ml-2">
                                    <h3>
                                        Account NO:
                                    </h3>
                                    <h3 className="ml-2">
                                        85
                                    </h3>
                                </div>

                                <div className="flex text-left p-3 ml-2">
                                    <h3>
                                        Name:
                                    </h3>
                                    <h3 className="ml-2">
                                        Sr. N G O Union
                                    </h3>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div className="flex justify-end" >
                                <div className="flex text-left p-3 ml-2">
                                    <h3>
                                        Opening Balance
                                    </h3>
                                    <h3 className="ml-2 ">
                                        601,266.00
                                    </h3>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <table className="border-4 w-full p-1 table-auto ">

                                <thead>
                                    <tr className="border-4">
                                        <th className="border-4">Date</th>
                                        <th className="border-4">Voucher NO</th>
                                        <th className="border-4">A/C</th>
                                        <th className="border-4">Narration</th>
                                        <th className="text-right">Cheque</th>
                                        <th className="text-left">Details</th>
                                        <th className="border-4">Deposits</th>
                                        <th className="border-4">Withdrawal</th>
                                        <th className="border-4">Balance</th>
                                    </tr>
                                </thead>

                                <tr className="border-4">
                                    <td className="border-4">18/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By cash TLK ALIF</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4">22,170.00</td>
                                    <td className="border-4"></td>
                                    <td className="border-4">22,287.00</td>
                                </tr>

                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash okk bie </td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">18/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By cash TLK ALIF</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4">22,170.00</td>
                                    <td className="border-4"></td>
                                    <td className="border-4">22,287.00</td>
                                </tr>

                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>
                                <tr className="border-4">
                                    <td className="border-4">19/04/2022</td>
                                    <td className="border-4">234</td>
                                    <td className="border-4">A</td>
                                    <td className="border-4">By Cash FRST PREETHI</td>
                                    <td className="text-right border-4"></td>
                                    <td className="text-left border-4"></td>
                                    <td className="border-4"></td>
                                    <td className="border-4">5000</td>
                                    <td className="border-4">17,287.00</td>
                                </tr>

                            </table>
                        </tr>
                        <tr>
                            <div className="flex justify-end" >
                                <div className="flex text-left p-3 ml-2 underline">
                                    <h3>
                                        Closing Balance
                                    </h3>
                                    <h3 className="ml-2 underline">
                                        17,287.00
                                    </h3>
                                </div>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Statementaccount;