import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Container, Row, Image, Form, Button } from 'react-bootstrap'
import profileimg from "../../assets/images/profile-default.jpg";
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment'
import { FaCalendar, FaRegHeart, FaHeart, FaRegCommentDots, FaRegShareSquare } from 'react-icons/fa'
import './DetailPost.css'
import { comment } from './data'
import { getPost } from '../../store/post'
import { getUserProfileID } from '../../store/profile'
export const DetailPost = () => {
    const history = useHistory();
    let params = useParams();
    const dispatch = useDispatch();
    const [hideComment, setHideComment] = useState(true)
    const [like, setLike] = useState(true)
    const { post } = useSelector(state => state.post);
    const { profile } = useSelector(state => state.profile);
    const { user } = useSelector(state => state.user);
    const [data, setData] = useState({
        id: 0,
        judul: "",
        id_kat_feed: 0,
        id_jen_feed: 0,
        isi_feed: "",
        link_vidio: "",
        id_project: 0,
        link_download: "",
        id_user: 0,
        waktu: 0,
        jumlah_liker: 0,
        jumlah_comment: 0,
        TredingParam: 0
    })
    const datapost = post?.Feed
    const dataProfile = profile?.users;
    useEffect(() => {
        let pathend = window.location.pathname.split('/').pop()
        dispatch(getPost(parseInt(pathend)));
        dispatch(getUserProfileID(user.token, datapost?.id_user))
    }, [dispatch])
    // useEffect(() => {
    //     setData({
    //         id: datapost?.id,
    //         judul: datapost?.judul,
    //         id_kat_feed: datapost?.id_kat_feed,
    //         id_jen_feed: datapost?.id_jen_feed,
    //         isi_feed: datapost?.isi_feed,
    //         link_vidio: datapost?.link_vidiov,
    //         id_project: datapost?.id_project,
    //         link_download: datapost?.link_download,
    //         id_user: datapost?.id_user,
    //         waktu: moment.unix(datapost?.waktu).format("DD-MM-YYYY"),
    //         jumlah_liker: datapost?.jumlah_liker,
    //         jumlah_comment: datapost?.jumlah_comment,
    //         TredingParam: datapost?.TredingParam
    //     })
    // }, [dispatch])
    const contentComment = () => {
        return (
            <div className="div-comment">
                <div className="scroll">
                    {comment.map(function (item, i) {
                        return (
                            <div key={i} className="comment-inline">
                                <p className="comment-user"> @{item.username}</p>
                                <p className="comment-section">
                                    {item.comment}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <Form className="comment-form" >
                    <Form.Control size="sm" type="text" placeholder="Type comment..." />
                    <Button variant="primary" type="submit" size="sm" >
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
    return (
        <Container fluid>
            <Row>
                <Col md={2}></Col>
                <Col md={6}>
                    <h3>{datapost?.judul}</h3>
                </Col>
                <Col md={4}></Col>
            </Row>
            <Row>
                <Col md={9} className="article-container">
                    <div>
                        <p style={{ textAlign: 'right' }}><FaCalendar />{moment.unix(datapost?.waktu).format("DD-MM-YYYY")}</p>
                    </div>
                    <p>{datapost?.isi_feed}
                    </p>
                </Col>
                <Col md={3}>
                    <Card >
                        <div className="upper-container">
                            <div className="image-container">
                                <Image roundedCircle
                                    className="image-profile"
                                    src={profileimg}
                                    alt="profile-image"
                                />
                            </div>
                        </div>
                        <Card.Body className="lower-container">
                            <h5>{dataProfile?.name}</h5>
                            <p>{dataProfile?.username}</p>
                            <Button onClick={() => history.push('/profile/' + datapost?.id_user)} variant="primary" type="button" size="sm" >
                                View Profile
                    </Button>
                        </Card.Body>
                        <Card.Footer>
                            <Row className="align-center">
                                <Col md={4}>
                                    {like ? <FaHeart onClick={() => setLike(!like)} color="red" /> : <FaRegHeart onClick={() => setLike(!like)} />}
                                    <p>{datapost?.jumlah_liker}</p>
                                </Col>
                                <Col md={4}>
                                    <FaRegCommentDots onClick={() => setHideComment(!hideComment)} />
                                    <p>{datapost?.jumlah_comment}</p>
                                </Col>
                                <Col md={4}><FaRegShareSquare />
                                    <p>15</p></Col>
                            </Row>
                        </Card.Footer>
                        {!hideComment ?
                            <Card.Footer className="comment-container">
                                {contentComment()}
                            </Card.Footer> : <></>}
                    </Card>
                </Col>
            </Row>
        </Container>)
}