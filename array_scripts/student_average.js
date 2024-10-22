function getAverage(scores){
    let total = 0;
    for (let i =0; i < scores.length; i++){
     total += scores[i];
    }
    let average = total / scores.length;
    return average;
 }
 

let studentList = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

   for(i = 0 ; i < studentList.length; i++){
    let student = studentList[i];
    console.log("Name: " , student.name , "Average: ", getAverage(student.scores).toFixed(2))
   }