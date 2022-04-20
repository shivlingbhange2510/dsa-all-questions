// check symetric of matrix

function checkHV(arr, N, M)
    {
   
        // Initializing as both horizontal
        // and vertical symmetric.
        let horizontal = true;
        let vertical = true;
        
   
        // Checking for Horizontal Symmetry.
        // We compare first row with last
        // row, second row with second
        // last row and so on.
        for (let i = 0, k = N - 1;
             i < parseInt(N / 2, 10); i++, k--) {
   
            // Checking each cell of a column.
            for (let j = 0; j < M; j++) {
                // check if every cell is identical
                if (arr[i][j] != arr[k][j]) {
                    horizontal = false;
                    break;
                }
            }
        }
   
        // Checking for Vertical Symmetry. We compare
        // first column with last column, second xolumn
        // with second last column and so on.
        for (let i = 0, k = M - 1;
             i <N, k>=0; i++, k--) {
   
            // Checking each cell of a row.
            for (let j = 0; j < N; j++) {
                // check if every cell is identical
                if (arr[i][j] != arr[k][j]) {
                    horizontal = false;
                    break;
                }
            }
        }
   
        if (!horizontal && !vertical)
            console.log("NO");
   
        else if (horizontal && !vertical)
            console.log("HORIZONTAL");
   
        else if (vertical && !horizontal)
            console.log("VERTICAL");
   
        else
            console.log("BOTH");
    }
     
    let mat = [ [ 1, 2, 1 ],
               [ 0, 0, 0 ],
               [ 1, 0, 1 ] ];
   
      checkHV(mat, 3, 3);
 
 runProgram(`3
 4
 *.*.
 .*.*
 *.*.
 .*.*
 3
 .*.
 *.*
 .*.
 3
 ..*
 **.
 ..*`)
                                                                                                                                               