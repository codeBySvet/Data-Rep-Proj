import React from "react";
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class SongItem extends React.Component {
    //Binding events to "this" instance of the controls
    constructor() {
        super();
        this.deleteSong = this.deleteSong.bind(this);
    }

    deleteSong(e) {
        //This prevents any button on the form being called multiple times unintentionally
        e.preventDefault();
        //Sending a delete request to the server for a specific SongItem
        axios.delete('http://localhost:4000/api/songs/' + this.props.track._id)
            .then(() => {
                this.props.ReloadPage();
            })
            .catch(()=>{
                this.props.history.push('/operationError')
            });
    }

    render() {
        return (
            <div >
                {/* Structuring how to display the data */}
                <Card >
                    <Card.Header>{this.props.track.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="block content">
                            <img src={this.props.track.Cover} width="200" height="200" ></img>
                            <footer className="blockquote footer">
                                <p>{this.props.track.Year}</p>
                                <p>{this.props.track.Type}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* Adding edit button and attaching to the edit component/URL */}
                    <Link to={"/edit/" + this.props.track._id} className="btn btn-primary">Edit</Link>
                    {/* Adding the delete button and linking to delete function */}
                    <Button variant="danger" onClick={this.deleteSong}>Delete</Button>
                </Card>
            </div>
        );
    }
}
