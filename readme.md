## Move Terminal Cursor
> Move a terminal cursor (right, left, up, down, etc).

## Install
```
$ npm install --save move-terminal-cursor 
```

## Usage
```javascript
var move = require("move-terminal-cursor")

move("up", {count: 5})
move("down", {count: 5})
move("right", {count: 5})
move("left", {count: 5})
move("nextLine", {count: 5})
move("prevLine", {count: 5})
move("toCol", {col: 10})
move("toPos", {row: 10, col: 10})

console.log("Meow")
```

## API
### `move(type, opts)`
> Moves the terminal cursor.

| Name | Type | Description |
|------|------|-------------|
| type | `String` | Where you want the cursor to move.
| opts | `Object` | Options (see available options below)

#### Available types 
|types |
|------|
| [up](#up)   |
| [down](#down) |
| [right](#right)|
| [left](#left) |
| [nextLine](#nextLine) |
| [prevLine](#prevLine) |
| [toCol](#toCol) |
| [toPos](#toPos) |

#### Available options 
| Name | Type | Description |
|------|------|-------------|
| x | `Number` | The x cord.
| y | `Number` | The y cord.
| count | `Number` | The number of movements.

## Required options for movement types.
### "up"<a name="up"></a>
### `move("up", opts)`
> Must provide 'count' key/value to options object.
```javascript
move("up", {count: 5})
```
### "down"<a name="down"></a>
### `move("down", opts)`
> Must provide 'count' key/value to options object.
```javascript
move("down", {count: 5})
```
### "right"<a name="right"></a>
### `move("right", opts)`
> Must provide 'count' key/value to options object.
```javascript
move("right", {count: 5})
```
### "left"<a name="left"></a>
### `left("right", opts)`
> Must provide 'count' key/value to options object.
```javascript
move("left", {count: 5})
```
### "nextLine"<a name="nextLine"></a>
### `move("nextLine", opts)`
> Must provide 'count' key/value to options object.
```javascript
move("nextLine", {count: 5})
```
### "prevLine"<a name="prevLine"></a>
### `move("prevLine", opts)`
> Must provide 'count' key/value to options object.
```javascript
move("prevLine", {count: 5})
```
### "toCol"<a name="toCol"></a>
### `move("toCol", opts)`
> Must provide 'col' key/value to options object.
```javascript
move("toCol", {col: 5})
```
### "toPos"<a name="toPos"></a>
### `move("toPos", opts)`
> Must provide 'col' and 'row' key/values to options object.
```javascript
move("toPos", {row: 5, col: 10})
```

## Related
- [terminal-cursor](https://github.com/joegesualdo/terminal-cursor) - Manipulate and keep track of the terminal cursor (move, hide, show, etc)

## License
MIT © [Joe Gesualdo]()
