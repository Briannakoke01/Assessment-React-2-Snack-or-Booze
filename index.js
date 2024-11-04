import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

function unroll(square) {
    const result = [];
    let top = 0;
    let bottom = square.length - 1;
    let left = 0;
    let right = square[0].length - 1;
  
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        result.push(square[top][i]);
      }
      top++;
  
     
      for (let i = top; i <= bottom; i++) {
        result.push(square[i][right]);
      }
      right--;
  
    
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(square[bottom][i]);
        }
        bottom--;
      }
  
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(square[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
  
serviceWorker.unregister();
