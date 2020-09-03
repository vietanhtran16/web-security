import React, {useState} from 'react';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const containerStyle = {marginTop: "20px", display: "flex", flexDirection: "column"};

function App() {
  const [content, setContent] = useState("<img src=a onerror=alert(document.cookie) />");
  const [response, setResponse] = useState("");
  const handleSubmit = async (content) => {
    const result = await axios.get(`http://localhost:8000/search?key=${content}`);
    setResponse(result.data);
  };
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Origin Site
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={containerStyle} maxWidth="sm">
        <TextField
          id="outlined-multiline-static"
          label="Say hi"
          multiline
          rows={4}
          value={content}
          variant="outlined"
          onChange={
            (event) => setContent(event.target.value)
          }
        />
        <Button onClick={() => handleSubmit(content)}>Submit</Button>
        <div dangerouslySetInnerHTML={{__html: response}}></div>
      </Container>
    </>
  );
}

export default App;
