import React,  {Fragment} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Admin/Header'
// import Footer from '../../components/Admin/Footer'
import TableUser from '../../components/Admin/TableUser'
import UsersList from '../../components/Admin/UsersList'
import ListAdminHome from '../../components/Admin/ListAdminHome'


function AdminHome() {
return (
    <Fragment>
    <Header />
    <div className="container justify-content-center">
        <div className="tab-wrapper">
            <div className='container-fluid' >
                <div className="row justify-content-center ">
                <div className="col-sm-12">
                    <Tabs className="conatiner mx-auto" defaultActiveKey="home">
                    <Tab eventKey="home" title="Home">
                        <div className="tab-item-wrapper">
                        <h2>Home</h2>
                        <hr/>
                        </div>
                        <ListAdminHome />
                    </Tab>
                    {/* <Tab className="conatiner mx-auto" eventKey="content" title="Content">
                        <div className="tab-item-wrapper">
                        
                        <ContentPost />
                        </div>
                    </Tab> */}
                    <Tab className="conatiner mx-auto" eventKey="table" title="Table">
                        <div className="tab-item-wrapper">
                        
                        <TableUser />
                        </div>
                    </Tab>
                    <Tab className="conatiner mx-auto" eventKey="users" title="Users">
                        <div className="tab-item-wrapper">
                        
                        <UsersList />
                        </div>
                    </Tab>
                    </Tabs>
                </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
);
}
export default AdminHome;