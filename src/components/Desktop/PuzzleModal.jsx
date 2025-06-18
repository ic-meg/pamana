import React, { useState, useEffect, useRef } from "react"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import Draggable from "react-draggable"

import monitorLandscape from "../../assets/images/apple.png"
import monitorPortrait from "../../assets/images/portrait-apple.png"
import beatGif from "../../assets/images/beat2.gif"
import bgTexture from "../../assets/images/bg.jpg"
import { Images } from "../../assets"

const pieceSize = 80
const rows = 4
const cols = 4
const totalPieces = rows * cols

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

function Piece({ id, index, imageUrl }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({ id })

  const row = Math.floor(index / cols)
  const col = index % cols
  const backgroundPosition = `${-col * pieceSize}px ${-row * pieceSize}px`

  const style = {
    width: pieceSize,
    height: pieceSize,
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition,
    backgroundSize: `${cols * pieceSize}px ${rows * pieceSize}px`,
    transform: transform ? CSS.Transform.toString(transform) : undefined,
    transition,
    border: "1px solid #894b00",
    borderRadius: "4px",
    backgroundColor: "white",
    cursor: "grab",
    zIndex: 5,
  }

  return <div ref={setNodeRef} {...attributes} {...listeners} style={style} />
}

function PuzzleCell({ id, children }) {
  const { setNodeRef } = useDroppable({ id })
  return (
    <div
      ref={setNodeRef}
      id={id}
      className="w-[100px] h-[100px] border border-dashed border-amber-900 flex items-center justify-center overflow-hidden"
      style={{
        width: pieceSize,
        height: pieceSize,
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  )
}

export default function PuzzleModal({ isOpen, closeModal, details }) {
  const [trayPieces, setTrayPieces] = useState([])
  const [grid, setGrid] = useState(Array(totalPieces).fill(null))
  const [isSolved, setIsSolved] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const nodeRef = useRef(null)
  const [randomFact, setRandomFact] = useState("")

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const selectedMonitor = isMobile ? monitorPortrait : monitorLandscape
  const cutoutStyle = isMobile
    ? {
        top: "0.5%",
        left: "1.5%",
        width: "99.5%",
        height: "95.5%",
        position: "absolute",
      }
    : {
        top: "1.5%",
        left: "1.25%",
        width: "97.5%",
        height: "89%",
        position: "absolute",
      }

  useEffect(() => {
    const shuffled = shuffleArray(
      Array.from({ length: totalPieces }, (_, i) => i)
    )
    setTrayPieces(shuffled)
    setGrid(Array(totalPieces).fill(null))
    setIsSolved(false)
  }, [details])

  useEffect(() => {
    const isComplete = grid.every((val, idx) => val === idx)
    setIsSolved(isComplete)

    if (isComplete && details.facts?.length) {
      const randomIndex = Math.floor(Math.random() * details.facts.length)
      setRandomFact(details.facts[randomIndex])
    }
  }, [grid, details])

  const sensors = useSensors(useSensor(PointerSensor))
  const handleDragEnd = ({ active, over }) => {
    if (!over) return

    const activeId = active.id
    const overId = over.id

    const fromTrayIndex = trayPieces.indexOf(activeId)
    const toGridIndex = grid.findIndex((_, i) => `cell-${i}` === overId)
    const fromGridIndex = grid.findIndex((id) => id === activeId)

    if (fromTrayIndex !== -1 && toGridIndex !== -1) {
      const newGrid = [...grid]
      const existingPiece = newGrid[toGridIndex]

      newGrid[toGridIndex] = activeId
      setGrid(newGrid)

      const newTray = [...trayPieces]
      newTray.splice(fromTrayIndex, 1)
      if (existingPiece !== null) newTray.push(existingPiece)
      setTrayPieces(newTray)
      return
    }

    if (
      fromGridIndex !== -1 &&
      toGridIndex !== -1 &&
      fromGridIndex !== toGridIndex
    ) {
      const newGrid = [...grid]
      const temp = newGrid[toGridIndex]
      newGrid[toGridIndex] = activeId
      newGrid[fromGridIndex] = temp
      setGrid(newGrid)
      return
    }

    if (fromGridIndex !== -1 && overId.startsWith("tray")) {
      const newGrid = [...grid]
      newGrid[fromGridIndex] = null
      setGrid(newGrid)

      const newTray = [...trayPieces, activeId]
      setTrayPieces(newTray)
    }
  }

  useEffect(() => {
    if (nodeRef.current && isOpen) {
      const modal = nodeRef.current
      const parent = modal.parentElement
      if (parent) {
        const parentRect = parent.getBoundingClientRect()
        const modalRect = modal.getBoundingClientRect()
        const left = (parentRect.width - modalRect.width) / 2
        const top = (parentRect.height - modalRect.height) / 2
        modal.style.left = `${left}px`
        modal.style.top = `${top}px`
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <Draggable
      handle=".puzzle-title-bar"
      nodeRef={nodeRef}
      bounds="parent"
      cancel=".no-drag"
    >
      <div
        ref={nodeRef}
        className="absolute border-[3px] border-[#543312] rounded-[20px] m-4 shadow-inner shadow-[4px_4px_0px_rgba(0,0,0,0.4)] bg-[#F0F0F0] z-50 font-coustard flex flex-col overflow-hidden"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "90%",
          height: "85%",
        }}
      >
        <div className="puzzle-title-bar flex items-center justify-between bg-transparent text-[#543312] text-sm px-2 py-1 cursor-move mt-[5px] ml-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[13px]">Puzzle</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <button
              className="z-[60] no-drag w-[22px] h-[22px] border-[2.5px] border-[#543312] text-[#543312] font-bold text-[13px] rounded-[2px] hover:bg-[#f5e9d8]"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#543312]" />

        <div className="flex-1 overflow-y-auto w-full p-2 ">
          <div className="w-full h-full relative justify-center items-center flex-col flex">
            <h1
              dangerouslySetInnerHTML={{
                __html: details.name,
              }}
              onClick={() => setIsSolved(true)}
            />
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <div className="flex justify-center items-start gap-6 ">
                <div
                  className="grid grid-cols-2 gap-2"
                  style={{ width: pieceSize * 2 }}
                >
                  {trayPieces
                    .slice(0, Math.ceil(trayPieces.length / 2))
                    .map((id) => (
                      <div key={`tray-${id}`} id={`tray-${id}`}>
                        <Piece id={id} index={id} imageUrl={details.img} />
                      </div>
                    ))}
                </div>
                <img
                  src={Images.oldpaper}
                  alt={"puzzle"}
                  className="absolute -z-10 w-full h-full -top-0"
                />

                <div className="relative">
                  <div
                    className="grid gap-1 shadow-xl rounded-lg p-1 border-4 border-amber-900 justify-center"
                    style={{
                      gridTemplateColumns: `repeat(${cols}, ${pieceSize}px)`,
                      gridTemplateRows: `repeat(${rows}, ${pieceSize}px)`,
                      width: cols * pieceSize + 25,
                      height: rows * pieceSize + 25,
                    }}
                  >
                    {grid.map((pieceId, i) => (
                      <PuzzleCell key={`cell-${i}`} id={`cell-${i}`}>
                        {pieceId !== null && (
                          <Piece
                            id={pieceId}
                            index={pieceId}
                            imageUrl={details.img}
                          />
                        )}
                      </PuzzleCell>
                    ))}
                  </div>
                </div>

                <div
                  className="grid grid-cols-2 gap-2"
                  style={{ width: pieceSize * 2 }}
                >
                  {trayPieces
                    .slice(Math.ceil(trayPieces.length / 2))
                    .map((id) => (
                      <div key={`tray-${id}`} id={`tray-${id}`}>
                        <Piece id={id} index={id} imageUrl={details.img} />
                      </div>
                    ))}
                </div>
              </div>
            </DndContext>
            {isSolved && (
              <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden z-50">
                <img
                  src={details.img}
                  alt="Solved Puzzle"
                  className="w-full h-full object-cover rounded-lg absolute top-0 left-0 z-10"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center z-20 p-4">
                  <div className="text-white text-xl font-bold text-center mb-4">
                    🎉 Great job! Puzzle complete!
                    <br />
                    Did you know? <br />
                    <span className="italic text-lg">{randomFact}</span>
                  </div>
                  <button
                    className="mt-2 bg-orange-200 hover:bg-amber-700 text-amber-950 font-bold py-2 px-4 rounded"
                    onClick={() => {
                      const shuffled = shuffleArray(
                        Array.from({ length: totalPieces }, (_, i) => i)
                      )
                      setTrayPieces(shuffled)
                      setGrid(Array(totalPieces).fill(null))
                      setIsSolved(false)
                    }}
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Draggable>
  )
}
