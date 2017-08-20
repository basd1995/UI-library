var tabs = $$('.tab .tab-header>li')
var panels = $$('.tab .tab-ctn>li')

tabs.forEach(function (tab) {
	tab.addEventListener('click', function () {
		tabs.forEach(function (node) {
			node.classList.remove('active')
		})
		panels.forEach(function (node) {
			node.classList.remove('active')
		})
		this.classList.add('active')
		var index = [].indexOf.call(tabs, this)
		panels[index].classList.add('active')
	})
})




function $(id) {
	return document.querySelector(id);
}

function $$(cls) {
	return document.querySelectorAll(cls);
}
