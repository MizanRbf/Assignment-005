const themeChange = document.getElementById('theme-button');
const themes =[
  "bg-blue-200",
  "bg-green-200",
  "bg-orange-200",
  "bg-teal-200",
  "bg-yellow-200",
  "bg-red-200"
]
themeChange.addEventListener('click', function(){
  const body = document.getElementById('body');
 body.classList.remove(...themes);
 const randomTheme = Math.floor(Math.random() * themes.length);
 body.classList.add(themes[randomTheme]);
 
});