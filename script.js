
// Function thats rotate 2d matrix by 90 degrees
function rotate2d (matrix){
    let emptyMatrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
        ]
    for (let c = 0 ; c < 3 ; c++){
        for(let r = 0 ; r < 3 ; r++){
            emptyMatrix[2-r][c] = matrix[c][r]
        }
    }
        return emptyMatrix
}
function mirorMatrix (matrix){
    let emptyMatrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
        ]
    for (let c = 0 ; c < 3 ; c++){
        for(let r = 0 ; r < 3 ; r++){
            emptyMatrix[c][2-r] = matrix[c][r]
        }
    }
        return emptyMatrix
}
function formingMagicSquare(s) {
    // Write your code here
    let
        equivilant =[[
            [8,3,4],
            [1,5,9],
            [6,7,2]
        ]],
        mirrored = [],
        ways = [],
        main = s;
    
    for(let i = 0 ; i < 3 ; i++){
        equivilant.push(rotate2d(equivilant[i]))
    }
    
    mirrored.push(mirorMatrix(equivilant[0]));
    for(let i = 0 ; i < 3 ; i++){
        let there = rotate2d(mirrored[i])
        mirrored.push(there)
        console.log(there)
    };
    equivilant.push(...mirrored)
    // to Print the matrix :
    // let final = equivilant[0];
    // let string = ""
    // for(let i in final){
    //     let row = ""
    //     for (let r in final[0]){
    //         row += `${final[i][r]} `
    //     }
    //     row += "\n"
    //     string += row
    // }
    // return string
    // ________________
    // ________________
    // ________________
    // now we start comparing all maticies with the given one
    for(let i in equivilant){
        let errors = 0;
        for(let r in s){
            for(let c in s){
                if(equivilant[i][c][r] != s[r][c]){errors++}
            }
        }
        ways.push(errors)
    }
    return Math.min(...ways)
}

console.log(formingMagicSquare([
    [8,3,4],
    [3,2,9],
    [6,7,2]
]))