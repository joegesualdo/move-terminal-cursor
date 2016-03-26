"use strict";

var csi = require("control-sequence-introducer");

function moveTerminalCursor(type, opts) {
  opts = opts || {};

  switch(type) {
    case "up":
      cursorUp(opts.count || opts.row || 1)
      break;
    case "down":
      cursorDown(opts.count || opts.row || 1)
      break;
    case "right":
      cursorForward(opts.count || opts.col || 1)
      break;
    case "left":
      cursorBack(opts.count || opts.col || 1)
      break;
    case "nextLine":
      cursorNextLine(opts.count || 1)
      break;
    case "prevLine":
      cursorPrevLine(opts.count || 1)
      break;
    case "toCol":
      if (!opts.col) {
        throw new Error("Must provide 'col' option for the 'toCol' movement type.");
      }
      cursorToColumn(opts.col || 1)
      break;
    case "toPos":
      if (!opts.row || !opts.col) {
        throw new Error("Must provide 'row' and 'col' options for the 'toPos' movement type.");
      }
      cursorToPosition(opts.col, opts.row)
      break;
    default:
      throw new Error("Must provide a valid type argument.");
      break;
  }
}

// Helper Cursor Functions ===================================================
// TODO: Extract String functions into seprate modules.
// Moves the cursor cellNum (default 1) cells in the given direction. If the cursor is already 
//   at the edge of the screen, this has no effect.
function cursorUpString(cellNum) {
  return csi + cellNum + "A"
}
function cursorUp(cellNum) {
  process.stdout.write(cursorUpString(cellNum))
}

// Moves the cursor cellNum (default 1) cells in the given direction. If the cursor is already 
//   at the edge of the screen, this has no effect.
function cursorDownString(cellNum) {
  return csi + cellNum + "B"
}
function cursorDown(cellNum) {
  process.stdout.write(cursorDownString(cellNum))
}

// Moves the cursor cellNum (default 1) cells in the given direction. If the cursor is already 
//   at the edge of the screen, this has no effect.
function cursorForwardString(cellNum) {
  return csi + cellNum + "C"
}
function cursorForward(cellNum) {
  process.stdout.write(cursorForwardString(cellNum))
}

// Moves the cursor cellNum (default 1) cells in the given direction. If the cursor is already 
//   at the edge of the screen, this has no effect.
function cursorBackString(cellNum) {
  return csi + cellNum + "D"
}
function cursorBack(cellNum) {
  process.stdout.write(cursorBackString(cellNum))
}


// Moves cursor to beginning of the line n (default 1) lines down. (not ANSI.SYS)
function cursorNextLineString(n) {
  return csi + n + "E"
}
function cursorNextLine(n) {
  process.stdout.write(cursorNextLineString(n))
}
// Moves cursor to beginning of the line n (default 1) lines up. (not ANSI.SYS)
function cursorPrevLineString(n) {
  return csi + n + "F"
}
function cursorPrevLine(n) {
  process.stdout.write(cursorPrevLineString(n))
}

// Moves the cursor to column n (default 1). (not ANSI.SYS)
function cursorToColumnString(n) {
  return csi + n + "G"
}
function cursorToColumn(n) {
  process.stdout.write(cursorToColumnString(n))
}

// Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.
function cursorToPositionString(row, col) {
  return csi + row + ";" + col + "H"
}
function cursorToPosition(row, col) {
  process.stdout.write(cursorToPositionString(row, col))
}

function hideCursorString() {
  return csi + "?25l"
}
function hideCursor() {
  process.stdout.write(hideCursorString())
}
function showCursorString() {
  return csi + "?25h"
}
function showCursor() {
  process.stdout.write(showCursorString())
}

module.exports = moveTerminalCursor;
