import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './uploadImage.css'
import Axios from 'axios';

function UploadImage() {
    const [data, setData] = useState({
        title: "",
        description: ""
    });
    const [imageSelected, setImageSelected] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const submit = () => {
        if (imageSelected === null)
            alert("Please select an Image")
        else if (data.title === "")
            alert("Please add a title for the Image selected")
        else if (data.description === "")
            alert("Please add a description for the Image selected")
        else {
            const formData = new FormData();
            formData.append("file", imageSelected);
            formData.append("upload_preset", "eet582tc")
            Axios.post("https://api.cloudinary.com/v1_1/saptya/image/upload", formData).then(
                (Response) => {
                    setImageSelected(null);
                    const url = "https://imageuploadserversapta.herokuapp.com/api/";
                    const req = ({ ...data, image: Response.data.public_id });
                    Axios.post(url, req).then(() => {

                    }).catch((error) => {
                        if (
                            error.response &&
                            error.response.status >= 400 &&
                            error.response.status <= 500
                        ) {
                            alert(error.response.data.message);
                        }
                    })
                }
            )
            setData({
                title: "",
                description: ""
            })
        }
    }

    return (
        <div className='image-upload'>
            <h1>Add new Image</h1>
            <Form.Control onChange={
                (event) => {
                    setImageSelected(event.target.files[0]);
                }
            } required name="img" type="file" placeholder="Upload Image File" accept=".png, .jpg, .jpeg" />
            <br />
            <Form.Control onChange={handleChange} value={data.title} required name="title" type="text" placeholder="Image Title" />
            <br />
            <Form.Control onChange={handleChange} value={data.description} required name="description" type="text" placeholder="Image Description" />
            <Button className='submit-btn' variant="primary" size="lg"
                onClick={() => {
                    submit()
                }}>
                Submit
            </Button>
        </div>
    )
}

export default UploadImage