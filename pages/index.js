import { useMemo, useState } from 'react'
import Head from 'next/head'
import ideas from '../data/ideas'

import { Analytics } from "@vercel/analytics/next"

const MOODS = Array.from(new Set(ideas.flatMap(i=>i.mood))).sort()
const BUDGETS = ["$","$$","$$$"]

function matchIdea(idea, filters){
  const {moods, times, budgets, links} = filters
  if(moods.length>0 && !idea.mood.some(m=>moods.includes(m))) return false
  if(times && times.length>0 && !times.includes(idea.time)) return false
  if(budgets.length>0 && !budgets.includes(idea.budget)) return false
  if(links.maps && (!idea.links.maps || idea.links.maps.length===0)) return false
  if(links.yelp && (!idea.links.yelp || idea.links.yelp.length===0)) return false
  if(links.websites && (!idea.links.websites || idea.links.websites.length===0)) return false
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
  const [picked, setPicked] = useState(null)
  const [explain,setExplain] = useState(null)

  const filters = useMemo(()=>({
    moods:selectedMoods, times:selectedTimes, budgets:selectedBudgets, links:linkFilters
  }),[selectedMoods,selectedTimes,selectedBudgets,linkFilters])

  function toggleMood(m){
    setSelectedMoods(prev => prev.includes(m) ? prev.filter(x=>x!==m) : [...prev,m])
  }
  function toggleBudget(b){
    setSelectedBudgets(prev => prev.includes(b) ? prev.filter(x=>x!==b) : [...prev,b])
  }

  function findWithRelaxation(){
    const relaxedSteps = []
    // Try exact
    let pool = ideas.filter(i=>matchIdea(i,filters))
    if(pool.length>0) return {pool, relaxed:[]}

    // Progressive relaxation order: budgets -> moods -> time -> links
    // 1 remove budgets
    let f1 = {...filters, budgets:[]}
    pool = ideas.filter(i=>matchIdea(i,f1))
    if(pool.length>0) return {pool, relaxed:['budget']}

    // 2 remove moods
    let f2 = {...f1, moods:[]}
    pool = ideas.filter(i=>matchIdea(i,f2))
    if(pool.length>0) return {pool, relaxed:['budget','mood']}

    // 3 relax time (allow both day and night)
    let f3 = {...f2, times:['day','night']}
    pool = ideas.filter(i=>matchIdea(i,f3))
    if(pool.length>0) return {pool, relaxed:['budget','mood','time']}

    // 4 remove link requirements
    let f4 = {...f3, links:{maps:false,yelp:false,websites:false}}
    pool = ideas.filter(i=>matchIdea(i,f4))
    return {pool, relaxed:['budget','mood','time','links']}
  }

  function pick(){
    const {pool, relaxed} = findWithRelaxation()
    if(pool.length===0){
      setPicked(null)
      setExplain('No ideas available (dataset empty).')
      return
    }
    const choice = randomFrom(pool)
    setPicked(choice)
    if(relaxed.length===0) setExplain(null)
    else setExplain(relaxed)
  }

  function spinAgain(){
    if(!picked){ pick(); return }
    // pick different one if possible
    const {pool} = findWithRelaxation()
    if(!pool || pool.length===0) return
    if(pool.length===1){ setPicked(pool[0]); return }
    let next = picked
    const attempts = 10
    let i=0
    while(next && next.id === picked.id && i<attempts){ next = randomFrom(pool); i++ }
    setPicked(next)
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
          </div>
        </div>
        <div className="small muted">Mobile-first · No accounts</div>
      </div>

      <div className="controls">
        <div className="panel">
          <div style={{marginBottom:8,fontWeight:700}}>Mood</div>
          <div className="filters">
            {moodChips.map(m=> (
              <button key={m} className={"chip "+(selectedMoods.includes(m)?'active':'')} onClick={()=>toggleMood(m)}>{m}</button>
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
            <div style={{marginBottom:6,fontWeight:700}}>Require links</div>
            <div className="row">
              <label className={"chip "+(linkFilters.maps?'active':'')} onClick={()=>setLinkFilters(l=>({...l,maps:!l.maps}))}>Maps</label>
              <label className={"chip "+(linkFilters.yelp?'active':'')} onClick={()=>setLinkFilters(l=>({...l,yelp:!l.yelp}))}>Yelp</label>
              <label className={"chip "+(linkFilters.websites?'active':'')} onClick={()=>setLinkFilters(l=>({...l,websites:!l.websites}))}>Website</label>
            </div>
          </div>
        </div>

        <div className="pick">
          <div className="panel" style={{display:'flex',flexDirection:'column',gap:8}}>
            <div style={{fontWeight:700}}>Ready to stop deciding?</div>
            <button className="big-btn" onClick={pick}>Pick a date</button>
            <button className="chip" onClick={spinAgain}>Spin again</button>
            <div className="muted small">Tip: try loosening filters if results are scarce.</div>
          </div>

          {picked && (
            <div className="panel result">
              <h2 className="title">{picked.title}</h2>
              <div className="meta">{picked.neighborhood} · {picked.time} · {picked.budget}</div>
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
                <div className="explain">No exact matches — relaxed filters: {explain.join(', ')}.</div>
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
