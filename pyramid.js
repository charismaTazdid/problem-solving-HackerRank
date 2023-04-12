
const buildPyramid = (row) => {
    for (let i = 0; i < row; i++) {
        let level = "";
        for (let j = 0; j < i + 1; j++) {
            level += "PP ";
        }
        console.log(level);
    }
}

buildPyramid(7);
