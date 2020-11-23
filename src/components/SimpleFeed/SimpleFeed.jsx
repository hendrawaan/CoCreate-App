import moment from "moment";
import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { FaComment, FaHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const SimpleFeed = (props) => {
  const history = useHistory();
  const {
    id,
    judul,
    isi_feed,
    waktu,
    jumlah_liker,
    username,
    jumlah_comment,
    nama_kategori,
  } = props;

  return (
    <ListGroup.Item
      className="mb-3 trending-list"
      action
      onClick={() => history.push("feed/" + id)}
    >
      <small className="text-dark d-block">
        {moment.unix(waktu).format("DD MMM YYYY HH:mm")}
      </small>
      <Badge variant="primary">
        {nama_kategori}
      </Badge>
      <h4 className="trending-feeds">{judul}</h4>
     
      {username && <h6>@{username}</h6>}
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
