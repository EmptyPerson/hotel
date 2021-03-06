import React from 'react';
import './GalleryModal.css'

class GalleryModal extends React.Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        if (e.keyCode === 27)
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev) {
            // console.log(this.props)
            this.props.findPrev();
            // console.log(this.props)
        }
        if (e.keyCode === 39 && this.props.hasNext)
            this.props.findNext();
    }
    render () {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
        if (!src) {
            // console.log('what')
            return null;
        }
        return (
            this.props.isopen ?
            <div>
                 <div className="modal-overlay" onClick={closeModal}></div>
                <div className="modal">  {/*isOpen={!!src}*/}
                    <div className='modal-body'>
                        <a href="src/components/Gallery/Gallery#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                        {hasPrev && <a href="src/components/Gallery/Gallery#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                        {hasNext && <a href="src/components/Gallery/Gallery#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                        <img src={src} />
                    </div>
                </div>
            </div>
                    : null
        )
    }
}

export default GalleryModal