import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Container, Row, Image, Form, Button } from 'react-bootstrap'
import profileimg from "../../assets/images/profile-default.jpg";
import { useParams, Link, useHistory } from 'react-router-dom';
import { FaCalendar, FaRegHeart, FaHeart, FaRegCommentDots, FaRegShareSquare } from 'react-icons/fa'
import './DetailPost.css'
import { comment } from './data'
import { getPost } from '../../store/post'
export const DetailPost = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const [hideComment, setHideComment] = useState(true)
    const [like, setLike] = useState(true)
    const { post } = useSelector(state => state.post);
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
    const datapost = post?.Feed;
    useEffect(() => {
        dispatch(getPost(params.id));
    }, [post])
    useEffect(() => {
        setData({
            id: datapost?.id,
            judul: datapost?.judul,
            id_kat_feed: datapost?.id_kat_feed,
            id_jen_feed: datapost?.id_jen_feed,
            isi_feed: datapost?.isi_feed,
            link_vidio: datapost?.link_vidiov,
            id_project: datapost?.id_project,
            link_download: datapost?.link_download,
            id_user: datapost?.id_user,
            waktu: datapost?.waktu,
            jumlah_liker: datapost?.jumlah_liker,
            jumlah_comment: datapost?.jumlah_comment,
            TredingParam: datapost?.TredingParam
        })
    }, [post])
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
                    <h3>BENEFITS & RISKS OF ARTIFICIAL INTELLIGENCE</h3>
                </Col>
                <Col md={4}></Col>
            </Row>
            <Row>
                <Col md={9} className="article-container">
                    <div>
                        <p style={{ textAlign: 'right' }}><FaCalendar />28-11-2020</p>
                    </div>
                    <p>In the near term, the goal of keeping AI’s impact on society beneficial motivates research in many areas, from economics and law to technical topics such as verification, validity, security and control. Whereas it may be little more than a minor nuisance if your laptop crashes or gets hacked, it becomes all the more important that an AI system does what you want it to do if it controls your car, your airplane, your pacemaker, your automated trading system or your power grid. Another short-term challenge is preventing a devastating arms race in lethal autonomous weapons.

                    In the long term, an important question is what will happen if the quest for strong AI succeeds and an AI system becomes better than humans at all cognitive tasks. As pointed out by I.J. Good in 1965, designing smarter AI systems is itself a cognitive task. Such a system could potentially undergo recursive self-improvement, triggering an intelligence explosion leaving human intellect far behind. By inventing revolutionary new technologies, such a superintelligence might help us eradicate war, disease, and poverty, and so the creation of strong AI might be the biggest event in human history. Some experts have expressed concern, though, that it might also be the last, unless we learn to align the goals of the AI with ours before it becomes superintelligent.

                    There are some who question whether strong AI will ever be achieved, and others who insist that the creation of superintelligent AI is guaranteed to be beneficial. At FLI we recognize both of these possibilities, but also recognize the potential for an artificial intelligence system to intentionally or unintentionally cause great harm. We believe research today will help us better prepare for and prevent such potentially negative consequences in the future, thus enjoying the benefits of AI while avoiding pitfalls.
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
                            <h5>Arif H</h5>
                            <p>@hendrawayn</p>
                            <Link to={{
                                pathname: '/profile',
                                props: {
                                    id: 1
                                }
                            }}>
                                <Button variant="primary" type="button" size="sm" >
                                    View Profile
                    </Button>
                            </Link>
                        </Card.Body>
                        <Card.Footer>
                            <Row className="align-center">
                                <Col md={4}>
                                    {like ? <FaHeart onClick={() => setLike(!like)} color="red" /> : <FaRegHeart onClick={() => setLike(!like)} />}
                                    <p>17</p>
                                </Col>
                                <Col md={4}>
                                    <FaRegCommentDots onClick={() => setHideComment(!hideComment)} />
                                    <p>10</p>
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