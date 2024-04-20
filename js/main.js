const btn=document.querySelector('.mobile-button');
const menu=document.querySelector('.mobile__menu');

btn.addEventListener('click',function(){
  btn.classList.toggle('menu-open');
  menu.classList.toggle('menu-open');
})


window.addEventListener('scroll',function(){
  const header=document.querySelector('.header__inner');
  const mob=this.document.querySelector('.mobile__menu');
  const mobbtn=this.document.querySelector('.mobile-button');
  header.classList.toggle('inview',window.scrollY > 80);
  mob.classList.toggle('inview',window.scrollY > 300);
  mobbtn.classList.toggle('inview',window.scrollY > 300);
})

const title=document.querySelectorAll('.title');
const about=document.querySelectorAll('.about__img');
const strong=document.querySelectorAll('.strong__img');
const product=document.querySelectorAll('.product__img');
const newpro = document.querySelectorAll('.new__img');
const news=document.querySelectorAll('.news__img');

const cb=entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.observe;
    }
  })
}

const io=new IntersectionObserver(cb);

title.forEach(el=>{
  io.observe(el);
});
about.forEach(el=>{
  io.observe(el);
});
strong.forEach(el=>{
  io.observe(el);
});
product.forEach(el=>{
  io.observe(el);
});
newpro.forEach(el=>{
  io.observe(el);
});
news.forEach(el=>{
  io.observe(el);
});
io.observe(header);







