import React from "react";

class Dividendpayable extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-left p-3 ml-2 text-xl">
                    Mananthavady Govt Employees Co-op Society Ltd W 288
                </h1>

                <div className="flex justify-between " >
                    <div>
                        <h3 className="p-3 ml-2">Divident Payment List</h3>
                    </div>
                    <div className="flex text-left p-3 ml-2">
                        <h3>
                            Report Date
                        </h3>
                        <h3 className="ml-2">
                            12/04/2022
                        </h3>
                    </div>
                </div>

                <div className="flex justify-between " >
                    <div className="flex text-left p-3 ml-2">
                        <h3>
                            Divident Payable List As on 23-04-22 to 23-04-22
                        </h3>
                        <h3 className="mr-2">
                            12/04/2022
                        </h3>
                    </div>
                    <div>
                        <h3 className="p-3 mr-2">page #1</h3>
                    </div>
                </div>

                <table className="border-4 w-full p-2 table-auto ">

                    <tr className="border-4">
                        <td>Sl No</td>
                        <td>Member NO</td>
                        <td>Member Name</td>
                        <td>Receipt</td>
                        <td>Payment</td>
                        <td>Balance</td>
                    </tr>

                    <tr className="">
                        <td className="font-bold text-lg text-left">A Class Share</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr className="">
                        <td>1</td>
                        <td>13212</td>
                        <td>Abhiram</td>
                        <td>499</td>
                        <td></td>
                        <td>499</td>
                    </tr>
                    <tr className="">
                        <td>2</td>
                        <td>182321</td>
                        <td>Roger</td>
                        <td >854</td>
                        <td></td>
                        <td>854</td>
                    </tr>
                    <tr className="">
                        <td>3</td>
                        <td>127223</td>
                        <td>Akshay</td>
                        <td>744</td>
                        <td></td>
                        <td>744</td>
                    </tr>
                    <tr className="">
                        <td>4</td>
                        <td>17121</td>
                        <td>Saurab</td>
                        <td>1999</td>
                        <td></td>
                        <td>1999</td>
                    </tr>


                </table>




            </div>
        )
    }
}

export default Dividendpayable;