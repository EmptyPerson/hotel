import './Gallery.css'
import React from 'react';
import GalleryModal from "./GalleryModal/GalleryModal";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: null };
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
        this.renderImageContent = this.renderImageContent.bind(this);
        this.imgs = this.props.imgs;
    }
    renderImageContent(src, index) {
        return (
            <div onClick={(e) => this.openModal(e, index)} key={src}>
                <img src={src} key={src}  alt="Изображение недоступно"/>
            </div>
        )
    }
    openModal(e, index) {
        this.setState ({ currentIndex: index });
    }
    closeModal(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState ({ currentIndex: null });
    }
    findPrev(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex -1
        }));
    }
    findNext(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
        return (
            <div className="gallery-container">
                {/*<h1>🔥 This Gallery Is Lit 🔥</h1>*/}
                <div className="gallery-grid">
                    {this.imgs.map(this.renderImageContent)}
                </div>
                <GalleryModal
                    closeModal={this.closeModal}
                    findPrev={this.findPrev}
                    findNext={this.findNext}
                    hasPrev={this.state.currentIndex > 0}
                    hasNext={this.state.currentIndex + 1 < this.imgs.length}
                    src={this.imgs[this.state.currentIndex]}
                />
            </div>
        )
    }
}



export default Gallery
