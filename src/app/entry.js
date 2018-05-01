import $ from 'jQuery'

window.onload = function(){
  document.querySelector('#jsButton').addEventListener('click', function(){
    alert('JavaScript Button')
  })
  $('#jqButton').on('click', function(){
    alert('jQuery Button')
  })
}
