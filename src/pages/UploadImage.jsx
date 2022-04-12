import axios from "axios";

import React, { Component, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [pictureData, setPictureData] = useState({
    name: "",
    description: "",
    minAge: "",
    maxAge: "",
    color: "",
    city: "",
    state: "",
    country: "",
    contact: "",
    dob: "",
    uploaderEmail: localStorage.getItem("user"),
  });

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();

    formData.append("file", selectedFile, selectedFile.name);
    const data = await axios.post("/", formData);
    if (data) {
      const resp = await axios.post("/saveImageData", {
        ...pictureData,
        imageName: data.data.filename,
        uploaderEmail: localStorage.getItem("user"),
      });
    }
    setPictureData({
      name: "",
      description: "",
      minAge: "",
      maxAge: "",
      color: "",
      city: "",
      state: "",
      country: "",
      contact: "",
      dob: "",
    });
    console.log(data.data.filename);
    setResponse(data.data.filename);
  };

  return (
    <div className="mt-2 mb-2">
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Choose a file</Form.Label>
            <Form.Control type="file" onChange={onFileChange} />
            <Form.Text className="text-muted">
              Please choose a good quality picture.
            </Form.Text>
          </Form.Group>
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={pictureData.name}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, name: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  aria-label="Select Gender"
                  value={pictureData.gender}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, gender: e.target.value })
                  }>
                  <option>Select</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={pictureData.dob}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, dob: e.target.value })
                  }
                />
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Minimum Age</Form.Label>
                <Form.Control
                  type="number"
                  value={pictureData.minAge}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, minAge: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Maximum Age</Form.Label>
                <Form.Control
                  type="number"
                  value={pictureData.maxAge}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, maxAge: e.target.value })
                  }
                />
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Color</Form.Label>
                <Form.Select
                  aria-label="Select Gender"
                  value={pictureData.color}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, color: e.target.value })
                  }>
                  <option>Select</option>
                  <option value="1">Fair</option>
                  <option value="2">Dark</option>
                  <option value="3">Medium</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={pictureData.city}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, city: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  value={pictureData.state}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, state: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  value={pictureData.country}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, country: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  value={pictureData.contact}
                  onChange={(e) =>
                    setPictureData({ ...pictureData, contact: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col xs={12}></Col>
            <Col xs={12}></Col>
            <Col xs={12} md={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Description Here">
                  <Form.Control
                    as="textarea"
                    placeholder="Description Here"
                    style={{ height: "100px" }}
                    value={pictureData.description}
                    onChange={(e) =>
                      setPictureData({
                        ...pictureData,
                        description: e.target.value,
                      })
                    }
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        {/* <input type="file" onChange={onFileChange} /> */}
        <Button className="btn btn-primary" onClick={onFileUpload}>
          Upload Details!
        </Button>
      </div>
      {/* {fileData()} */}
    </div>
  );
};

export default UploadImage;

// const fileData = () => {
//   if (selectedFile) {
//     return (
//       <div>
//         <h2>File Details:</h2>

//         <p>File Name: {selectedFile.name}</p>

//         <p>File Type: {selectedFile.type}</p>

//         <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
//         {response && (
//           <div>
//             <h2>Response:</h2>
//             <p>{response}</p>
//             <img
//               style={{ maxWidth: "200px" }}
//               src={`http://localhost:5000/static/uploads/` + response}
//               alt=""
//             />
//           </div>
//         )}
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <br />
//         <h4>Choose before Pressing the Upload button</h4>
//       </div>
//     );
//   }
// };
