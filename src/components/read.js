import React from "react";
import { Songs } from "./songs";
import { operationError } from "./operationError";
import axios from 'axios';

export class Read extends React.Component {

    //Binding the event
    constructor(){
        super();
        this.ReloadPage=this.ReloadPage.bind(this);
    }

    //State acts as a holder of data which is linked to a specific component
    state = {
        //Json collection of songs
        songs: []
    }
    //Lifecycle hook, which gets called every time the component is mounted (active in the view)
    componentDidMount(){
        axios.get('http://localhost:4000/api/songs')
        .then((response)=>{
            this.setState({ songs: response.data})
            // this.redirect('/operationError546');
        })
        .catch(()=>{
            this.props.history.push('/operationError')
            
        });
    }
    //Method to reload the page, after a SongItem is deleted
    ReloadPage(){
        axios.get('http://localhost:4000/api/songs')
        .then((response)=>{
            this.setState({ songs: response.data})
        })
        .catch(()=>{
            this.props.history.push('/operationError')
        });
    }

    render() {
        return (
            <div>

                <h1>Music Library</h1>

                {/* Calling songs.js component  */}
                {/* Also passing it down the state data  */}
                <Songs objectName={this.state.songs} ReloadPage={this.ReloadPage}> </Songs>
            </div>
        );
    }
}
