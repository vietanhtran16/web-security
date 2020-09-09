import React from 'react';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

const containerStyle = {marginTop: "20px", display: "flex", flexDirection: "column"};

const handleOnClick = (event) => {
  alert("Coronavirus is being downloaded");
};

function App() {
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
        <div>Hello</div>
        <button onClick={handleOnClick}>
          <iframe src="http://localhost:5000/" title="Hello"/>
        </button>
      </Container>
    </>
  );
}

export default App;
