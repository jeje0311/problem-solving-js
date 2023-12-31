// 1. 가장 큰 값 구하기
// 함수의 이름은 maxValue 입니다. 인자로는 정수들이 들어있는 배열을 파라미터로 전달받습니다. 배열로 전달받은 숫자 중 
//가장 큰 숫자와 숫자를 내림차순으로 정렬된 배열을 객체 형태로 반환해야 합니다. 
//git commit

// ex)
//  const a = maxValue([1,2,3,4,5])
//  console.log(a)
//  결과값
//  {
//  maxValue: 5,
//  sortArr = [5,4,3,2,1]
//  }

const maxValue = [1,2,3,4,5]

maxValue.sort((a,b)=>b-a)
console.log(maxValue)
maxValue.forEach((elements)=> console.log(elements))
console.log(maxValue.length)



// const arr = [1,2,3,4,5]
// arr.forEach((el,index,originArr)=>{
//     console.log(el)
// })


// 2. 편의점 물건 확인하기
// 당신은 편의점에서 야간 아르바이트를 하는 학생입니다
// 당신이 일하는 시간에 편의점에 채워놓을 물건이 들어오며
// 당신은 재고의 개수와 물품이 맞는지 확인해야 합니다. 일의 순서는 아래와 같습니다.
// 1. 당신은 아래와 같은 전산표를 전달받습니다. 
//품목 갯수
// 야채곱창 5
// 바나나우유 10
// 삼각김밥 15
// 도시락 10
// 샌드위치 10
// 2. 당신은 물품을 세어본 후 해당 제품이 표의 갯수와 같은지 확인해야 합니다. 
// -----------------------------------------------------------
// ----------------------------------------------------------- 
//  최종목표
// 1. 물품명과 갯수를 파라미터로 전달받는 함수를 만듭니다.
//  함수의 이름은 마음대로 하셔도 괜찮습니다. 
// 2. 만약 표의 값과 갯수가 일치하지 않는다면
//  “전산표와 일치하지 않습니다”를 로그 합니다

/**
 * 재고,물품갯수 맞는지 
 * 물품명,갯수 파라미터함수 
 * 표의 값 갯수 일치x 전산표와 일치하지않습니다 뜨게하기
 */

function 편의점(물품,갯수) {

    let 전산표 = {야채곱창:5,바나나우유:10,삼각김밥:15,도시락:10,샌드위치:10} //전산표객체
    //이 전산표 객체랑 키값이 안맞으면 물품종류가 일치하지않는다 뜨게하고싶고, 키값이 일치하지않으면 재고갯수가
    //일치하지않는다라고 뜨게하고싶음. 
    let 물품종류 = 전산표[물품] //물품이란 키값으로 5를 갖고옴 야채곱창을 넣음 5를갖고옴
    
    //지금 편의점에있는 재고갯수를 적을수있게하고싶음. 그리고 그걸 전산표랑비교해서 갯수가 일치하는지 하고싶다. 
    //그러면 지금 재고 갯수를 따로 적는거를 만들어서 전산표[물품]이랑  일치하지않으면이라고해야하나?
    
    
    // if(!물품종류) return console.log('전산표와 물품종류가 일치하지 않습니다')
    // if(갯수 !== 전산표[물품]) return console.log('전산표와 재고갯수가 일치하지 않습니다')
    if(!물품종류) return console.log('품목없음')
    if(물품종류,갯수 !== 전산표[물품]) return console.log('전산표와 일치하지 않습니다')
    if(물품종류,갯수 === 전산표[물품]) return console.log('전산표와 일치합니다')
    
    console.log(물품,갯수)
    
}
편의점('바나나우유',17)
편의점('야채곱창',5)
편의점('핫도그',3)


// 3. 배열 다루기
// 당신이 구현하고하자 하는 함수는
// 배열과 정수를 파라미터로 전달 받습니다. 
//함수 이름은 정해지지 않았으니 마음대로 하셔도 괜찮습니다. 전달받은 배열은 정확히 각 요소마다 값을 10을 더 합니다.
// 이후 값이 10씩 더해진 배열에서, 나머지 파라미터로 전달받은 정수가 있는지 확인하여
// 값이 없다면 콘솔에 검사하고자 하는 값이 없다는 로그를 보인 후 함수를 종료하세요
// 값이 있다면 해당 숫자를 제외한 배열을 반환하는 함수를 만드세요. 

//최종 목표
// 1. 해당 함수는 배열과 검사하고자 하는 수를 파라미터로 전달 받습니다. 
//2. 해당 함수는 배열의 각 요소에 10을 더한 후 검사하고자 하는 수가 있는지 검사합니다. 
//3. 만약 값이 없다면 결과값이 없습니다를 콘솔에 로그합니다. 
//4. 값이 있다면 검사하고자하는 수를 제외한 배열을 반환합니다. 
//5. 값이 없을 때 console.log에 undefined가 찍혀서는 안됩니다.
//ex)
// const arr = [1,2,3,4,5]
// const a =함수명(arr, 11)
// console.log (a)
// 결과값
// [12,13,14,15] ( 값 있음 ) ”결과값이 없습니다“ ( 값 없음 )

//일단 내가 구하고자하는 함수를 만들어야함. 그 함수는 배열과 정수를 파라미터로 전달받음. 
//해당 함수는 배열의 각 요소에 10을 더하고 /정수에  검사하고자 하는 수가 있는지 검사한다...?
//맵함수 쓰라하시는거같다. 


    function 함수(arr,a){

        // const 배열 = Array.isArray(arr)
        // const 정수 = Number.isInteger(a)
        if (!Array.isArray(arr)) return console.log('결과값이 없습니다')
        if (!Number.isInteger(a)) return console.log('결과값이 없습니다')
        
        const 더하기 = arr.map((elements) =>
             elements + 10) 
                          
             if (a === undefined) return console.log('결과값이 없습니다')
             if (더하기.includes(a)) return console.log(더하기, a)
             if (더하기) return console.log('결과값이 없습니다')
             console.log(더하기)
                        
        
    }
     함수([1,2,3,4,5],12)
     함수([1,2,3,4,5])
     함수(1,3)
//이렇게 썻을때 어떤 배열을써도 거기에 10씩 추가가되어야함. 정수부분에 숫자가들어가면 값이 어떤건지 떠야하고 
//숫자가없으면 "결과값이 없습니다"가 떠야함. 


// 4. 짝수와 홀수의 개수 구하기
// 숫자로 된 배열을 파라미터로 받는 함수 solution이 있습니다. 
// 이 솔루션은 파라미터로 전달받은 함수에서 짝수와 홀수의 개수를 배열로 반환합니다. 
//최종목표
// 1. 함수 solution의 숫자 배열을 파라미터로 받는다. 
// 2. 배열 중 짝수와 홀수를 각각 구분하여 길이를 구한다. 
// 3. 길이를 구한 후 각각의 개수를 요소로 담은 배열을 반환한다.
//  단, 요소의 순서는 짝수, 홀수 순이다. 
// ex)
// const arr = [1,2,3,4,5]
// const a = solution(arr)
// console.log(a)
//  결과값
// [2,3]
// [짝수의 개수, 홀수의 개수]

function solution(arr){
    //어..짝수랑 홀수의 개수를 배열로 반환시키는 기능을 하는 함수를 만들면됌
    const 짝수 = []
    const 홀수 = []

    arr.forEach((number) => {
        if (number % 2 === 0) {
          짝수.push(number); // 짝수인 경우 짝수배열에 추가
        } else {
          홀수.push(number); // 홀수인 경우 홀수배열에 추가
        }
      });
         return [짝수.length, 홀수.length];
    
    // arr.forEach((number)=>{
    //     if(number % 2 === 0 ) return console.log(짝수.push(number))
    //     if(number % 2 !== 0) return console.log(홀수.push(number))
    // })
    //   return [짝수.length, 홀수.length];
    }

    

    const numbers = [1,2,3,4,5,6,7]
    const a = solution(numbers)
    console.log(a)


//배열을 length를 사용해서 짝수,홀수 각각 길이 구하기 
//길이 구하고 각각 개수를 요소로 담은 배열로반환 

// const arr = [1,2,3,4,5]
// arr.forEach((el,index,originArr)=>{
//     console.log(el)
// })


// -----------------------------------------------------------------------------

// 5. 심화문제 (선택)
// 심화 문제의 올바른 풀이를 위해서는 아직 배우지 않은 개념도 이해하고 있어야 합니다.. (클로저, this)
// 그러나 반드시 올바르게 문제를 풀이하지 않아도 괜찮으니 아래와 같은 기능을 구현해보세요. 
// 올바른 풀이가 아닌 현재까지 배운 개념만으로도 기능 작동에는 문제가 없는 것을 확인하였습니다.
// 아래와 같은 기능을 하는 오브젝트를 반환하는 함수를 만드세요
// 파라미터로는 최종 목표지 까지와의 거리를 전달 받습니다. 함수 이름은 car입니다. 
// car는 각각 시동걸기, 시동끄기, 주행 기능을 가지고 있습니다. 
// 해당 자동차는 연식이 오래되어 최대 40km밖에 운전하지 못합니다.
// 40km 이상 주행하려고 한다면 안전 사고 위험이 있어 강제로 시동을 종료합니다.
// 주행거리까지 1km 단위로 상황판(콘솔)에 나타납니다. 
// 최종 목표
// 1. 시동이 걸리면 시동이 걸렸다는 메시지가 콘솔에 로그됩니다.
// 2. 시동이 꺼지면 시동이 꺼졌다는 메시지가 콘솔에 로그됩니다.
// 3. 주행 중이면 최종 목표 거리까지 1km 단위로 콘솔에 거리가 로그됩니다.
// 4. 최종 목표거리에 도달하면 주행이 완료되었다는 메시지가 콘솔에 로그됩니다.
// 5. 최종 목표거리가 40km 이상인 상태에서 주행을 시도하면
// 안전 위험으로 시동을 종료했다는 메시지가 콘솔과 로그됨과 동시에 시동이 꺼집니다. 
// 6. 시동이 걸리지 않으면 주행을 할 수 없습니다.
// 7. 시동이 걸려있는 상태에서 시동을 다시 걸 수 없습니다.
// 8. 시동이 꺼져있는 상태에서 시동을 다시 끌 수 없습니다.


function car(최종목표지){

      const 엔진 = false
  //이럴려면 최종목표지가 있어야하는데, 만들려면 최종목표지까지갈때 몇km남았는지를 표시해줄수있어야할거같음. 
  //주행중이면 최종목표까지 1km 단위로 콘솔에 거리로그가뜸.

    for(let i = 0; i <= 40; i++){
      남은거리 = 최종목표지 - i
      if(남은거리 === 0) return console.log('도착했습니다.')
      console.log(`주행거리까지 ${남은거리}km 남았습니다`)
    }
  //파라미터로 최종목표지와 거리 전달 
      
      function drive(주행거리){
        if(!엔진)
  // car는 각각 시동걸기, 시동끄기, 주행 기능을 가지고 있습니다. 
  // 이거를 car를 실행했을때 시동걸기 -> 주행하기(주행거리까지남았다뜨기)-> 도착하기 이렇게 차례대로 뜨게하고싶음 

        
        console.log(최종목표지,주행속도)
      }

    
      
  
  //이 차는 연식이 오래되서 최대 40km까지만 운전가능함
  //40km 이상 주행할려면 강제로 시동종료
  //주행거리 1km 단위로 나타남
  //시동이걸리면 시동이 걸렸다는 메세지가 나옴
  //시동이꺼지면 꺼졌다고 메세지가 나옴
  //주행중에 최종 목표 거리까지 1km 단위로 메세지로그나옴
  //시동이 걸리지않으면 주행이 x
  //시동이 걸려있는 상태에서 시동 다시 걸 수 없다
  //시동이 꺼져있는 상태에서 시동 다시 끌 수 없다
  
}
car(40)



// function solution(nums) {
    
//   //nums에는 숫자가 3개이상 50개 이하로들어가있음 
//   //nums의 각 원소는 1이상 1000이하의 자연수, 중복은 x 
//   const a = [ 3 <= nums >= 50 ]
//   if(a )
//   // if(2 < num ) return console.log(num)
//   // if(num <= 50) return console.log(num)
  
//   // for(let i = 2; i <= )
//   var answer = -1;
  
//   // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//   console.log('Hello Javascript')
  
//   return answer;
// }
// solution(1)