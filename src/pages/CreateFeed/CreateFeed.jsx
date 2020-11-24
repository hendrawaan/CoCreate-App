
import React, { useState, useEffect, Component } from "react";
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
import Add from "../Home/Add";
import axios from 'axios';

export default class CreateFeed extends Component {

    constructor(props) {
        super(props)

        this.onChangeFeedJudul = this.onChangeFeedJudul.bind(this);
        this.onChangeFeedId_kat_feed = this.onChangeFeedId_kat_feed.bind(this);
        this.onChangeFeedId_jen_feed = this.onChangeFeedId_jen_feed.bind(this);
        this.onChangeFeedIsi_feed = this.onChangeFeedIsi_feed.bind(this);
        this.onChangeFeedLink_vidio = this.onChangeFeedLink_vidio.bind(this);
        this.onChangeFeedId_project = this.onChangeFeedId_project.bind(this);
        this.onChangeFeedLink_download = this.onChangeFeedLink_download.bind(this);
        this.onChangeFeedWaktu = this.onChangeFeedWaktu.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            judul: '',
            id_kat_feed: '',
            id_jen_feed: '',
            isi_feed: '',
            link_vidio: '',
            id_project: '',
            link_download: '',
            waktu: ''
        }
    }

    onChangeFeedJudul(e) {
        this.setState({ judul: e.target.value })
    }

    onChangeFeedId_kat_feed(e) {
        this.setState({ id_kat_feed: e.target.value })
    }
    onChangeFeedId_jen_feed(e) {
        this.setState({ id_jen_feed: e.target.value })
    }
    onChangeFeedIsi_feed(e) {
        this.setState({ isi_feed: e.target.value })
    }
    onChangeFeedLink_vidio(e) {
        this.setState({ link_vidio: e.target.value })
    }
    onChangeFeedId_project(e) {
        this.setState({ id_project: e.target.value })
    }
    onChangeFeedLink_download(e) {
        this.setState({ link_download: e.target.value })
    }
    onChangeFeedWaktu(e) {
        this.setState({ waktu: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const feedObject = {
            judul: this.state.judul,
            id_kat_feed: this.state.id_kat_feed,
            id_jen_feed: this.state.id_jen_feed,
            isi_feed: this.state.isi_feed,
            link_vidio: this.state.link_vidio,
            id_project: this.state.id_project,
            link_download: this.state.link_download,
            waktu: this.state.waktu
        };

        axios.post('http://kelompok6.dtstakelompok1.com/api/v1/user/add', feedObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ 
            judul: '',
            id_kat_feed: '',
            id_jen_feed: '',
            isi_feed: '',
            link_vidio: '',
            id_project: '',
            link_download: '',
            waktu: ''
        })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Feed Judul</label>
                        <input type="text" value={this.state.judul} onChange={this.onChangeFeedJudul} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Feed Id Kat Feed</label>
                        <input type="text" value={this.state.id_kat_feed} onChange={this.onChangeFeedId_kat_feed} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Feed Id_jen_feed</label>
                        <input type="text" value={this.state.id_jen_feed} onChange={this.onChangeFeedId_jen_feed} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Feed Isi_feed</label>
                        <input type="text" value={this.state.isi_feed} onChange={this.onChangeFeedIsi_feed} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Feed Link_vidio</label>
                        <input type="text" value={this.state.link_vidio} onChange={this.onChangeFeedLink_vidio} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Feed Id_project</label>
                        <input type="text" value={this.state.id_project} onChange={this.onChangeFeedId_project} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Feed Link_download</label>
                        <input type="text" value={this.state.link_download} onChange={this.onChangeFeedLink_download} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Feed Waktu</label>
                        <input type="text" value={this.state.waktu} onChange={this.onChangeFeedWaktu} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Feed" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}