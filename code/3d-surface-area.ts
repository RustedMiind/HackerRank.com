function rowsToColumns(rows: number[][]): number[][] {
  if (!rows[0]) return [];
  const columns: number[][] = [];

  for (let i in rows[0]) {
    columns.push([]);
  }

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    for (let j = 0; j < columns.length; j++) {
      columns[j].push(rows[i][j]);
    }
  }
  return columns;
}

function calculateRowSurfacesArea(row: number[]): number {
  if (!row.length) return 0;
  let sum = row[0] + row[row.length - 1];
  for (let i = 1; i < row.length; i++) {
    sum += Math.abs(row[i] - row[i - 1]);
  }
  return sum;
}

function surfaceArea(rows: number[][]): number {
  const columns: number[][] = rowsToColumns(rows);
  const boardRows = rows.length,
    boardColumns = columns.length;

  let totalArea = boardRows * boardColumns * 2;
  rows.forEach((row) => {
    totalArea += calculateRowSurfacesArea(row);
  });
  columns.forEach((row) => {
    totalArea += calculateRowSurfacesArea(row);
  });
  return totalArea;
}
