const toggle=document.getElementById('menu-toggle'),menu=document.getElementById('menu');toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const contactForm=document.getElementById('contact-form'),phoneInput=contactForm.querySelector('input[name="phone"]'),emailInput=contactForm.querySelector('input[name="email"]'),nameInput=contactForm.querySelector('input[name="name"]'),messageInput=contactForm.querySelector('textarea[name="message"]');[nameInput,messageInput].forEach((input,index)=>input.addEventListener('input',()=>{if(input.value.trim()){const id=index===0?'name-error':'message-error';input.classList.remove('is-invalid');input.setAttribute('aria-invalid','false');document.getElementById(id).textContent=''}}));phoneInput.addEventListener('input',()=>{const digits=phoneInput.value.replace(/\D/g,'').slice(0,11);phoneInput.value=digits.length>7?digits.slice(0,4)+'-'+digits.slice(4,7)+'-'+digits.slice(7):digits.length>4?digits.slice(0,4)+'-'+digits.slice(4):digits;if(phoneInput.value&&/^\d{4}-\d{3}-\d{4}$/.test(phoneInput.value)){phoneInput.classList.remove('is-invalid');phoneInput.setAttribute('aria-invalid','false');document.getElementById('phone-error').textContent=''}else if(phoneInput.dataset.touched==='true')updatePhoneError()});phoneInput.addEventListener('blur',()=>{phoneInput.dataset.touched='true';updatePhoneError()});function updatePhoneError(){const invalid=phoneInput.value!==''&&!/^\d{4}-\d{3}-\d{4}$/.test(phoneInput.value);phoneInput.classList.toggle('is-invalid',invalid);phoneInput.setAttribute('aria-invalid',String(invalid));document.getElementById('phone-error').textContent=invalid?'A telefonszám nem elég hosszú.':'';return invalid};emailInput.addEventListener('input',()=>{if(emailInput.value.trim()&&/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value)){emailInput.classList.remove('is-invalid');emailInput.setAttribute('aria-invalid','false');document.getElementById('email-error').textContent=''}});emailInput.addEventListener('blur',()=>updateEmailError());function updateEmailError(){const invalid=emailInput.value!==''&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value);emailInput.classList.toggle('is-invalid',invalid);emailInput.setAttribute('aria-invalid',String(invalid));document.getElementById('email-error').textContent=invalid?'Adj meg egy érvényes e-mail-címet.':'';return invalid};contactForm.addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget,topics=form.querySelectorAll('input[name="topic"]:checked'),phoneInvalid=updatePhoneError(),nameInvalid=!nameInput.value.trim(),emailEmpty=!emailInput.value.trim(),emailInvalid=emailEmpty||!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value),messageInvalid=!messageInput.value.trim();function setError(input,id,invalid,message){input.classList.toggle('is-invalid',invalid);input.setAttribute('aria-invalid',String(invalid));document.getElementById(id).textContent=invalid?message:''}setError(nameInput,'name-error',nameInvalid,'Kérlek, töltsd ki ezt a mezőt.');setError(emailInput,'email-error',emailInvalid,emailEmpty?'Kérlek, töltsd ki ezt a mezőt.':'Adj meg egy érvényes e-mail-címet.');setError(messageInput,'message-error',messageInvalid,'Kérlek, töltsd ki ezt a mezőt.');const topicInvalid=!topics.length,topicNote=form.querySelector('.topic-note'),topicOptions=form.querySelector('.contact-topics');topicNote.textContent=topicInvalid?'Válassz legalább egy témát.':'';topicNote.classList.toggle('has-error',topicInvalid);topicOptions.classList.toggle('has-error',topicInvalid);form.querySelector('fieldset').setAttribute('aria-invalid',String(topicInvalid));if(nameInvalid||emailInvalid||messageInvalid||topicInvalid||phoneInvalid){form.querySelectorAll('.is-invalid,.contact-topics.has-error input:not(:checked)').forEach(field=>{field.classList.remove('validation-flash');void field.offsetWidth;field.classList.add('validation-flash')});return}const data=new FormData(form);const values=data.getAll('topic');const body=[`Név: ${data.get('name')}`,`E-mail: ${data.get('email')}`,`Telefonszám: ${data.get('phone')||'–'}`,`Témakörök: ${values.join(', ')}`,'',`Üzenet:\n${data.get('message')}`].join('\n');window.location.href=`mailto:csiriviri.hu@gmail.com?subject=${encodeURIComponent('Csiriviri érdeklődés – '+values.join(', '))}&body=${encodeURIComponent(body)}`});document.querySelectorAll('#contact-form input[name="topic"]').forEach(input=>input.addEventListener('change',()=>{if(contactForm.querySelector('input[name="topic"]:checked')){const note=contactForm.querySelector('.topic-note');note.textContent='';note.classList.remove('has-error');contactForm.querySelector('.contact-topics').classList.remove('has-error');contactForm.querySelector('fieldset').setAttribute('aria-invalid','false')}}));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('main .reveal').forEach(element=>observer.observe(element))}else{document.querySelectorAll('main .reveal').forEach(element=>element.classList.add('visible'))}
document.querySelectorAll('.reviews-section').forEach(section=>{
  const viewport=section.querySelector('.review-viewport'),track=section.querySelector('.review-track');
  const originals=[...track.children],count=originals.length;
  if(count<2){originals[0]?.classList.add('is-active');return}
  const clone=slide=>{const copy=slide.cloneNode(true);copy.setAttribute('aria-hidden','true');return copy};
  track.prepend(clone(originals[(count-2+count)%count]),clone(originals[count-1]));
  track.append(clone(originals[0]),clone(originals[1%count]));
  const cards=[...track.children],label=section.querySelector('.review-count');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  let index=2,timer,busy=false;
  function position(animate=true){
    track.style.transition=animate?'':'none';
    const card=cards[index];
    track.style.transform=`translateX(${viewport.clientWidth/2-card.offsetLeft-card.offsetWidth/2}px)`;
    cards.forEach((item,i)=>{item.classList.toggle('is-active',i===index);item.setAttribute('aria-hidden',String(i!==index))});
    label.textContent=`${((index-2+count)%count)+1} / ${count}`;
  }
  function restart(){clearInterval(timer);if(!reduced.matches)timer=setInterval(()=>{if(!document.hidden)move(1)},5000)}
  function move(step){if(busy)return;busy=true;viewport.classList.toggle('is-animating',!reduced.matches);index+=step;position(!reduced.matches);if(reduced.matches){if(index===count+2)index=2;else if(index===1)index=count+1;position(false);busy=false}restart()}
  track.addEventListener('transitionend',event=>{
    if(event.target!==track||event.propertyName!=='transform')return;
    viewport.classList.remove('is-animating');
    viewport.style.removeProperty('--review-duration');
    if(index===count+2){index=2;position(false)}
    else if(index===1){index=count+1;position(false)}
    busy=false;
  });
  section.querySelector('.review-prev').addEventListener('click',()=>move(-1));
  section.querySelector('.review-next').addEventListener('click',()=>move(1));
  section.addEventListener('mouseenter',()=>clearInterval(timer));
  section.addEventListener('mouseleave',restart);
  section.addEventListener('focusin',()=>clearInterval(timer));
  section.addEventListener('focusout',event=>{if(!section.contains(event.relatedTarget))restart()});
  let drag=null;
  viewport.addEventListener('pointerdown',event=>{
    if(event.target.closest('button')||(event.pointerType==='mouse'&&event.button!==0)||busy)return;
    clearInterval(timer);
    drag={id:event.pointerId,start:event.clientX,startTime:performance.now(),base:viewport.clientWidth/2-cards[index].offsetLeft-cards[index].offsetWidth/2};
    viewport.classList.add('is-dragging');viewport.setPointerCapture(event.pointerId);
    track.style.transition='none';
  });
  viewport.addEventListener('pointermove',event=>{
    if(!drag||drag.id!==event.pointerId)return;
    const distance=event.clientX-drag.start;
    if(Math.abs(distance)>8)event.preventDefault();
    const translation=drag.base+distance;
    track.style.transform=`translateX(${translation}px)`;
    const gap=parseFloat(getComputedStyle(track).gap)||0;
    const step=cards[0].offsetWidth+gap;
    const sideScale=window.matchMedia('(max-width:650px)').matches?.84:.82;
    cards.forEach(card=>{
      const center=card.offsetLeft+card.offsetWidth/2+translation;
      const fraction=Math.min(1,Math.abs(center-viewport.clientWidth/2)/step);
      card.style.transform=`scale(${1-(1-sideScale)*fraction})`;
      card.style.opacity=String(1-.38*fraction);
    });
  });
  function endDrag(event){
    if(!drag||drag.id!==event.pointerId)return;
    const distance=event.clientX-drag.start;
    const speed=Math.abs(distance)/Math.max(1,performance.now()-drag.startTime);
    viewport.style.setProperty('--review-duration',`${Math.round(Math.max(280,Math.min(850,720/(1+speed))))}ms`);
    drag=null;viewport.classList.remove('is-dragging');
    if(viewport.hasPointerCapture(event.pointerId))viewport.releasePointerCapture(event.pointerId);
    viewport.classList.toggle('is-animating',!reduced.matches);
    requestAnimationFrame(()=>{
      cards.forEach(card=>{card.style.transform='';card.style.opacity=''});
      if(Math.abs(distance)>50)move(distance<0?1:-1);
      else if(Math.abs(distance)<2){position(false);viewport.classList.remove('is-animating');viewport.style.removeProperty('--review-duration');restart()}
      else{position(!reduced.matches);restart();
        if(!reduced.matches)track.addEventListener('transitionend',()=>{viewport.classList.remove('is-animating');viewport.style.removeProperty('--review-duration')},{once:true});
        else{viewport.classList.remove('is-animating');viewport.style.removeProperty('--review-duration')}
      }
    });
  }
  viewport.addEventListener('pointerup',endDrag);
  viewport.addEventListener('pointercancel',endDrag);
  window.addEventListener('resize',()=>position(false));
  reduced.addEventListener('change',restart);
  position(false);requestAnimationFrame(()=>{track.style.transition='';restart()});
});

const faqMotion=document.querySelectorAll('.faq-section .faq details');
const faqReduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
faqMotion.forEach(detail=>{
  const summary=detail.querySelector('summary');
  const answer=detail.querySelector('.faq-answer');
  if(!summary||!answer)return;
  let actionId=0;
  summary.addEventListener('click',event=>{
    event.preventDefault();
    const opening=!detail.open||detail.classList.contains('is-closing');
    const currentHeight=answer.getBoundingClientRect().height;
    const action=++actionId;
    answer.style.height=`${currentHeight}px`;
    answer.getBoundingClientRect();
    if(faqReduceMotion.matches){
      detail.open=opening;
      detail.classList.remove('is-closing');
      answer.style.height=opening?'auto':'0px';
      answer.style.removeProperty('opacity');
      answer.style.removeProperty('transform');
      return;
    }
    if(opening){
      faqMotion.forEach(other=>{
        if(other!==detail&&other.open&&!other.classList.contains('is-closing'))other.querySelector('summary')?.click();
      });
      detail.open=true;
      detail.classList.remove('is-closing');
      answer.style.opacity='0';
      answer.style.transform='translateY(-5px)';
      requestAnimationFrame(()=>{
        if(action!==actionId)return;
        answer.style.height=`${answer.scrollHeight}px`;
        answer.style.removeProperty('opacity');
        answer.style.removeProperty('transform');
      });
      const finishOpen=event=>{
        if(event.target!==answer||event.propertyName!=='height')return;
        answer.removeEventListener('transitionend',finishOpen);
        if(action!==actionId)return;
        answer.style.height='auto';
      };
      answer.addEventListener('transitionend',finishOpen);
    }else{
      detail.classList.add('is-closing');
      requestAnimationFrame(()=>{
        if(action===actionId){answer.style.height='0px';answer.style.opacity='0';answer.style.transform='translateY(-5px)'}
      });
      const finishClose=event=>{
        if(event.target!==answer||event.propertyName!=='height')return;
        answer.removeEventListener('transitionend',finishClose);
        if(action!==actionId)return;
        detail.open=false;
        detail.classList.remove('is-closing');
        answer.style.removeProperty('height');
        answer.style.removeProperty('opacity');
        answer.style.removeProperty('transform');
      };
      answer.addEventListener('transitionend',finishClose);
      window.setTimeout(()=>{
        if(action!==actionId)return;
        detail.open=false;
        detail.classList.remove('is-closing');
        answer.style.removeProperty('height');
        answer.style.removeProperty('opacity');
        answer.style.removeProperty('transform');
      },500);
    }
  });
});
