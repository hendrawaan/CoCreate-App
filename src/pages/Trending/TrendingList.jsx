import moment from "moment";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const TrendingList = (props) => {
  const history = useHistory();
  const { id, judul, isi_feed, waktu, jumlah_liker } = props;

  return (
    <ListGroup.Item
      className="mb-3 trending-list"
      action
      onClick={() => history.push("feed/" + id)}
    >
      <div className="d-flex">
        <div className="flex-grow-1">
          <h5 className="trending-feeds">{judul}</h5>
          <small className="text-dark">
            {moment.unix(waktu).format("DD MMM YYYY hh:mm")}
          </small>
        </div>
        <div className="text-dark" style={{ whiteSpace: "nowrap" }}>
          <h6>
            {jumlah_liker} <FaHeart className="text-danger" size={16} />
          </h6>
        </div>
      </div>
      <p className="trending-feeds">{isi_feed}</p>
    </ListGroup.Item>
  );
};
