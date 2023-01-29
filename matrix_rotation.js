function matrixRotation(m, rotations) {
  function matrixRotationOneTime(matrix = m) {
    // Write your code here
    // console.log(matrix);
    let restultMatrix = createEmpty2DArray(matrix.length, matrix[0].length);
    function handleOrbital(
      // first parameter :
      matrixToHandle = [...matrix],
      // second parameter :
      border = {
        topLeft: [0, 0],
        topRight: [0, matrix[0].length - 1],
        bottomLeft: [matrix.length - 1, 0],
        bottomRight: [matrix.length - 1, matrix[0].length - 1],
      }
      // for loop for y axis
    ) {
      for (let y = border.topLeft[0]; y <= border.bottomLeft[0]; y++) {
        // console.log(
        //   "Row : ",
        //   y,
        //   "Length : ",
        //   border.bottomLeft[0] - border.topRight[0] + 1
        // );
        // for loop for x axis
        for (let x = border.topLeft[1]; x <= border.topRight[1]; x++) {
          // console.log(y, x, "Value : ", matrixToHandle[y][x]);
        }
      }
      let orbitalXLength = border.topRight[1] - border.bottomLeft[1] + 1,
        orbitalYLength = border.bottomRight[0] - border.topRight[0] + 1;
      // loop that loops in border Elements only
      // Write code inside the if condition only
      let tempArr = createEmpty2DArray(matrix[0].length, matrix[1].length);
      // console.log("Result Matrix Before ", tempArr);
      for (
        let rowIndex = border.topLeft[0];
        rowIndex <= border.bottomRight[0];
        rowIndex++
      ) {
        for (
          let columnIndex = border.topLeft[1];
          columnIndex <= border.bottomRight[1];
          columnIndex++
        ) {
          if (
            (rowIndex >= border.topLeft[0] &&
              rowIndex <= border.bottomRight[0] &&
              (columnIndex === border.bottomLeft[1] ||
                columnIndex === border.topRight[1])) ||
            (columnIndex >= border.topLeft[1] &&
              columnIndex <= border.bottomRight[1] &&
              (rowIndex === border.bottomLeft[0] ||
                rowIndex === border.topRight[0]))
          ) {
            // Write your code here for border elements
            // console.log("Calling step function");
            let direction = "";
            if (
              rowIndex === border.topLeft[0] &&
              columnIndex === border.topLeft[1]
            ) {
              direction = "row+";
            } else if (
              rowIndex === border.topRight[0] &&
              columnIndex === border.topRight[1]
            ) {
              direction = "column-";
            } else if (
              rowIndex === border.bottomLeft[0] &&
              columnIndex === border.bottomLeft[1]
            ) {
              direction = "column+";
            } else if (
              rowIndex === border.bottomRight[0] &&
              columnIndex === border.bottomRight[1]
            ) {
              direction = "row-";
            } else if (rowIndex === border.topRight[0]) {
              direction = "column-";
            } else if (columnIndex === border.topLeft[1]) {
              direction = "row+";
            } else if (columnIndex === border.bottomRight[1]) {
              direction = "row-";
            } else if (rowIndex === border.bottomLeft[0]) {
              direction = "column+";
            }
            let [setRow, setColumn] = elementStep(
              [rowIndex, columnIndex],
              direction
            );
            // console.log(
            //   "old Row index",
            //   rowIndex,
            //   "old column index",
            //   columnIndex
            // );
            // console.log("New Row index", setRow, "New column index", setColumn);
            restultMatrix[setRow][setColumn] =
              matrixToHandle[rowIndex][columnIndex];
            // console.log(matrixToHandle[rowIndex][columnIndex]);
          }
        }
      }
      // console.log("Result Matrix After ", restultMatrix);
      // console.log("Test array handling", tempArr);
      // console.log(border);
      // console.log(`Length [X : ${orbitalXLength}] , Y : ${orbitalYLength}`);
      if (orbitalXLength > 2 && orbitalYLength > 2) {
        let borderNew = {
          topLeft: border.topLeft,
          topRight: border.topRight,
          bottomLeft: border.bottomLeft,
          bottomRight: border.bottomRight,
        };
        borderNew.topLeft = [
          borderNew.topLeft[0] + 1,
          borderNew.topLeft[1] + 1,
        ];
        borderNew.topRight = [
          borderNew.topRight[0] + 1,
          borderNew.topRight[1] - 1,
        ];
        borderNew.bottomLeft = [
          borderNew.bottomLeft[0] - 1,
          borderNew.bottomLeft[1] + 1,
        ];
        borderNew.bottomRight = [
          borderNew.bottomRight[0] - 1,
          borderNew.bottomRight[1] - 1,
        ];
        handleOrbital(matrixToHandle, borderNew);
      }

      // console.log("Last Line of Code : ", restultMatrix, matrix);
    }
    function elementStep(position, direction) {
      // console.log("One element mooved");
      let positionNew = [null, null];
      switch (direction) {
        case "row+":
          positionNew = [position[0] + 1, position[1]];
          break;
        case "column+":
          positionNew = [position[0], position[1] + 1];
          break;
        case "row-":
          positionNew = [position[0] - 1, position[1]];
          break;
        case "column-":
          positionNew = [position[0], position[1] - 1];
          break;

        default:
          break;
      }
      return positionNew;
    }
    function createEmpty2DArray(rows, columns) {
      let result = [];
      for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
          row.push("");
        }
        result.push(row);
      }
      return result;
    }
    handleOrbital();
    return restultMatrix;
  }
  let matrixToEdit = m;
  for (let i = 0; i < rotations; i++) {
    matrixToEdit = matrixRotationOneTime(matrixToEdit);
  }
  for (let i = 0; i < matrixToEdit.length; i++) {
    console.log(...matrixToEdit[i]);
  }
}
matrixRotation(
  [
    [1, 2, 3, 4],
    [7, 8, 9, 10],
    [13, 14, 15, 16],
    [19, 20, 21, 22],
    [65, 75, 42, 11],
  ],
  2
);
