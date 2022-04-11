import React from 'react';
import UploadStyle from '../css/UploadStyle.css';

const dragOver = (e) => {
    e.preventDefault();
}

const dragEnter = (e) => {
    e.preventDefault();
}

const dragLeave = (e) => {
    e.preventDefault();
}

const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
        handleFiles(files);
    }
    console.log(files);
}

const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    if (validTypes.indexOf(file.type) === -1) {
        return false;
    }
    return true;
}

const handleFiles = (files) => {

}



function Upload() {
  return (
    <div className="uploadbox">
        
        <div className="content">
          <div className="container">
            <div className="drop-container"
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDrop={fileDrop}
            >
              <div className="drop-message">
                <div className="upload-icon"></div>
                  Drag & Drop files here or click to upload
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Upload;

