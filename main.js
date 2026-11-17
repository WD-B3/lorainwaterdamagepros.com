(function(){
  var BP=900;
  var tg=document.querySelector('.menu-toggle'),mm=document.getElementById('mobmenu');
  if(tg&&mm){tg.addEventListener('click',function(){var o=mm.classList.toggle('open');tg.setAttribute('aria-expanded',o?'true':'false');});}
  window.addEventListener('resize',function(){if(window.innerWidth>BP&&mm){mm.classList.remove('open');if(tg)tg.setAttribute('aria-expanded','false');}});
  var dts=document.querySelectorAll('.droptoggle');
  Array.prototype.forEach.call(dts,function(b){
    b.addEventListener('click',function(e){var li=b.parentNode;var o=li.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');e.stopPropagation();});
  });
  document.addEventListener('click',function(){Array.prototype.forEach.call(document.querySelectorAll('.has-drop.open'),function(li){li.classList.remove('open');var b=li.querySelector('.droptoggle');if(b)b.setAttribute('aria-expanded','false');});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){Array.prototype.forEach.call(document.querySelectorAll('.has-drop.open'),function(li){li.classList.remove('open');});}});
  var qs=document.querySelectorAll('.faq-q');
  Array.prototype.forEach.call(qs,function(q){
    q.addEventListener('click',function(){
      var it=q.parentNode,a=it.querySelector('.faq-a'),o=it.classList.toggle('open');
      q.setAttribute('aria-expanded',o?'true':'false');
      a.style.maxHeight=o?a.scrollHeight+'px':'0px';
    });
  });
})();
