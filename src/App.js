import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './App.css';


function App() {
  const [alg, setAlg] = React.useState('DFS');

  const handleAlg = (event, newAlg) => {
    setAlg(newAlg);
  };

  return (
    <div className="App">
      <ToggleButtonGroup
      value={alg}
      exclusive
      onChange={handleAlg}
      aria-label="Algorithms"
      >
      <ToggleButton value="DFS" aria-label="DFS search">DFS</ToggleButton>
      <ToggleButton value="BFS" aria-label="BFS search">BFS</ToggleButton>
      <ToggleButton value="A*" aria-label="A* search">A*</ToggleButton>
      <ToggleButton value="Dijkstra’s" aria-label="Dijkstra’s search">Dijkstra’s</ToggleButton>
      </ToggleButtonGroup>
      
      <button onClick={() => {startButton()}}>Start</button>
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


function startButton() {
  createGrid();
  setDefaultStartFinish();
}



//createGrid();
//setDefaultStartFinish();

export default App;
