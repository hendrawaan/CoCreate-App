import React, { Fragment, useEffect } from "react";
import { Table } from "react-bootstrap";
import { CgCheck, CgCloseO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList, setUsersVerification } from "../../store/admin";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";

export const TableUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { userList, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    if (user) {
      dispatch(getUsersList("all", user.token));
    }
  }, [dispatch, user]);

  /**
   * Fungsi untuk mengubah status verifikasi user
   * @param {number} id ID user
   * @param {boolean} status True jika ingin diverifikasi dan False jika tidak.
   */
  const changeStatusVerified = (id, status) => {
    dispatch(
      setUsersVerification({ id: id, verification: status }, user.token)
    );
  };

  /**
   * Fungsi untuk mengetahui apakah user telah mengisi semua data profile atau
   * belum.
   * @param {object} dataUser Data user yang akan dicek
   */
  const isProfileComplete = (dataUser) => {
    for (var key in dataUser) {
      if (dataUser[key] === null || dataUser[key] === "") return false;
    }
    return true;
  };

  return (
    <Fragment>
      {loading && <LoadingIndicator />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Email</th>
            <th>Nama</th>
            <th>Status</th>
            <th className="text-center">Profile<br />Completion</th>
            <th colSpan="2" className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList &&
            userList.map((user, index) => {
              const { email, name, id, verification } = user;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{email}</td>
                  <td>{name}</td>
                  <td className="text-center">
                    {
                      verification
                        ? (<CgCheck className="text-info" size={24} />)
                        : (<CgCloseO className="text-danger" size={24} />)
                    }
                  </td>
                  <td className="text-center">
                    {
                      isProfileComplete(user)
                        ? (<CgCheck className="text-info" size={24} />)
                        : (<CgCloseO className="text-danger" size={24} />)
                    }
                  </td>
                  <td className="text-center">
                    {
                      verification
                        ? (<button
                            className="btn btn-danger"
                            onClick={() => {
                              changeStatusVerified(id, false);
                            }}
                          >
                            Reject
                          </button>)
                        : (<button
                            className="btn btn-primary"
                            onClick={() => {
                              changeStatusVerified(id, true);
                            }}
                          >
                            Accept
                          </button>)
                    }
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Fragment>
  );
};
