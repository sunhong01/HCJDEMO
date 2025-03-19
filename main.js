document.getElementById('time').innerHTML = new Date().toLocaleString()
function pink() {
  //함수이므로
  document.body.style.backgroundColor = 'pink'
}
function lightblue() {
  //함수이므로
  document.body.style.backgroundColor = 'lightblue'
}
function yellow() {
  //함수이므로
  document.body.style.backgroundColor = 'yellow'
}
function reset() {
  //함수이므로
  document.body.style.backgroundColor = 'linen'
}

function showhtml() {
  document.getElementById('fig').src = 'image/html.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>HTML은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다'
}
function showcss() {
  document.getElementById('fig').src = 'image/css.png'
  document.getElementById('desc').innerHTML =
    '<b>CSS</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다'
}
function showjs() {
  document.getElementById('fig').src = 'image/javascript.png'
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍언엉이며 웹문서에서 동작을 실행할 수있게 하다'
}
function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
