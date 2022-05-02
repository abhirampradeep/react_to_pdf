import React from "react";


class Accounthead extends React.Component {
    render() {
        return (
            <div>

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
                            List Of Account Head
                        </h3>

                    </div>
                    <div>
                        <h3 className="p-3 mr-2">page #1</h3>
                    </div>
                </div>


                <table className="border-4 w-full p-1 table-auto ">

                    <tr className="border-4">
                        <td>Sl NO</td>
                        <td>Code</td>
                        <td>Head Of Account</td>
                        <td>Order</td>
                        <td>System A/C</td>
                        <td className="border-r-4">Bank A/C</td>
                    </tr>

                    <tr className="">
                        <td className="font-bold text-lg text-left">Group</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="border-r-4"> </td>
                    </tr>

                    <tr className="">
                        <td>1</td>
                        <td>108</td>
                        <td></td>
                        <td></td>
                        <td>No</td>
                        <td className="border-r-4">No</td>
                    </tr>

                    <tr className="">
                        <td className="font-bold text-lg text-left">Group: SHARE</td>
                        <td></td>
                        <td></td>
                        <td>1</td>
                        <td></td>
                        <td className="border-r-4"></td>
                    </tr>
                    <tr className="">
                        <td>2</td>
                        <td>1</td>
                        <td>SHARE A CLASS</td>
                        <td>1</td>
                        <td>No</td>
                        <td className="border-r-4">No</td>
                    </tr>
                    <tr className="">
                        <td>3</td>
                        <td>2</td>
                        <td>SHARE B CLASS</td>
                        <td>2</td>
                        <td>No</td>
                        <td className="border-r-4">No</td>
                    </tr>
                    <tr className="">
                        <td>4</td>
                        <td>3</td>
                        <td>SHARE C CLASS</td>
                        <td>3</td>
                        <td>No</td>
                        <td className="border-r-4">No</td>
                    </tr>

                    <tr className="">
                        <td className="font-bold text-lg text-left">Group:DEPOSITS</td>
                        <td></td>
                        <td></td>
                        <td>2</td>
                        <td></td>
                        <td className="border-r-4"></td>
                    </tr>
                    <tr className="">
                        <td>5</td>
                        <td>10</td>
                        <td>FIXED DEPOSIT</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr className="">
                        <td>6</td>
                        <td>122</td>
                        <td>RECURRING DEPOSIT</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr className="">
                        <td>7</td>
                        <td>9</td>
                        <td>SAVINGS BANK</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr className="">
                        <td>8</td>
                        <td>24</td>
                        <td>STAFF SECURITY DEPOSIT</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>

                    <tr className="">
                        <td>8</td>
                        <td>24</td>
                        <td>STAFF SECURITY DEPOSIT</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr className="">
                        <td>9</td>
                        <td>59</td>
                        <td>STAFF P/F CONTRIBUTION</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr className="">
                        <td>10</td>
                        <td>59</td>
                        <td>STAFF P/F CONTRIBUTION</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr className="">
                        <td>11</td>
                        <td>60</td>
                        <td>STAFF WELFARE FUND</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>



                    {/* gds starts from here */}
                    <tr className="">
                        <td className="font-bold text-lg text-left">Group:GDS</td>
                        <td></td>
                        <td></td>
                        <td>13</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="">
                        <td>12</td>
                        <td>13</td>
                        <td>GDS 1/09</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr className="">
                        <td>12</td>
                        <td>13</td>
                        <td>GDS 1/09</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                 
                    <tr className="">
                        <td>12</td>
                        <td>13</td>
                        <td>GDS 1/09</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr className="">
                        <td>12</td>
                        <td>13</td>
                        <td>GDS 1/09</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr className="">
                        <td>12</td>
                        <td>13</td>
                        <td>GDS 1/09</td>
                        <td></td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                 
                 


                </table>



            </div>
        )
    }
}

export default Accounthead;