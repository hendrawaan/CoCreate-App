import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { GrApps, GrArticle, GrGroup, GrProjects, GrUser } from "react-icons/gr";
import { VscSearchStop } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { LoadingIndicator } from "../../components";
import {
  clearState,
  getFeedsCetegory,
  getFeedsTrendingList
} from "../../store/feed";
import "./Trending.css";
import { TrendingList } from "./TrendingList";

export function Trending() {

  const dispatch                = useDispatch();
  const [feedList, setFeedList] = useState([]);
  const [title, setTitle]       = useState("Trending");
  const { feeds, loading, categoryFeeds } = useSelector((state) => state.feed);

  const feedCategory = [
    { label: "Artikel",     id: 1, ic: GrArticle },
    { label: "Project",     id: 2, ic: GrProjects },
    { label: "Kontributor", id: 3, ic: GrUser },
    { label: "Discussion",  id: 4, ic: GrGroup },
  ];
  useEffect(() => {
    dispatch(getFeedsTrendingList());
    dispatch(getFeedsCetegory());
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    setFeedList(feeds);
  }, [feeds]);

  const setList = (key, comparator, label) => {
    setFeedList(feeds.filter((item) => item[key] === comparator));
    setTitle(label);
  };

  return (
    <Fragment>
      {loading && <LoadingIndicator />}

      <Container
        fluid
        style={{ backgroundColor: "#F1F6F9" }}
        className="vh-fit pt-5"
      >
        <Row className="w-100">
          <Col md={3} className="px-5">
            <Row>
              <Col className="d-flex flex-column">
                <h4 className="text-center mb-4">Feed</h4>
                <Button
                  variant="outline-dark"
                  className="mb-3"
                  onClick={
                    () => {
                      setFeedList(feeds);
                      setTitle("Trending");
                    }}
                >
                  <GrApps className="mr-2" /> Semua
                </Button>
                {
                  feedCategory.map((item, index) => (
                    <Button
                      key={index}
                      variant="outline-dark"
                      className="mb-3"
                      onClick={
                        () => setList("id_jen_feed", item.id, item.label)
                      }
                    >
                      <item.ic className="mr-2" />
                      {item.label}
                    </Button>
                  ))
                }
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <h4 className="text-center mb-4">{title}</h4>
            {
              feedList?.length === 0 &&
                (<div className="text-center">
                  <VscSearchStop className="mt-5" size={80} />
                  <p>Tampaknya tidak ada</p>
                </div>)
            }
            <ListGroup className="w-100">
              {
                feedList &&
                  feedList.map((item, index) => (
                    <TrendingList key={index} {...item} />
                  ))
              }
            </ListGroup>
          </Col>

          <Col md={3} className="px-5">
            <Row>
              <Col className="d-flex flex-column">
                <h4 className="text-center mb-4">Kategori</h4>
                <Button
                  variant="outline-dark"
                  className="mb-3"
                  onClick={() => {
                    setFeedList(feeds);
                    setTitle("Trending");
                  }}
                >
                  Semua
                </Button>
                {categoryFeeds &&
                  categoryFeeds.map((item, index) => (
                    <Button
                      key={index}
                      variant="outline-dark"
                      className="mb-3"
                      onClick={() =>
                        setList(
                          "id_kat_feed",
                          item.id_kategori,
                          item.nama_kategori
                        )
                      }
                    >
                      {item.nama_kategori}
                    </Button>
                  ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
