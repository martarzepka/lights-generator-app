import "./App.css";
import { Counter } from "./components/Counter";
import { Grid } from "./components/Grid";
import { SingleLight } from "./components/SingleLight";
import { Text } from "./components/Text";
import { useState } from "react";

function App() {

  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleIncrementRow = () =>
  {
      setRows(rows + 1)
  }

  const handleDecrementRow = () =>
  {
      if(rows <= 0)
      {
          return;
      }
      setRows(rows - 1)
  }

  const handleIncrementColumn = () =>
  {
    if(columns >= 9)
      {
          return;
      }
    setColumns(columns + 1)
  }

  const handleDecrementColumn = () =>
  {
      if(columns <= 0)
      {
          return;
      }
      setColumns(columns - 1)
  }

  const totalLights = rows * columns;

  const lights = Array.from({length: totalLights})

  return (
    <div>
      Lights generator
      <nav className={"nav"}> 
        <Text>{totalLights} bulbs</Text>
        <Counter text={"rows"} count={rows} onIncrement={handleIncrementRow} onDecrement={handleDecrementRow} />
        <Counter text={"columns"} count={columns} onIncrement={handleIncrementColumn} onDecrement={handleDecrementColumn} />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, idx) => 
        {
          return <SingleLight key={idx} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
