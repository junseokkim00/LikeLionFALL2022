var list = []
// for(var i=0;i<6;i++) {
//     var randomNumber = Math.random()*45+1;
//     var ball = parseInt(randomNumber);
//     if(!list.includes(ball))
//         list.push(ball);
// }

var count = 0;
while(count < 6) {
    var randomNumber = Math.random()*45+1;
    var ball = parseInt(randomNumber);
    if(!list.includes(ball)) {
        list.push(ball);
        count+=1;
    }
}
list.sort((a,b) => a-b)

document.write(list)


