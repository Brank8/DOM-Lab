const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
];

const mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

mainEl.classList.add("flex-ctr")
//console.dir(mainEl)

const topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add("flex-around")

const newA = document.createElement("div");

menuLinks.forEach(function(link) {
   const newLink = document.createElement("a")
   newLink.setAttribute("href", link.href)
   newLink.innerText = link.text
   topMenuEl.appendChild(newLink)




})

