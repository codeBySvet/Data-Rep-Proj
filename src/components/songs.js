import React from "react";
import { SongItem } from "./songItem";

export class Songs extends React.Component {
    render() {
        // This function will generate multiple components for each item in the json array being passed down
        return this.props.objectName.map((song)=>{

            //As part of the return, were also sending data to the component made by the .map function
            //The data is being passed down by making an object called "track" and assigning it the same 
            //data used by the .map function "song"
            return <SongItem track={song} ReloadPage={this.props.ReloadPage}></SongItem>
        })
     }
}
