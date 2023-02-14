import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import './displayImage.css'
import Axios from 'axios';

function DisplayImage() {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        try {
            const url="https://imageuploadserversapta.herokuapp.com/api/";
            const { data: res } = await Axios.get(url);
            setImages(res);
        }
        catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                alert(error.response.data.message);
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getImages()
        }, 1000);
    })

    return (
        <div className='image-display'>
            {images.length===0?
            "Be the first to upload Image"
            :
            images.map((img, index) => {
                return (
                    <div className='image-card' key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://res.cloudinary.com/saptya/image/upload/v1647524090/${img.image}.jpg`} />
                            <Card.Body>
                                <Card.Title>{img.title}</Card.Title>
                                <Card.Text>
                                    {img.description}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                );
            })}
        </div>
    )
}

export default DisplayImage