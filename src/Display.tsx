import React from 'react';
import { Container } from '@material-ui/core';


type DisplayProd = {
  oldValue: String,
  value: String,
  binaryResult: String,
  hexResult: String
}

const Display: React.FC<DisplayProd> = ({value, oldValue, binaryResult, hexResult}: DisplayProd) => {

  const oldValueStyle = {
    fontFamily: 'Roboto',
    fontSize: "3vmin",
    fontWeight : "bold",
    width: "100%",
    height: "25%",
    maxWidth: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: "hidden",
    // padding: 0,
    paddingRight: 10,
    position: "absolute" as const
  }

  const newValueStyle = {
    fontFamily: 'Roboto',
    fontSize: "4vmin",
    fontWeight : "bold",
    width: "100%",
    height: "25%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: "0 10px 0 0",
    overflow: "hidden",
    position: "absolute" as const
  }
  const mainStyle: React.CSSProperties = {
    height: "30%",
    width: "100%",
    padding: 0,
    display: 'flex', 
    alignItems: "flex-end",
    // backgroundColor: 'red',
  }

  const modeStyle = {
    width: "100%",
    height: "25%",
    fontFamily: 'Roboto',
    fontSize: "2vmin",
    display: 'flex',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    overflow: "hidden",
    paddingTop: 10,
    position: "absolute" as const
  }


  return (

      <Container style={mainStyle}>
        <Container  style = {{
          backgroundColor: '#D9D9D9',
          position:"relative",
          borderRadius: 10,
          padding: 0,
          width: '90%',
          height: '90%',
        }}>
          <Container style = {{
            height: '25%',
            // backgroundColor: 'yellow',
            paddingLeft: 10,           
          }}>
              <div style = {modeStyle}><b>BIN: </b> {binaryResult}</div>
            </Container>

            <Container style = {{
            height: '25%',
            // backgroundColor: 'brown',
            paddingLeft: 10,

          }}>
            <div style = {modeStyle}><b>HEX: </b> {hexResult}</div>
          </Container>
          
          <Container style = {{
            height: '25%',
            // backgroundColor: 'lightgreen',
            padding: 0,
          }}>
            <div> <text style = {oldValueStyle}>{oldValue}</text></div>           
          </Container>

          <Container style = {{
            height: '25%',
            // backgroundColor: 'purple',
            padding: 0,
          }}>
            <div> <text style = {newValueStyle}>{value}</text></div> 
          </Container>
        </Container>
      </Container>
  )
};
  
export default Display;