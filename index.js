var readlineSync=require('readline-sync');

var name=readlineSync.question('Hey! Whats your name? ');
console.log('Welcome '+name+' to [DO YOU KNOW Rashita]- Game!');
console.log("lets Play!");

var score=0;
function play(question, answer){
  var user_ans=readlineSync.question(question);
  if(user_ans===answer){
    console.log("You are Right! ");
    score++;
  }else{
    console.log("Oops! You are wrong!");
  }
}

questionOne="Where do I live? ";
answerOne="Ferozepur";

var quest_ans = [
  Two={
    question="What language I am currently into? ";
    answer="JavaScript";
  }
]
for(var i=0;i<quest_ans.length;i++)
{
  play(quest_ans[i].question,quest_ans[i].answer);
}
