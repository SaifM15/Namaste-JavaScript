let marks=[51,82,73,94,null,false,"Saif Mulla"]
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);  //will be undefined because index is 6 and we print is 7
console.log("The Array length is  " + marks.length);
marks[5]=99
console.log("here we can replace false to 99 :-  " +marks)

marks[1]=96
console.log("here we can add 82 to 96 :- " + marks);

for(let i=0;i<marks.length;i++){
    console.log( marks[i])
}