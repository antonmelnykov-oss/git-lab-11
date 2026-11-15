const grades = [10, 8, 12, 7, 9, 11];

function getAverage(nums){
    let ave = 0;

    for(let i = 0; i < nums.length; i++){
        ave += nums[i];
    }

    ave = ave / nums.length;

    return ave;
}

function getMax(nums){
    let max = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
    }

    return max
}

function getNumOfHighMarks(nums){
    let num = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= 10){
            num++;
        }
    }

    return num
}

function callFuncs(nums){
    console.log("Середній бал студента:", getAverage(nums));
    console.log("Найвища оцінка:", getMax(nums));
    console.log("Кількість високих оцінок:", getNumOfHighMarks(nums));
}

let marks = "";

for(let i = 0; i < grades.length; i++){
    if(i !== grades.length - 1){
        marks += grades[i] + ", ";
    }else{
        marks += grades[i];
    }
}

console.log("===== АНАЛІЗ ОЦІНОК =====");
console.log();
console.log("Оцінки студента:", marks);
console.log();
console.log("Кількість оцінок:", grades.length);
callFuncs(grades);
console.log();
console.log("=========================");