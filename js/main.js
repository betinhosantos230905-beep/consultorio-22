(()=>{
const WA='5517991982626';
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
$$('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener'});
const nav=$('#menu'),b=$('.burger');
const toggle=s=>{nav.classList.toggle('open',s);const o=nav.classList.contains('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');document.documentElement.classList.toggle('menu-open',o);const [m,x]=b.querySelectorAll('svg');m.setAttribute('aria-hidden',o);x.setAttribute('aria-hidden',!o)};
b.addEventListener('click',()=>toggle());
nav.addEventListener('click',e=>{if(e.target.closest('a'))toggle(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open'))toggle(false)});
matchMedia('(min-width:881px)').addEventListener('change',e=>{if(e.matches)toggle(false)});
// tratamentos
const dlg=$('#dlg');
$$('.card').forEach(r=>r.addEventListener('click',()=>{
 $('#dt').textContent=r.dataset.t;$('#mic').replaceChildren(r.querySelector('.ic svg').cloneNode(true));
 $('#dwa').href=wa(`Olá, Dra. Ana Caroline! Gostaria de saber mais sobre ${r.dataset.t.toLowerCase()}.`);$('#dwa').target='_blank';dlg.showModal()}));
$('#dx').addEventListener('click',()=>dlg.close());
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
if('IntersectionObserver' in window){
 const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){const c=en.target;c.classList.add('in');setTimeout(()=>c.classList.add('done'),2600+(+c.style.getPropertyValue('--i')||0)*90);io.unobserve(c)}}),{threshold:.25});
 $$('.card').forEach(c=>io.observe(c));
}else $$('.card').forEach(c=>c.classList.add('in','done'));
// resultados
$$('.res-btn').forEach(btn=>btn.addEventListener('click',()=>{
 const on=btn.getAttribute('aria-pressed')!=='true';btn.setAttribute('aria-pressed',on);
 btn.querySelector('.chip').textContent=on?'Depois':'Antes';
}));
// feedback: os feedbacks reais ficam aqui. Formato: {nome:'Nome', nota:5, texto:'Texto do paciente'}
// Os 3 itens abaixo são EXEMPLOS (aparece a etiqueta "Exemplo"): troque pelos feedbacks reais.
const DEPOIMENTOS=[
 {nome:'Nome do paciente',nota:5,texto:'Aqui aparece o feedback de um paciente atendido pela Dra. Ana Caroline.',exemplo:true},
 {nome:'Nome do paciente',nota:5,texto:'Aqui aparece o feedback de um paciente atendido pela Dra. Ana Caroline.',exemplo:true},
 {nome:'Nome do paciente',nota:5,texto:'Aqui aparece o feedback de um paciente atendido pela Dra. Ana Caroline.',exemplo:true}
];
const deps=$('#deps');
DEPOIMENTOS.forEach(d=>{const e=document.createElement('article');e.className='dep';
 const q=document.createElement('span');q.className='q';q.setAttribute('aria-hidden','true');q.textContent='\u201C';
 const p=document.createElement('p');p.textContent=d.texto;
 const w=document.createElement('div');w.className='who';const n=document.createElement('b');n.textContent=d.nome;
 const st=document.createElement('span');st.className='st';st.textContent='\u2605'.repeat(d.nota||5);st.setAttribute('aria-label',(d.nota||5)+' de 5 estrelas');
 w.append(n,st);e.append(q,p,w);
 if(d.exemplo){const x=document.createElement('em');x.className='ex';x.textContent='Exemplo';e.append(x)}
 deps.append(e)});
if(!DEPOIMENTOS.length)$('#depsEmpty').hidden=false;
const fbd=$('#fbd');
$('#fbOpen').addEventListener('click',()=>fbd.showModal());
$('#fbx').addEventListener('click',()=>fbd.close());fbd.addEventListener('click',e=>{if(e.target===fbd)fbd.close()});
$('#fb').addEventListener('submit',e=>{
 e.preventDefault();const nota=($('input[name=nota]:checked')||{}).value,msg=$('#fbm').value.trim(),n=$('#fbn').value.trim();
 if(!nota){$('#fberr').textContent='Escolha uma nota de 1 a 5 estrelas.';return}
 if(msg.length<5){$('#fberr').textContent='Escreva um comentário para continuar.';$('#fbm').focus();return}
 $('#fberr').textContent='';
 window.open(wa(`Olá, Dra. Ana Caroline! Quero deixar meu feedback.\nNota: ${nota} de 5\n${n?'Nome: '+n+'\n':''}Comentário: ${msg}`),'_blank','noopener');
 fbd.close();
});
// contato
$('#f').addEventListener('submit',e=>{
 e.preventDefault();const n=$('#nome').value.trim();
 if(n.length<2){$('#err').textContent='Informe seu nome para continuar.';$('#nome').focus();return}
 $('#err').textContent='';window.open(wa(`Olá, Dra. Ana Caroline! Meu nome é ${n} e tenho interesse em: ${$('#trat').value}. Gostaria de agendar uma avaliação.`),'_blank','noopener');
});
// foto principal
const fig=$('.hero-fig');
if(fig){if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){fig.classList.add('in');io.disconnect()}},{threshold:.3});io.observe(fig)}else fig.classList.add('in')}
// entrada
const ent=$('#entrada'),root=document.documentElement;
if(ent){
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){ent.remove()}
 else{root.classList.add('intro-on');let gone=false;
  const enter=()=>{if(gone)return;gone=true;ent.classList.add('out');setTimeout(()=>{ent.remove();root.classList.remove('intro-on');window.scrollTo(0,0);document.body.classList.add('entered')},500)};
  ent.querySelector('.cue').addEventListener('click',e=>{e.preventDefault();enter()});
  ent.addEventListener('click',enter);setTimeout(enter,5200);}
}
})();
