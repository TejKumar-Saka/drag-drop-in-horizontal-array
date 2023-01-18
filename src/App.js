import logo from "./logo.svg";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const finalSpaceCharacters = [
  {
    id: "circle",
    name: "circle",
    thumb: "/images/circle.png",
  },
  {
    id: "triangle",
    name: "triangle",
    thumb: "/images/triangle.png",
  },
  {
    id: "square",
    name: "square",
    thumb: "/images/square.png",
  },
  {
    id: "pentagon",
    name: "pentagon",
    thumb: "/images/pentagon.png",
  },
  {
    id: "hexagon",
    name: "hexagon",
    thumb: "/images/hexagon.png",
  },
];

function App() {
  const [charactersDev, updateCharactersDev] = useState(finalSpaceCharacters);
  const [charactersTest, updateCharactersTest] = useState(finalSpaceCharacters);

  function handleOnDragEndDev(result) {
    if (!result.destination) return;

    const items = Array.from(charactersDev);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharactersDev(items);
  }

  function handleOnDragEndTest(result) {
    if (!result.destination) return;

    const items = Array.from(charactersTest);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharactersTest(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Drag - Drop</h1>
        <div style={{display:"flex"}} >
          <div style={{marginRight:"50px"}}>
            <h2>Dev</h2>
            <DragDropContext onDragEnd={handleOnDragEndDev}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ul
                    className="characters"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {charactersDev.map(({ id, name, thumb }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="characters-thumb">
                                <img src={thumb} alt={`${name} Thumb`} />
                              </div>
                              <p>{name}</p>
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div>
            <h2>Test</h2>
            <DragDropContext onDragEnd={handleOnDragEndTest}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <ul
                    className="characters"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {charactersTest.map(({ id, name, thumb }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="characters-thumb">
                                <img src={thumb} alt={`${name} Thumb`} />
                              </div>
                              <p>{name}</p>
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </header>
      {/* <p>
        Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
      </p> */}
      <p>
        {/* Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a> */}
        tej - copyright@2022
      </p>
    </div>
  );
}

export default App;
