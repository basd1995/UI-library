function $(id){
	return document.querySelector(id)
}
function $$(cls){
	return document.querySelectorAll(cls)
}


var mask = $('.mask'),
		maskCtn = $('.mask-ctn'),
		close = $('.close'),
		button = $('button')

button.addEventListener('click',function(){
	mask.classList.add('open')
})

close.addEventListener('click',function(){
	mask.classList.remove('open')
})

mask.addEventListener('click',function(){
	mask.classList.remove('open')
})

maskCtn.addEventListener('click',function(e){
	e.stopPropagation()
})