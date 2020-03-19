// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length==0) return [];
    matrix.forEach((element, index) => {
        if (index%2==1) element = element.reverse();
    });
    return matrix.flat();
}
