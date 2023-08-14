function flipColor(image, x, y) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let color = image[x][y];
    let queue = [];
    image[x][y] = Number(!color);
    queue.push([x, y]);
    let currentPosition, neighbor;
    while (queue.length) {
        currentPosition = queue.shift();
        for (const direction of directions) {
            neighbor = [currentPosition[0] + direction[0], currentPosition[1] + direction[1]];
            if (isFeasible(image, neighbor, color)) {
                image[neighbor[0]][neighbor[1]] = Number(!color);
                queue.push([neighbor[0], neighbor[1]]);
            }
        }
    }
    return image;
}
function isFeasible(image, indices, color) {
    let x = indices[0], y = indices[1];
    return x >= 0 && x < image.length && y >= 0 && y < image[x].length && image[x][y] == color;
}
var image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
flipColor(image, 1, 1);