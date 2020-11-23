
import React, { useState, useEffect } from "react";
import PostFeed from './PostFeed'
import Feed from './Feed'
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  Carousel,
  Dropdown,
  Form,
} from "react-bootstrap";
import {
  homeLogo,
  carouselFirst,
  carouselSecond,
  carouselThird
} from "../../assets/images";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { BiMoney } from "react-icons/bi";
import { GiLifeInTheBalance } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/profile";
import { logout } from "../../store/user";
import Add from "./Add";