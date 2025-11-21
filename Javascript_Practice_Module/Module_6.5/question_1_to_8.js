                    // question-1
const num = 80;
if (num >= 0 && num <= 32) {
    console.log("F");
}
else if (num >= 33 && num <= 39) {
    console.log("D");
}
else if (num >= 40 && num <= 49) {
    console.log("C");
}
else if (num >= 50 && num <= 59) {
    console.log("B");
}
else if (num >= 60 && num <= 69) {
    console.log("A-");
} 
else if (num >= 70 && num <= 79) {
    console.log("A");
} 
else if (num >= 80 && num <= 100) {
    console.log("A+");
} 
else {
    console.log("Invalid imput");
}


                        // question-2
const n = 20;
if(n%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

                        // question-3

const arr=[12, 1, 19, 4, 17, 9, 6, 20, 3, 15, 5, 2, 10, 8, 13, 18, 7, 14, 11, 16]  
for (let i = 0; i< arr.length; i++) {
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
        let tmp=arr[i];
        arr[i]=arr[j];
        arr[j]=tmp;
    }
  }
}  
console.log(arr)                    


                          // question-4

const check_leap=(year)=>{
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return true;
    }
    return false;
}
const year=2024;
const result=check_leap(year);
console.log(result);

                            // question-5

for(let i=1;i<=50;i++){
    if(i%3==0 && i%3==0){
        console.log(i);
    }
}

                               // question-6
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var mx=friends[0];
for(let i=0;i<friends.length;i++){
    if(friends[i].length>mx.length){
        mx=friends[i];
    }
}   
console.log(mx);                           

                                // question-7
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var ans=[];
for(let i=0;i<numbers.length;i++){
    if(!ans.includes(numbers[i])){
        ans.push(numbers[i]);
    }
}  
console.log(ans);    

                                // question-8
let mx_num=numbers[0]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>mx_num){
        mx_num=numbers[i];
    }
}
console.log(mx_num);

                                    //question-9

const savings=(arr,cost)=>{
    if(!Array.isArray(arr) || Array.isArray(cost)){
        return `invalid input`
    }
    let text=0;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=3000){
            sum+=(arr[i]-(arr[i]*20/100));
        }
        else{
            sum+=arr[i];
        }
    }
    let remain=sum-cost;
    if(remain<0){
        return`Earn more`;
    }
    else{
        return remain;
    }
}
const check=savings(10000,[900,2700,3400]);
console.log(check);
