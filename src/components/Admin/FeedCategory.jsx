import React, { Fragment, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { RiAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeedCategoryAction,
  updateFeedCategoryAction
} from "../../store/admin";
import { clearState, getFeedsCetegory } from "../../store/feed";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import { ModalFeed } from "./ModalFeed";

export const FeedCategory = () => {
  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);
  const [category,  setCategory]  = useState();
  const [feedsItem, setFeedsItem] = useState({});

  const { loading, categoryFeeds } = useSelector((state) => state.feed);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getFeedsCetegory());
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <Fragment>
      {category && (
        <ModalFeed
          category={category.nama_kategori}
          show={modalShow}
          onChange={(e) => {
            setFeedsItem(e.target.value);
          }}
          onSubmit={() => {
            if (category.id_kategori) {
              dispatch(
                updateFeedCategoryAction(
                  {
                    id_kategori: category.id_kategori,
                    nama_kategori: feedsItem,
                  },
                  user.token
                )
              );
            } else {
              dispatch(
                addFeedCategoryAction({ nama_kategori: feedsItem }, user.token)
              );
            }

            setFeedsItem({});
            setModalShow(false);
          }}
          onHide={() => setModalShow(false)}
        />
      )}
      {loading && <LoadingIndicator />}
      <Card className="mx-auto" style={{ maxWidth: "420px" }}>
        <Card.Header>
          Feed Category
          <RiAddLine
            className="float-right"
            type="button"
            onClick={() => {
              setCategory({});
              setModalShow(true);
            }}
          />
        </Card.Header>
        <ListGroup variant="flush">
          {categoryFeeds &&
            categoryFeeds.map((item, index) => (
              <ListGroup.Item
                action
                key={index}
                onClick={() => {
                  const { id_kategori, nama_kategori } = item;
                  setCategory({ id_kategori, nama_kategori });
                  setModalShow(true);
                }}
              >
                {item.nama_kategori}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
    </Fragment>
  );
};
