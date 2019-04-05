import React, { Component } from 'react';
import ReactModal from 'react-modal';
import YouTube from '@u-wave/react-youtube';

export default class TrailerModal extends React.Component {
    constructor() {
        super();
        this.state = { isModalopen: false };
    }

    render() {
        return (
            <div>
                <ReactModal id="modal"
                    isOpen={this.props.isOpen}
                >
                    <YouTube
                        video="6dzikBZTUy8"
                        id="modal"
                        autoplay />










                </ReactModal>


            </div>);
    }

}
