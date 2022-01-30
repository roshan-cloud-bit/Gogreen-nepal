import React, {Component} from "react";
import '../assets/css/List.css';

class List extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h2>Price Table</h2>
                <table>
                    <tr className="listTr">
                        <th className="listTable">Items</th>
                        <th className="listTable">Amount</th>
                    </tr>
                    <tr className="listTr">
                        <td className="listTable">plastic product</td>
                        <td className="listTable">Rs 8 per/kg</td>
                    </tr>
                    <tr className="listTr">
                        <td className="listTable">waste organic product(food,vegetables)</td>
                        <td className="listTable">Rs 2 per/kg</td>
                    </tr>
                    <tr className="listTr">
                        <td className="listTable">Fertilizers</td>
                        <td className="listTable">Rs 52 per/kg </td>
                    </tr>
                    <tr className="listTr">
                        <td className="listTable">papers</td>
                        <td className="listTable">Rs 10 per/kg</td>
                    </tr>
                    <tr className="listTr">
                        <td className="listTable">metal</td>
                        <td className="listTable">Rs 80 per/kg</td>
                    </tr>
                    <tr className="listTr">
                        <td className="listTable">clothes</td>
                        <td className="listTable">Rs 6 per/kg</td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default List;