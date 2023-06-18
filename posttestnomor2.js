/* // Soal:
// Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}
// Tidak boleh langsung print expected output
/*
Expected Output:
{ max: 67, min: 6 }
*/
// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting
/*
// Jawaban:
const array = [31, 9, 54, 11, 43, 6, 67]

function maxMin(array) {
    // write your code here
}

console.log(maxMin(array)) */

const array = [ 31, 9, 54, 11, 43, 6, 67 ];

//mencari nilai minimun
let min = (array, min=array[0]) => {
    for(let i = 0; i<array.length; i++){
        if(min>array[i]) min=array[i]
    }
    return min;
}

 //mencari nilai max
let max = (array, max=array[0]) => {
    for(let i = 0; i<array.length; i++){
        if(max<array[i]) max=array[i]
    }
    return max;
}

console.log( "Nilai minimun pada array adalah :" + min(array) + " " + "," + " " + "Nilai maksimum pada array adalah :" + max(array)) 
