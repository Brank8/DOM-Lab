const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add("flex-ctr");
//console.dir(mainEl)

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add("flex-around");

const newA = document.createElement("div");

menuLinks.forEach(function(link) {
   const newLink = document.createElement("a")
   newLink.setAttribute("href", link.href)
   newLink.innerText = link.text
   topMenuEl.appendChild(newLink)




});

//part 2 starts here

const subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = '0';

const topMenuLinks = document.querySelectorAll('#top-menu > a');

let showingSubMenu = false;

topMenuEl.addEventListener("click", function(e){
    e.preventDefault()
    if (e.target.tagName !== "A") {
    return
    }
console.log(e.target.innerText)
 if (e.target.classList.contains('active')) {
 e.target.classList.remove('active')
 showingSubMenu = false
 subMenuEl.style.top = 0
 return
 } 
topMenuLinks.forEach(topMenuLink => {
    topMenuLink.classList.remove('active')
})
e.target.classList.add('active')
});

