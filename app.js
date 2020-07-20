//jshint esversion:6
let count =0;

var value = document.getElementById('value');
var btns = document.querySelectorAll('.btn');



btns.forEach((btn) => {
  btn.addEventListener('click',(e)=>{
    const clickedClass = e.currentTarget.classList;
    if (clickedClass.contains('decrease')) {
       count--;
    }else if (clickedClass.contains('increase')) {
       count++;
    } else{
      count = 0;
    }

    if(count>0){
      value.style.color = 'green';
    }
    if (count<0) {
      value.style.color = 'red';
    }
    if (count==0) {
      value.style.color = '#222';
    }
    value.textContent = count;

  });
});
