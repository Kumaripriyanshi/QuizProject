console.log("jai mata di")

let startQuiz=document.querySelector("main .btn")
let main=document.getElementsByTagName('main')[0]
let questions=document.getElementById('questions')
let btn1=document.getElementsByClassName("btn")[1]
let btn2=document.getElementsByClassName("btn")[2]
let btn3=document.getElementsByClassName("btn")[3]
let btn4=document.getElementsByClassName("btn")[4]
let p=document.getElementById('check')
let viewScore=document.getElementById('leaderboard')
console.log(viewScore)
let TimeCount=document.querySelector("#time p")
// console.log(TimeCount)
let h=questions.children[0]; 
// console.log(h)
// console.log(btn)
// console.log(questions)
// console.log(main)
// console.log(startQuiz.getvalue)
let highSc=document.getElementById('highScore')
let init=document.getElementById('initials')
init.style.display='none'
highSc.style.display='none'
// p.style.display='none'

questionset=["Answer the following questions","Answer these following questions"]
solutionset=["Start Quiz","1.H"]
optionset=[["1.A","1.B","1.C","1.D"],["1.E","1.F","1.G","1.H"]]
// optionset.forEach(element => {
//     console.log(element)
// });
// console.log(optionset[0][0])
i=0;
time=60;
score=0
let intervalId;
var disp=main;
startQuiz.addEventListener("click",(e)=>{
    main.style.display='none';
    // main.style.transition='200s'
    disp=startQuiz
    // setTimeout(show,1000)
    show()
  intervalId=setInterval(Time,1000)
    // questions.style.display='block'
})

function Time(){
    TimeCount.innerText=time--
    console.log(i)
    if(time<0 || i==questionset.length){
        questions.style.display='none'
        disp=init
        init.style.display='block'
        clearInterval(intervalId)
    } 
}


let addtoLocal=document.getElementById('addtoLocal')


addtoLocal.addEventListener('click',()=>{
    scoreStore()
    init.style.display='none'
    main.style.display='block'
})


function show(){
    questions.style.display='block'
}

btn1.addEventListener('click',function(){
    disp=btn1
 

    if(i!=questionset.length){
        
        if(btn1.innerText==solutionset[i]){
            p.innerText="Correct!";
            score+=10
            } else{
                
                p.innerText="InCorrect!";
                time-=10
            } 
            i++;
            setTimeout(()=>{
                p.innerText=" ";
                if(i!=questionset.length){
                    h.innerText=questionset[i];
                //  p.replaceChild(text1,text)
                  set();}
            },1000)
        }
})

btn2.addEventListener('click',function(){
    disp=btn2
    if(i!=questionset.length){
        
        if(btn2.innerText==solutionset[i]){
            p.innerText="Correct!";
            score+=10
            } else{
                p.innerText="Incorrect";
                time-=10
            } 
    
    
            i++;
            setTimeout(()=>{
                p.innerText=" ";
                if(i!=questionset.length){
                    h.innerText=questionset[i];
                //  p.replaceChild(text1,text)
                  set();}
            },1000)
       
        
    
        }

})

function set(){
    btn1.innerText= optionset[i][0]
    btn2.innerText= optionset[i][1]
    btn3.innerText= optionset[i][2]
    btn4.innerText= optionset[i][3]
}

btn3.addEventListener('click',function(){
    disp=btn3
    if(i!=questionset.length){
        
        if(btn3.innerText==solutionset[i]){
            p.innerText="Correct!";
            score+=10
            }else{
                p.innerText="Incorrect";
                time-=10
            } 
    
    
            i++;
            setTimeout(()=>{
                p.innerText=" ";
                if(i!=questionset.length){
                    h.innerText=questionset[i];
                //  p.replaceChild(text1,text)
                  set();}
            },1000)
       
        
    
        }
})

btn4.addEventListener('click',function(){
    // console.log(i)
    disp=btn4
    if(i!=questionset.length){
        
    if(btn4.innerText==solutionset[i]){
        p.innerText="Correct!";
        score+=10
        } else{
                p.innerText="Incorrect";
                time-=10
            } 
        i++;
        setTimeout(()=>{
            p.innerText=" ";
            if(i!=questionset.length){
                h.innerText=questionset[i];
            //  p.replaceChild(text1,text)
              set();}
        },1000)

    } 
})


  

// let scoreArea=localStorage.getItem('scores')
// scoreArea=JSON.parse(scoreArea)
// console.log(scoreArea[0])
// let InpText=document.querySelector("input[type=text]")
// console.log(InpText.value)
function scoreStore(){
    // console.log("he")
    let scores=localStorage.getItem('scores')
    if(scores==null){
        scoreAreas=[]
    }else{
        scoreAreas=JSON.parse(scores)
    }
    let InpText=document.querySelector("input[type=text]")
console.log(InpText.value)
  
    let obj={
         sc:score,
         x:InpText.value
     }
    scoreAreas.push(obj)
    localStorage.setItem('scores',JSON.stringify(scoreAreas))
}


viewScore.addEventListener('click',()=>{
    init.style.display='none'
    questions.style.display='none'
    main.style.display='none';
    highSc.style.display='block'

    let scores=localStorage.getItem('scores')
    if(scores==null){
        scoreAreas=[]
  }else{
      scoreAreas=JSON.parse(scores)
  }
  let html='';
  scoreAreas.forEach(function(element,index){
      html+=`<p>${index+1}. ${element.x}-${element.sc}</p>`
    //   console.log(index)
  });
  let add=document.getElementById('Scores')
  add.innerHTML=html;
//   console.log("hello")
})

document.getElementById('goback').addEventListener('click',()=>{
    console.log(disp)
    questions.style.display='none'
            init.style.display='none'
            main.style.display='none';
            highSc.style.display='none'
    if(disp==btn1 ||disp==btn2||disp==btn3||disp==btn4){
            questions.style.display='block'
            // init.style.display='none'
            // main.style.display='none';
            // highSc.style.display='none'
    }else if( disp==main){
        console.log('hello')
        main.style.display='block';
        // questions.style.display='none'
        //     init.style.display='none'
        //     highSc.style.display='none'
    }else if(disp==init){
         init.style.display='block'
        //  main.style.display='none'
        //  questions.style.display='none'
        //     highSc.style.display='none'
    }else{
        console.log('hello@')
        questions.style.display='block'
        // init.style.display='none'
        //     main.style.display='none';
        //     highSc.style.display='none'
    }

})

document.getElementById('clear').addEventListener('click',()=>{
    localStorage.clear();
    let html=''
    let add=document.getElementById('Scores')
  add.innerHTML=html;

})