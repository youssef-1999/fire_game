var image=document.querySelector('img')

document.addEventListener('mousemove',function(e)
{
    image.style.left=e.clientX+'px';
    image.style.top=e.clientY+'px';
})

