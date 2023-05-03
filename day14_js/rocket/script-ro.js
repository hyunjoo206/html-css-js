//target 선언
let target = document.getElementById("dynamic");

//target 위치에 뿌려질 글자들을 배열로 저장 후 랜덤 선택 화면에 뿌림
function randomString(){
    // 배열에 글자 담기
    let stringArr =['Learn to HTML', 'Learn to CSS', 'Learn to Javascript',
    'Learn to Python', 'Learn to Java']
    //랜덤으로 뿌려지기 위해서 num(인덱스에 쓰려고)에 숫자 담기 
    //배열에 추가될 수도 있으니 숫자가 아니라 배열.length로 랜덤수 생성하기
    let num = Math.floor(Math.random()*stringArr.length); //인덱스의 넘버
    console.log(num);
    // 랜덤 index의 글자 선택
    let selectString = stringArr[num];
    console.log(selectString)
    //선택된 문자열을 잘라서 selectStringArr 배열에 담기
    let selectStringArr = selectString.split("");
    //split("") : ""를 기준으로 잘라서 배열로 리턴
    console.log(selectStringArr);
    return selectStringArr;
}

//글자 출력 끝나면 target 지우고 다시 print
function reset(){
    target.textContent=""; //지워지고
    printString(randomString()); //다시 출력하는 함수호출(매개변수 입력해줘야 함)
}

//한글자씩 출력
function printString(randomArr){ //randomArr는 글자 가져온
    console.log(randomArr);
    //shift : 배열의 앞쪽에서 한 글자를 빼서 리턴
    if(randomArr.length > 0){ //아직 글자가 남아있다면,
        target.textContent += randomArr.shift(); //textContent로 넣어야 띄어쓰기 가능
        setTimeout(function(){ //Timeout으로 나를 호출
            printString(randomArr);
        },100);
    }else{
        // reset();
        setTimeout(reset,2000);
    }
    // let s = randomArr.shift();
    // console.log(str);
    // console.log(randomArr);
}

printString(randomString());


//커서 깜빡이는 효과 함수
function blink(){
    target.classList.toggle("active"); //dynamic에 active 클래스 추가, 반복
}

//깜빡이는 속도 지정
// setInterval(callback function, interval duartion) : 
// duration(millisecond)을 주기로 지속적으로 callback function 호출
setInterval(blink, 500);


