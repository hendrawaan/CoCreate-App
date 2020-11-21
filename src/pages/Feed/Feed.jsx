import moment from "moment";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LoadingIndicator } from "../../components";
import { clearState, getFeed } from "../../store/feed";

export const Feed = () => {
  const dispatch = useDispatch();
  const { feed, loading } = useSelector((state) => state.feed);
  useEffect(() => {
    const id = parseInt(window.location.pathname.split("/").pop());
    dispatch(getFeed(id));

    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <Container className="mt-5">
      {loading && <LoadingIndicator />}

      {feed && (
        <>
          <h6>
            {moment.unix(feed.waktu).format("DD MMM YYYY hh:mm")}
          </h6>
          <h1 className="mb-4">{feed.judul}</h1>
          <p>{feed.isi_feed}</p>
        </>
      )}
    </Container>
  );
};
