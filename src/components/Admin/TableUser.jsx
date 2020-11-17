import React from 'react'
import {
CBadge,
CCard,
CCardBody,
CCardHeader,
CCol,
CDataTable,
CRow
} from '@coreui/react'

import usersData from './UsersData'

const getBadge = status => {
switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
}
}
const fields = ['name','registered', 'role', 'status']

const TableUser = () => {
return (
    <>
    <CRow>
        <CCol xs="12" lg="6">
        <CCard>
            <CCardHeader>
            Simple Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
            items={usersData}
            fields={fields}
            itemsPerPage={5}
            pagination
            scopedSlots = {{
                'status':
                (item)=>(
                    <td>
                    <CBadge color={getBadge(item.status)}>
                        {item.status}
                    </CBadge>
                    </td>
                )
            }}
            />
            </CCardBody>
        </CCard>
        </CCol>
        <CCol xs="12" lg="6">
        <CCard>
            <CCardHeader>
            Striped Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
            items={usersData}
            fields={fields}
            striped
            itemsPerPage={5}
            pagination
            scopedSlots = {{
                'status':
                (item)=>(
                    <td>
                    <CBadge color={getBadge(item.status)}>
                        {item.status}
                    </CBadge>
                    </td>
                )

            }}
            />
            </CCardBody>
        </CCard>
        </CCol>
    </CRow>

    <CRow>

        <CCol xs="12" lg="6">
        <CCard>
            <CCardHeader>
            Condensed Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
            items={usersData}
            fields={fields}
            size="sm"
            itemsPerPage={5}
            pagination
            scopedSlots = {{
                'status':
                (item)=>(
                    <td>
                    <CBadge color={getBadge(item.status)}>
                        {item.status}
                    </CBadge>
                    </td>
                )

            }}
            />
            </CCardBody>
        </CCard>
        </CCol>

        <CCol xs="12" lg="6">
        <CCard>
            <CCardHeader>
            Bordered Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
            items={usersData}
            fields={fields}
            bordered
            itemsPerPage={5}
            pagination
            scopedSlots = {{
                'status':
                (item)=>(
                    <td>
                    <CBadge color={getBadge(item.status)}>
                        {item.status}
                    </CBadge>
                    </td>
                )

            }}
            />
            </CCardBody>
        </CCard>
        </CCol>

    </CRow>

    <CRow>
        <CCol>
        <CCard>
            <CCardHeader>
            Combined All Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
            items={usersData}
            fields={fields}
            hover
            striped
            bordered
            size="sm"
            itemsPerPage={10}
            pagination
            scopedSlots = {{
                'status':
                (item)=>(
                    <td>
                    <CBadge color={getBadge(item.status)}>
                        {item.status}
                    </CBadge>
                    </td>
                )
            }}
            />
            </CCardBody>
        </CCard>
        </CCol>
    </CRow>
        <CRow>
        <CCol>
        <CCard>
            <CCardHeader>
            Combined All dark Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
            items={usersData}
            fields={fields}
            dark
            hover
            striped
            bordered
            size="sm"
            itemsPerPage={10}
            pagination
            scopedSlots = {{
                'status':
                (item)=>(
                    <td>
                    <CBadge color={getBadge(item.status)}>
                        {item.status}
                    </CBadge>
                    </td>
                )
            }}
            />
            </CCardBody>
        </CCard>
        </CCol>
    </CRow>
    </>
)
}

export default TableUser


// import React, { Component } from "react";
// import { Table } from 'react-bootstrap'

// class TableUser extends Component {
//     render() {
//     return (
//         <Table responsive>
//         <thead>
//             <tr>
//             <th>#</th>
//             {Array.from({ length: 5 }).map((_, index) => (
//                 <th key={index}>Nama Lengkap</th>
//             ))}
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//             <td>1</td>
//             {Array.from({ length: 5 }).map((_, index) => (
//                 <td key={index}>User 1 {index}</td>
//             ))}
//             </tr>
//             <tr>
//             <td>2</td>
//             {Array.from({ length: 5 }).map((_, index) => (
//                 <td key={index}>User 2 {index}</td>
//             ))}
//             </tr>
//             <tr>
//             <td>3</td>
//             {Array.from({ length: 5 }).map((_, index) => (
//                 <td key={index}>User 3 {index}</td>
//             ))}
//             </tr>
//         </tbody>
//         </Table>
//     );
// }
// }


// export default TableUser;