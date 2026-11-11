const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map(), saved={};
const el=k=>{if(!elements.has(k))elements.set(k,{innerHTML:'',textContent:'',value:'all',dataset:{},classList:{add(){},remove(){},toggle(){},contains(){return false}},setAttribute(){},focus(){}});return elements.get(k)};
const ctx={window:{addEventListener(){},scrollTo(){},scrollY:0},document:{querySelector:el,querySelectorAll(){return []},body:el('body')},location:{hash:'#home'},localStorage:{getItem:k=>saved[k]||null,setItem:(k,v)=>saved[k]=v},setTimeout(){},console,Math};vm.createContext(ctx);
for(const f of ['content.js','app.js'])vm.runInContext(fs.readFileSync(__dirname+'/'+f,'utf8'),ctx);
const run=s=>vm.runInContext(s,ctx), notes=ctx.window.DBMS_DATA.notes,cards=notes.flatMap(n=>n.cards);
assert.equal(notes.length,15);assert.equal(cards.length,154);assert.equal(new Set(cards.map(c=>c.id)).size,154);
for(const n of notes){assert(n.cards.length>=10&&n.cards.length<=20);for(const c of n.cards){for(const k of ['concept','question','answer'])assert(c[k].length>0,`${c.id}: ${k}`);if(c.kind==='choice'){assert.equal(c.choices.length,4);assert.equal(new Set(c.choices).size,4);assert(c.choices.includes(c.answer));}else assert.equal(c.checks.length,3)}}
assert.equal(cards.filter(c=>c.kind==='sql').length,32);assert.equal(cards.filter(c=>c.kind==='essay').length,32);
for(const f of ['index.html','content.js','app.js','README.md'])assert(!/\b(lecture|exam)\b/i.test(fs.readFileSync(__dirname+'/'+f,'utf8')),f);
run("mode='cards';notePage(1)");assert(el('#note-body').innerHTML.includes('YOUR TURN'));assert(el('#note-body').innerHTML.includes(notes[0].cards[0].concept));el('#flash').onclick();assert(el('#note-body').innerHTML.includes('RESPONSE & REASONING'));assert(el('#note-body').innerHTML.includes(notes[0].cards[0].answer));
el('#again').onclick();assert.equal(run('queue().length'),1);
run('mixed()');el('#new-mix').onclick();const mix=JSON.parse(saved['dbms-notebook-v2']).mixed;assert.equal(mix.length,20);for(const [k,count]of [['choice',12],['sql',4],['essay',4]])assert.equal(mix.filter(id=>cards.find(c=>c.id===id).kind===k).length,count);
run("state.drafts.v2n4c7='SELECT <value>';state.rubrics.v2n4c7={0:true};state.reveals.v2n4c7=true;save()");assert.equal(JSON.parse(saved['dbms-notebook-v2']).drafts.v2n4c7,'SELECT <value>');assert(run("itemHTML(byId.v2n4c7,0)").includes('SELECT &lt;value&gt;'));assert(run("itemHTML(byId.v2n4c7,0)").includes('data-reveal="v2n4c7" open'));
run("state.choices.v2n1c1=byId.v2n1c1.answer;state.checked.v2n1c1=true");assert(run("statsHTML(['v2n1c1','v2n4c7'])").includes('1/1 checked correct'));assert(run("statsHTML(['v2n1c1','v2n4c7'])").includes('Self-checks: 1/3'));
assert(run("terminology('SQL and DBMS')").includes('Structured Query Language'));assert.equal(run("esc('<script>')"),'&lt;script&gt;');
console.log('PASS: content integrity, 154 cards, mixed practice, flip, review queue, persistence, rubric separation, terminology and HTML escaping.');
