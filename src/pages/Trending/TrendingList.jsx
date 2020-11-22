import moment from "moment";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaComment, FaHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const TrendingList = (props) => {
  const history = useHistory();
  const {
    id,
    judul,
    isi_feed,
    waktu,
    jumlah_liker,
    username,
    jumlah_comment,
  } = props;

  return (
    <ListGroup.Item
      className="mb-3 trending-list"
      action
      onClick={() => history.push("feed/" + id)}
    >
      <small className="text-dark">
        {moment.unix(waktu).format("DD MMM YYYY hh:mm")}
      </small>
      <h5 className="trending-feeds">{judul}</h5>
      <h6>@{username}</h6>
      <p className="trending-feeds">{isi_feed}</p>
      <p>
        <span className="mr-4">
          {jumlah_liker} <FaHeart className="text-danger" size={16} />
        </span>
        <span>
          {jumlah_comment} <FaComment className="text-info" size={16} />
        </span>
      </p>
    </ListGroup.Item>
  );
};
