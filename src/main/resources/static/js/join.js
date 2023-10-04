//주소검색
function searchAddr(){
    new daum.Postcode({
        oncomplete: function(data) {
         document.querySelector('#memberAddr').value = data.roadAddress;
        }
    }).open();
}

//회원가입시 데이터 유효성 검사
function joinValidate(){
    //1. 데이터 유효성 검사
    //ID 입력 여부 체크

    //form 태그 선택
    //form 태그 안의 요소는 name 속성으로 접근 가능
    const joinForm = document.querySelector("#joinForm");

    //form 태그 안에 name 속성이 memberId인 태그의 value
}

//아이디 중복확인
function checkId(){
    fetch('/member/checkId', { //요청경로
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        //컨트롤러로 전달할 데이터
        body: new URLSearchParams({
            'memberId' : document.querySelector('#memberId').value
        })
    })
    .then((response) => {
        if(!response.ok){
            alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
            return ;
        }
    
        //return response.text(); //컨트롤러에서 return하는 데이터가 없거나 int, String 일 때 사용
        return response.json(); //나머지 경우에 사용
    })
    //fetch 통신 후 실행 영역
    .then((data) => {//data -> controller에서 리턴되는 데이터!
        if(data){
            alert('사용 가눙한 ID입니다.')
        }
        else{
            alert('사용 불가능한 ID입니다.')
        }
    })
    //fetch 통신 실패 시 실행 영역
    .catch(err=>{
        alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
        console.log(err);
    });
}
