import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button id='startButton'>Start</button>
    </div>
  );
}

// Make start button run algorithm functions

function createGrid() {
  var squareSize = 20;
  var ratioW = Math.floor((window.innerWidth || document.documentElement.offsetWidth) / squareSize),
        ratioH = Math.floor((window.innerHeight || document.documentElement.offsetHeight) / squareSize);

  var parent = document.createElement('div');
  parent.className = 'grid';
  parent.style.width = (ratioW * squareSize) + 'px';
  parent.style.height = (ratioH * squareSize) + 'px';

  for (var i = 0; i < ratioH; i++) {
      for (var p = 0; p < ratioW; p++) {
          var node = document.createElement('div');
          node.style.height = (squareSize - 1) + 'px';
          node.style.width = (squareSize - 1) + 'px';
          node.setAttribute("visited", false);
          node.id = i + "x" + p;
          parent.appendChild(node);
      }
  }
  document.body.appendChild(parent);
}

function setDefaultStartFinish() {
  var startNode = document.getElementById('24x25');
  startNode.style.backgroundColor = "green";
  var finishNode = document.getElementById('24x65');
  finishNode.style.backgroundColor = "red";
}

/*
function startButton() {
  createGrid();
  setDefaultStartFinish();
}
*/


createGrid();
setDefaultStartFinish();

export default App;
