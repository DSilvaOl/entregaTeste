/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import board from "./Assets/board.svg";
import bgStripes from "./Assets/bg_stripes.svg";
import bookA from "./Assets/book_a.svg";
import bookB from "./Assets/book_b.svg";
import bookC from "./Assets/book_c.svg";
import bookD from "./Assets/book_d.svg";
import bookE from "./Assets/book_e.svg";
import bookF from "./Assets/book_f.svg";
import bookG from "./Assets/book_g.svg";
import bookH from "./Assets/book_h.svg";
import bookI from "./Assets/book_i.svg";
import bookcase from "./Assets/bookcase.svg";
import button from "./Assets/button.svg";
import clockBase from "./Assets/clock_base.svg";
import filterAlphabetic from "./Assets/filter_alphabetic.svg";
import filterButtonActive from "./Assets/filter_button_active.svg";
import filterButton from "./Assets/filter_button.svg";
import filterColors from "./Assets/filter_colors.svg";
import filterSizes from "./Assets/filter_sizes.svg";
import ground from "./Assets/ground.svg";
import lady from "./Assets/lady.svg";
import logo from "./Assets/logo.svg";
import "./App.css";

function App() {
  const [filterActive, setFilterActive] = useState("");

  const [bookListTop, setBookListTop] = useState([
    {
      src: bookA,
      size: 5,
      letter: "a",
      color: "2_yellow",
    },
    { src: bookB, size: 3, letter: "b", color: "0_red" },
    {
      src: bookC,
      size: 7,
      letter: "c",
      color: "1_orange",
    },
    {
      src: bookD,
      size: 8,
      letter: "d",
      color: "6_violet",
    },
    {
      src: bookE,
      size: 0,
      letter: "e",
      color: "4_lightblue",
    },
    { src: bookF, size: 2, letter: "f", color: "7_pink" },
    { src: bookG, size: 1, letter: "g", color: "8_rose" },
    {
      src: bookH,
      size: 6,
      letter: "h",
      color: "5_darkblue",
    },
    {
      src: bookI,
      size: 4,
      letter: "i",
      color: "3_green",
    },
  ]);

  const [bookListBottom, setBookListBottom] = useState([]);
  const [sortInvert, setSortInvert] = useState(false);

  const onDragEnd = (param) => {
    const destIdx = param.destination.index;
    const sourceIdx = param.source.index;
    const destDrop = param.destination.droppableId;
    const sourceDrop = param.source.droppableId;

    if (sourceDrop === destDrop) {
      let tempArray =
        sourceDrop === "droppable-1" ? bookListTop : bookListBottom;
      tempArray.splice(destIdx, 0, tempArray.splice(sourceIdx, 1)[0]);
      sourceDrop === "droppable-1"
        ? setBookListTop(tempArray)
        : setBookListBottom(tempArray);
    } else {
      let tempArrayTop = bookListTop;
      let tempArrayBottom = bookListBottom;

      if (sourceDrop === "droppable-1") {
        tempArrayBottom.splice(
          destIdx,
          0,
          tempArrayTop.splice(sourceIdx, 1)[0]
        );
        setBookListTop(tempArrayTop);
        setBookListBottom(tempArrayBottom);
      } else {
        tempArrayTop.splice(
          destIdx,
          0,
          tempArrayBottom.splice(sourceIdx, 1)[0]
        );
        setBookListTop(tempArrayTop);
        setBookListBottom(tempArrayBottom);
      }
    }
  };

  const filter = () => {
    if (filterActive === "alphabetic") {
      if (sortInvert) {
        setBookListTop([
          ...bookListTop.sort((a, b) =>
            a.letter < b.letter ? 1 : b.letter < a.letter ? -1 : 0
          ),
        ]);

        setBookListBottom([
          ...bookListBottom.sort((a, b) =>
            a.letter < b.letter ? 1 : b.letter < a.letter ? -1 : 0
          ),
        ]);
      } else {
        setBookListTop([
          ...bookListTop.sort((a, b) =>
            a.letter > b.letter ? 1 : b.letter > a.letter ? -1 : 0
          ),
        ]);

        setBookListBottom([
          ...bookListBottom.sort((a, b) =>
            a.letter > b.letter ? 1 : b.letter > a.letter ? -1 : 0
          ),
        ]);
      }
    } else if (filterActive === "colors") {
      if (sortInvert) {
        setBookListTop([
          ...bookListTop.sort((a, b) =>
            a.color < b.color ? 1 : b.color < a.color ? -1 : 0
          ),
        ]);

        setBookListBottom([
          ...bookListBottom.sort((a, b) =>
            a.color < b.color ? 1 : b.color < a.color ? -1 : 0
          ),
        ]);
      } else {
        setBookListTop([
          ...bookListTop.sort((a, b) =>
            a.color > b.color ? 1 : b.color > a.color ? -1 : 0
          ),
        ]);

        setBookListBottom([
          ...bookListBottom.sort((a, b) =>
            a.color > b.color ? 1 : b.color > a.color ? -1 : 0
          ),
        ]);
      }
    } else if (filterActive === "size") {
      if (sortInvert) {
        setBookListTop([
          ...bookListTop.sort((a, b) =>
            a.size < b.size ? 1 : b.size < a.size ? -1 : 0
          ),
        ]);

        setBookListBottom([
          ...bookListBottom.sort((a, b) =>
            a.size < b.size ? 1 : b.size < a.size ? -1 : 0
          ),
        ]);
      } else {
        setBookListTop([
          ...bookListTop.sort((a, b) =>
            a.size > b.size ? 1 : b.size > a.size ? -1 : 0
          ),
        ]);

        setBookListBottom([
          ...bookListBottom.sort((a, b) =>
            a.size > b.size ? 1 : b.size > a.size ? -1 : 0
          ),
        ]);
      }
    }

    setSortInvert(!sortInvert);
  };

  return (
    <div className="container">
      <div className="container-top">
        <img
          className="stripes"
          alt="stripes"
          src={bgStripes}
          width="100%"
          height="100%"
        />
        <img
          className="clockBase"
          alt="clockBase"
          src={clockBase}
          width={198}
        />
        <img className="logo" alt="logo" src={logo} width={257} />
      </div>
      <div className="container-bottom">
        <div className="container-bookcase">
          <img
            className="bookcase"
            alt="bookcase"
            src={bookcase}
            width={673}
            height={415}
          />

          <DragDropContext onDragEnd={(param) => onDragEnd(param)}>
            <div className="book-shelf">
              <Droppable
                droppableId="droppable-1"
                direction="horizontal"
                isCombineEnabled
                type="CARD"
              >
                {(provided, _) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {bookListTop.map((item, i) => (
                      <Draggable
                        index={i}
                        key={i}
                        draggableId={"draggable-top-" + i}
                      >
                        {(provided, snapshot) => (
                          <img
                            className={`book`}
                            alt={"book" + item.letter}
                            src={item.src}
                            width={45}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable
                droppableId="droppable-2"
                direction="horizontal"
                isCombineEnabled
                type="CARD"
              >
                {(provided, _) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {bookListBottom.map((item, i) => (
                      <Draggable
                        index={i}
                        key={i}
                        draggableId={"draggable-bottom-" + i}
                      >
                        {(provided, snapshot) => (
                          <img
                            className={`book`}
                            alt={"book" + item.letter}
                            src={item.src}
                            width={45}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </div>
        <img
          className="ground"
          alt="ground"
          src={ground}
          width="100%"
          height="100%"
        />
        <div className="container-board">
          <img
            className="board"
            alt="board"
            src={board}
            width="100%"
            height="100%"
          />
          <div className="container-button">
            <p className="sort-title">Sort By</p>
            <div className="container-filter-button">
              <a
                className="filter-button"
                onClick={() => setFilterActive("alphabetic")}
              >
                {filterActive === "alphabetic" ? (
                  <img
                    className="filter-button-img"
                    alt="filterButtonActive"
                    src={filterButtonActive}
                    width={56}
                    height={56}
                  />
                ) : (
                  <img
                    className="filter-button-img"
                    alt="filterButton"
                    src={filterButton}
                    width={56}
                    height={56}
                  />
                )}
                <img
                  className="filter-content"
                  alt="filterAlphabetic"
                  src={filterAlphabetic}
                  height={25}
                />
              </a>
              <a
                className="filter-button"
                onClick={() => setFilterActive("colors")}
              >
                {filterActive === "colors" ? (
                  <img
                    className="filter-button-img"
                    alt="filterButtonActive"
                    src={filterButtonActive}
                    width={56}
                    height={56}
                  />
                ) : (
                  <img
                    className="filter-button-img"
                    alt="filterButton"
                    src={filterButton}
                    width={56}
                    height={56}
                  />
                )}
                <img
                  className="filter-content"
                  alt="filterColors"
                  src={filterColors}
                  height={25}
                />
              </a>
              <a
                className="filter-button"
                onClick={() => setFilterActive("size")}
              >
                {filterActive === "size" ? (
                  <img
                    className="filter-button-img"
                    alt="filterButtonActive"
                    src={filterButtonActive}
                    width={56}
                    height={56}
                  />
                ) : (
                  <img
                    className="filter-button-img"
                    alt="filterButton"
                    src={filterButton}
                    width={56}
                    height={56}
                  />
                )}
                <img
                  className="filter-content"
                  alt="filterSizes"
                  src={filterSizes}
                  height={25}
                />
              </a>
            </div>

            <div className="line-divider" />
            <img
              className="button"
              alt="button"
              src={button}
              width={214}
              onClick={() => filter()}
            />
          </div>
        </div>

        <img className="lady" alt="lady" src={lady} width={360} height={400} />
      </div>
    </div>
  );
}

export default App;
