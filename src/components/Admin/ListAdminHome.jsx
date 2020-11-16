import React  from "react";
import './ComponentAdmin.css'
import sampleUser from '../../assets/images/sampleUser.jpg';
import { Card } from 'react-bootstrap'

class ListAdminHome extends React.Component  {
    render() {
        return (
                <div>
                    <ul>
                        <Card>
                        <div className="chip">
                            <img src={sampleUser} alt="Person" />
                            <p style={{'color': '#A9A9A9'}}>Username</p>
                        </div>
                        </Card>
                    </ul>
                </div>
        );
    }
}
export default ListAdminHome;


