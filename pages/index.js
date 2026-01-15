import { useMemo, useState, useRef } from 'react'
import Head from 'next/head'
import ideas from '../data/ideas'

function splitMoodValue(v){
  if(!v) return []
  if(Array.isArray(v)) return v.flatMap(x=> (typeof x==='string' ? x.split(/\||,|;/).map(s=>s.trim().toLowerCase()) : []) ).filter(Boolean)
  if(typeof v==='string') return v.split(/\||,|;/).map(s=>s.trim().toLowerCase()).filter(Boolean)
  return []
}

const DATA = ideas.map(i=> ({ ...i, mood: splitMoodValue(i.mood) }))

const MOODS = Array.from(new Set(DATA.flatMap(i=>i.mood))).sort()

function capitalize(s){ if(!s) return ''; return s[0].toUpperCase()+s.slice(1) }
const BUDGETS = ["$","$$","$$$"]

function matchIdea(idea, filters){
  const {moods, times, budgets, links, ada} = filters
  if(moods.length>0 && !idea.mood.some(m=>moods.includes(m))) return false
  if(times && times.length>0 && !times.includes(idea.time)) return false
  if(budgets.length>0 && !budgets.includes(idea.budget)) return false
  if(links.maps && (!idea.links.maps || idea.links.maps.length===0)) return false
  if(links.yelp && (!idea.links.yelp || idea.links.yelp.length===0)) return false
  if(links.websites && (!idea.links.websites || idea.links.websites.length===0)) return false
  if(ada && !idea.adaAccessible) return false
  return true
}

function randomFrom(arr){
  if(!arr || arr.length===0) return null
  return arr[Math.floor(Math.random()*arr.length)]
}

export default function Home(){
  const [selectedMoods,setSelectedMoods] = useState([])
  const [selectedTimes,setSelectedTimes] = useState([])
  const [selectedBudgets,setSelectedBudgets] = useState([])
  const [linkFilters,setLinkFilters] = useState({maps:false,yelp:false,websites:false})
  const [adaOnly,setAdaOnly] = useState(false)
  const [spinning,setSpinning] = useState(false)
  const [picked, setPicked] = useState(null)
  const [explain,setExplain] = useState(null)
  const [resultAnimKey, setResultAnimKey] = useState(0)
  const resultRef = useRef(null)

  const filters = useMemo(()=>({
    moods:selectedMoods, times:selectedTimes, budgets:selectedBudgets, links:linkFilters, ada:adaOnly
  }),[selectedMoods,selectedTimes,selectedBudgets,linkFilters,adaOnly])

  function toggleMood(m){
    setSelectedMoods(prev => prev.includes(m) ? prev.filter(x=>x!==m) : [...prev,m])
  }
  function toggleBudget(b){
    setSelectedBudgets(prev => prev.includes(b) ? prev.filter(x=>x!==b) : [...prev,b])
  }

  function findWithRelaxation(){
    const relaxedSteps = []
    // Try exact
    let pool = DATA.filter(i=>matchIdea(i,filters))
    if(pool.length>0) return {pool, relaxed:[]}

    // Progressive relaxation order: budgets -> moods -> time -> links
    // 1 remove budgets
    let f1 = {...filters, budgets:[]}
    pool = DATA.filter(i=>matchIdea(i,f1))
    if(pool.length>0) return {pool, relaxed:['budget']}

    // 2 remove moods
    let f2 = {...f1, moods:[]}
    pool = DATA.filter(i=>matchIdea(i,f2))
    if(pool.length>0) return {pool, relaxed:['budget','mood']}

    // 3 relax time (allow both day and night)
    let f3 = {...f2, times:['day','night']}
    pool = DATA.filter(i=>matchIdea(i,f3))
    if(pool.length>0) return {pool, relaxed:['budget','mood','time']}

    // 4 remove link requirements
    let f4 = {...f3, links:{maps:false,yelp:false,websites:false}}
    pool = DATA.filter(i=>matchIdea(i,f4))
    return {pool, relaxed:['budget','mood','time','links']}
  }

  function doPick(){
    const {pool, relaxed} = findWithRelaxation()
    if(pool.length===0){
      setPicked(null)
      setExplain('No ideas available (dataset empty).')
      return
    }
    const choice = randomFrom(pool)
    setPicked(choice)
    setResultAnimKey(k=>k+1)
    if(relaxed.length===0) setExplain(null)
    else setExplain(relaxed)
  }

  function pick(){
    // Start spinner, pick after short delay
    setSpinning(true)
    setTimeout(()=>{
      doPick();
      setSpinning(false)
      setTimeout(()=>{ if(resultRef.current) resultRef.current.scrollIntoView({behavior:'smooth', block:'center'}) }, 60)
    }, 1100)
  }

  function spinAgain(){
    if(!picked){ pick(); return }
    setSpinning(true)
    setTimeout(()=>{
      // pick different one if possible
      const {pool} = findWithRelaxation()
      if(!pool || pool.length===0){ setSpinning(false); return }
      if(pool.length===1){ setPicked(pool[0]); setResultAnimKey(k=>k+1); setSpinning(false); setTimeout(()=>{ if(resultRef.current) resultRef.current.scrollIntoView({behavior:'smooth', block:'center'}) }, 60); return }
      let next = picked
      const attempts = 10
      let i=0
      while(next && next.id === picked.id && i<attempts){ next = randomFrom(pool); i++ }
      setPicked(next)
      setResultAnimKey(k=>k+1)
      setSpinning(false)
      setTimeout(()=>{ if(resultRef.current) resultRef.current.scrollIntoView({behavior:'smooth', block:'center'}) }, 60)
    }, 1100)
  }

  const moodChips = MOODS

  return (
    <div className="container">
      <Head>
        <title>SF Date Roulette</title>
        <meta name="description" content="Stop overthinking. Start adventuring." />
      </Head>

      <div className="header">
        <div className="brand">
            <div className="logo">SF</div>
            <div>
              <h1>SF Date Roulette</h1>
              <div className="subtitle">Stop overthinking. Start adventuring.</div>
              <div className="small muted">Mobile-first · No accounts</div>
            </div>
          </div>
      </div>

      <div className="controls">
        <div className="panel">
          <div style={{marginBottom:8,fontWeight:700}}>Mood</div>
          <div className="filters">
            {moodChips.map(m=> (
              <button key={m} className={"chip "+(selectedMoods.includes(m)?'active':'')} onClick={()=>toggleMood(m)}>{capitalize(m)}</button>
            ))}
          </div>

          <div style={{marginTop:12}}>
            <div style={{marginBottom:6,fontWeight:700}}>Time</div>
            <div className="row">
              <button className={"chip "+(selectedTimes.includes('day')?'active':'')} onClick={()=>{
                setSelectedTimes(prev => prev.includes('day') ? prev.filter(t=>t!=='day') : [...prev,'day'])
              }}>Day</button>
              <button className={"chip "+(selectedTimes.includes('night')?'active':'')} onClick={()=>{
                setSelectedTimes(prev => prev.includes('night') ? prev.filter(t=>t!=='night') : [...prev,'night'])
              }}>Night</button>
            </div>
          </div>

          <div style={{marginTop:12}}>
            <div style={{marginBottom:6,fontWeight:700}}>Budget</div>
            <div className="row">
              {BUDGETS.map(b => (
                <button key={b} onClick={()=>toggleBudget(b)} className={"chip "+(selectedBudgets.includes(b)?'active':'')}>{b}</button>
              ))}
            </div>
          </div>

          <div style={{marginTop:12}}>
            <div style={{marginBottom:6,fontWeight:700}}>Must-have links</div>
            <div className="row">
              <label className={"chip "+(linkFilters.maps?'active':'')} onClick={()=>setLinkFilters(l=>({...l,maps:!l.maps}))}>Maps</label>
              <label className={"chip "+(linkFilters.yelp?'active':'')} onClick={()=>setLinkFilters(l=>({...l,yelp:!l.yelp}))}>Yelp</label>
              <label className={"chip "+(linkFilters.websites?'active':'')} onClick={()=>setLinkFilters(l=>({...l,websites:!l.websites}))}>Website</label>
            </div>
          </div>

          <div style={{marginTop:12}}>
            <div style={{marginBottom:6,fontWeight:700}}>ADA compliant</div>
            <div className="row">
              <button className={"chip "+(adaOnly?'active':'')} onClick={()=>setAdaOnly(a=>!a)}>Yes</button>
            </div>
          </div>

          <div style={{marginTop:12}}>
            <div className="panel spinner-panel" style={{display:'flex',flexDirection:'column',gap:8,alignItems:'center'}}>
              
              <button className={"big-btn "+(spinning? 'spinning':'')} onClick={pick} aria-label="Spin me!">
                <span className="big-btn-label">Spin me!</span>
              </button>
              {/* Spin again button removed per request */}
              <div className="muted small">Tip: try loosening filters if results are scarce.</div>
            </div>
          </div>
        </div>
        <div className="pick">
          {picked && (
            <div key={resultAnimKey} ref={resultRef} className="panel result">
              <br></br>
              <h2 className="title">{picked.title}</h2>
              <div className="meta">{picked.neighborhood} · {picked.time} · {picked.budget}</div>
              <div className="mood-row" style={{marginTop:8, marginBottom:6}}>
                {picked.mood && picked.mood.map(m=> (
                  <span key={m} className="chip" style={{marginRight:6}}>{capitalize(m)}</span>
                ))}
              </div>
              <div>{picked.description}</div>
              <div className="why">Why it’s fun: {picked.why}</div>
              <div className="links">
                {picked.links.maps && picked.links.maps.length>0 && <a className="link" href={picked.links.maps[0]} target="_blank" rel="noreferrer">Google Maps</a>}
                {picked.links.yelp && picked.links.yelp.length>0 && <a className="link" href={picked.links.yelp[0]} target="_blank" rel="noreferrer">Yelp</a>}
                {picked.links.websites && picked.links.websites.length>0 && <a className="link" href={picked.links.websites[0]} target="_blank" rel="noreferrer">Website</a>}
              </div>
            </div>
          )}

          {explain && (
            <div className="panel" style={{marginTop:10}}>
              {Array.isArray(explain) ? (
                <div className="explain">No exact matches, relaxed filters: {explain.join(', ')}.</div>
              ) : (
                <div className="explain">{explain}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
