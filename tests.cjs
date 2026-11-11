const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map(),groups=new Map(),saved={};
const el=k=>{if(!elements.has(k))elements.set(k,{innerHTML:'',textContent:'',value:'all',dataset:{},classList:{add(){},remove(){},toggle(){},contains(){return false}},setAttribute(){},focus(){},scrollIntoView(){}});return elements.get(k)};
const ctx={window:{addEventListener(){},scrollTo(){},scrollY:0},document:{querySelector:el,querySelectorAll:k=>groups.get(k)||[],body:el('body')},location:{hash:'#home'},localStorage:{getItem:k=>saved[k]||null,setItem:(k,v)=>saved[k]=v},setTimeout(){},setInterval(){},console,Math,Date};vm.createContext(ctx);
for(const f of ['content.js','app.js'])vm.runInContext(fs.readFileSync(__dirname+'/'+f,'utf8'),ctx);
const run=s=>vm.runInContext(s,ctx),data=ctx.window.DBMS_DATA,notes=data.notes,cards=notes.flatMap(n=>n.cards),bank=data.practice;
assert.equal(notes.length,15);assert.equal(cards.length,240);assert.equal(bank.length,154);
assert.equal(new Set([...cards,...bank,...data.timedCases].map(c=>c.id)).size,398);
assert.equal(new Set([...cards,...bank].map(c=>c.question)).size,394);
for(const n of notes){const qs=bank.filter(c=>c.note===n.id);assert(qs.length>=10&&qs.length<=20);assert.equal(qs.filter(c=>c.kind==='choice').length,6);assert(qs.filter(c=>c.kind==='sql').length>=2);assert.equal(qs.filter(c=>c.kind==='essay').length,2)}
for(const c of [...cards,...bank]){for(const k of ['concept','question','answer'])assert(c[k].length>0);if(c.kind==='choice'){assert.equal(c.choices.length,4);assert.equal(new Set(c.choices).size,4);assert(c.choices.includes(c.answer))}else if(bank.includes(c)||c.id.startsWith('v2'))assert.equal(c.checks.length,3)}
for(const f of ['index.html','content.js','app.js','README.md'])assert(!/\b(lecture|exam)\b/i.test(fs.readFileSync(__dirname+'/'+f,'utf8')),f);
const conceptElements=notes[0].cards.map((c,i)=>{const e=el('concept-'+i);e.dataset.concept=c.id;return e});
groups.set('[data-concept]',conceptElements);
const rating=el('concept-rating');rating.dataset={conceptRating:notes[0].cards[0].id,rating:'again'};groups.set('[data-concept-rating]',[rating]);
run("mode='learn';notePage(1)");assert(el('#main').innerHTML.includes('01 · Concept cards'));assert(!el('#main').innerHTML.includes('02 · Flashcards'));assert(el('#note-body').innerHTML.includes('YOUR QUESTION'));
conceptElements[0].onclick();assert.equal(conceptElements[0].innerHTML,run('conceptBack(notes[0].cards[0])'));assert(!conceptElements[0].innerHTML.includes('term-strip'));assert(!conceptElements[0].innerHTML.includes('YOUR QUESTION'));assert.equal(el('#rating-'+notes[0].cards[0].id).hidden,false);
conceptElements[0].onkeydown({key:'Enter',preventDefault(){}});assert.equal(conceptElements[0].innerHTML,run('conceptFront(notes[0].cards[0],0)'));assert.equal(el('#rating-'+notes[0].cards[0].id).hidden,true);
rating.onclick();assert.equal(run('queue().length'),1);groups.clear();
assert.deepEqual(Array.from(notes,n=>n.cards.length),[12,18,16,20,16,20,20,18,12,20,14,16,12,14,12]);

run("mode='practice';notePage(1)");assert(el('#note-body').innerHTML.includes('item-p3n1q1'));assert(!el('#note-body').innerHTML.includes('item-v2n1c1'));
run('mixed()');el('#new-mix').onclick();const mix=JSON.parse(saved['dbms-notebook-v2']).mixed;assert.equal(mix.length,20);for(const [k,count]of [['choice',12],['sql',4],['essay',4]])assert.equal(mix.filter(id=>bank.find(c=>c.id===id).kind===k).length,count);
const check=el('check');check.dataset.check='p3n1q1';groups.set('[data-check]',[check]);run("state.choices.p3n1q1=byId.p3n1q1.choices[1];bindPractice(document.querySelector('#note-body'),['p3n1q1'],'Test')");check.onclick();assert.equal(run('state.firstAttempts.p3n1q1.correct'),false);run("state.choices.p3n1q1=byId.p3n1q1.answer");check.onclick();assert.equal(run('state.firstAttempts.p3n1q1.correct'),false);assert.equal(run('state.checked.p3n1q1'),true);groups.clear();
run("state.drafts.p3n4q7='<script>';state.rubrics.p3n4q7={0:true};state.reveals.p3n4q7=true;save()");assert(run("itemHTML(byId.p3n4q7,0)").includes('&lt;script&gt;'));
const ids=data.timedSets.flatMap(t=>t.choiceIds);assert.equal(ids.length,60);assert.equal(new Set(ids).size,60);assert(data.timedSets.every(t=>t.caseIds.length===2));assert(data.timedCases.every(c=>c.checks.length===5));
run("state.timedSelected='A';state.timedRuns.A={minutes:90,deadline:Date.now()+5400000,answers:{},drafts:{},marks:{},seen:[],order:Object.fromEntries(data.timedSets[0].choiceIds.map(id=>[id,byId[id].choices]))};timedPage()");
assert(!el('#timed-body').innerHTML.includes('Model response'));assert(el('#timed-body').innerHTML.includes('submit-timed'));
run("data.timedSets[0].choiceIds.forEach(id=>state.timedRuns.A.answers[id]=byId[id].answer);state.timedRuns.A.drafts.caseA6='<b>Draft</b>';state.timedRuns.A.deadline=Date.now()-1;expireTimed();timedPage()");
assert.equal(run('state.timedRuns.A.submitted'),true);assert.equal(run('state.timedRuns.A.expired'),true);assert(el('#timed-body').innerHTML.includes('Automatic: 60/60'));assert(el('#timed-body').innerHTML.includes('Model response'));assert(el('#timed-body').innerHTML.includes('&lt;b&gt;Draft&lt;/b&gt;'));assert(el('#timed-body').innerHTML.includes('readonly'));
run("data.timedSets[0].caseIds.forEach(id=>state.timedRuns.A.marks[id]={0:true,1:true,2:true,3:true,4:true})");assert.equal(run('timedScore(data.timedSets[0],state.timedRuns.A).self'),40);
run('progressPage()');assert(el('#main').innerHTML.includes('First attempts:'));assert(el('#main').innerHTML.includes('Models viewed:'));
assert(run("terminology('SQL and DBMS')").includes('Structured Query Language'));assert.equal(run("esc('<script>')"),'&lt;script&gt;');
console.log('PASS: 240 combined concept cards + 154 independent tasks; mouse/keyboard flipping with answer-only backs; variable per-note counts, unique IDs/prompts, coverage per note, choice models, first-attempt tracking, review queue, mixed selection, timed answer hiding, expiry/locking, separate 60/40 results, persistence and escaping.');
