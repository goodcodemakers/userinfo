# userinfo
12.29(목)

서비스 URL : https://port-0-userinfo-fao2flc07msv7.gksl2.cloudtype.app/

## 평가 과제 : 10차 평가 SQL활용하여 DB만들고 유저게시판 만들기
1. SQL(SQLite)문으로 상기의 데이터 타입에 기준한 테이블 속성을 정의
2. id는 고유의 키값으로 자료 추가시 자동 증가가 되어야 함
3. 데이터 필드값을 5개 이상 추가하시오. 
4. 작성한 DB와 SQL파일(database.db, userinfo.sql)과 실행 스크린샷을 함께 제출하시오
5. node.js 앱에서 상기의 모델을 정의하여 응용 앱(예시 참고)을 구현하고 배포하시오.
6. 평가시 원본 소스와 깃허브 소스링크, 서비스 홈페이지 URL 및 스크린샷 제출

### 기능 구현
1. SQL를 사용하여 테이블 속성 정의
2. 고객명을 name으로 정의 하여 DB안에 저장되어있는데 테이블을 들고와 한자리 name만 쳐도 유사한 name을 서치
3. 리스트를 내림차순으로 최신순으로 정렬
4. 나이와 전화번호에 한글이 써지지 않게 타입을 변경
5. 삭제시 첫화면으로 넘어가며 부드러운 랜더링
6. 서치시 되돌아오기로 넘어와야 하는 불편성을 감소하고자 a 태그를 이용하여 첫화면으로 넘어오기
7. 삭제 버튼을 클릭시 경고창 출력, 확인을 누를 경우 삭제되도록 변경
8. total user list 를 만들어 총 게시판 갯수를 알기 쉽게 표현

#### 오류, 미흡한점
1. 라이브러리를 이용하여 css의 사용을 매우 적게하였으나 발견하지 못한 오류 발견 => 해결<br>
1-1. 폰트 컬러, 마진탑등의 UI부분 개선<br>
1-2. 고정된 화면에서 화면크기에 맞춰 가변성있는 프레임으로 구성
2. age 부분 오류<br>
2-1 age 부분을 DB에서 정수로 나타냇으나 ejs 에서 text로 잡아줘서 text로 써도 오류가 안뜨고 그대로 넘어가는 현상 발견<br>
2-2 인풋 타입에서 넘버로 변경 ==!하지만 text에서 바꿔주지않고 한글을 작성하지 않게하는 방법을 찾아보는중
