// 4) Вам дан массив, элементами которого являются массивы.
// const arr = [
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ],
// ];...

const arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    ];
    let arrs = arr.concat(...arr)
    console.log(...arr)
    console.log(arrs)