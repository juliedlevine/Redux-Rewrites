import React from 'react';

// Gallery Presentation Component (props only)
// These props should match what's in index Component's dispatch section
export default class Gallery extends React.Component {
    render() {
        let currentImage = this.props.images[this.props.currentIndex];
        return (
            <div>

                {/* Previous Button */}
                <button onClick={this.props.previous}>Previous</button>

                {/* Next Button */}
                <button onClick={this.props.next}>Next</button><br/>

                {/* Main Image */}
                <img className="mainImage" src={currentImage} key={currentImage} alt="Funny Cat"/>

                {/* Thumbnail Images */}
                <div>
                    {this.props.images.map((imageUrl, idx) =>
                    <img onClick={() => this.props.thumbnail(idx)} key={idx} src={imageUrl} height="50" alt="Funny Cat"/>
                    )}
                </div>
            </div>
        );
    }
}
