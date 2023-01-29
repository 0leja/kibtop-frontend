import Photo from "./Photo";

const PhotoUploads = ({uploads, deleteUpload}) => {
    return (
        <>
            {
                uploads.map((src, index) => <Photo 
                                                    key={index} 
                                                    {...{src, index, deleteUpload}} />)
            }
        </>
    );
}

export default PhotoUploads;