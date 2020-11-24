
import React from "react";
import Feed from './Feed'
// import {Form, Button, Col, Card} from 'react-bootstrap'
// import axios from 'axios'


class PostFeed extends React.Component {
    constructor(){
        super()
        this.state = {
            post: [],
            judul: null,
            id_kat_feed: null,
            id_jen_feed: null,
            isi_feed: null,
            link_vidio: null,
            id_project: null,
            link_download: null,
            waktu: null,
        };
    }

componentDidMount() {
    fetch('http://kelompok6.dtstakelompok1.com/api/v1/user/feeds', {
        headers: {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11aGFtYWRoaWxtYW44ODVAZ21haWwuY29tIiwiaWQiOjExLCJ0eXBlX3VzZXIiOjIsInVzZXJuYW1lIjoiaGlsbWFuIn0.0VeEHjh_rHR7evz7fPJorUT5nme3t5uBoorKtd1DOwk"
        }
    })
    .then(response => response.json())
    .then(json => {
        // console.log(json.data.feeds)
        this.setState({ 
            post: json.data.feeds 
        });
    })
}

postDataToApi(){
    const apiUrl = 'http://kelompok6.dtstakelompok1.com/api/v1/feed/add'
    const dataFeed = {
        Judul: this.state.judul,
        Id_kat_feed: this.state.id_kat_feed,
        Id_jen_feed: this.state.id_jen_feed,
        Isi_feed: this.state.isi_feed,
        Link_vidio: this.state.link_vidio,
        Id_project: this.state.id_project,
        Link_download: this.state.link_download,
        Waktu: this.state.waktu,
    }
}

    render() {
        return (
                <div>
                {
                    this.state.post.map(data => { 
                        return (
                            <div>
                            <Feed 
                            title={data.judul} 
                            desc={data.isi_feed} 
                            userId={data.id_user}
                            />
                        </div>
                        )
                    })
                }
                </div>
        );
    }
}
export default PostFeed