import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayImage from './components/displayImage';
import UploadImage from './components/uploadImage';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#upload">Image Uploader</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#upload">Upload Image</Nav.Link>
            <Nav.Link href="#view">View</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id='upload'>
        <UploadImage/>
      </div>
      <div id='view'>
        <DisplayImage/>
      </div>
    </div>
  );
}

export default App;
