'use client';
import {ChevronsLeft,ChevronLeft,ChevronRight,ChevronsRight} from 'lucide-react';

export function Pagination({page,total,onChange}:{page:number;total:number;onChange:(page:number)=>void}){
 const count=Math.max(0,Math.ceil(total));
 if(count<=1)return null;
 const current=Math.min(count,Math.max(1,page));
 const start=Math.max(1,Math.min(current-2,count-4));
 const numbers=Array.from({length:Math.min(5,count)},(_,i)=>start+i);
 const move=(target:number)=>{onChange(target)};
 return <div className="pagination" role="navigation" aria-label="게시판 페이지 이동">
  <button type="button" className="page-edge" disabled={current===1} aria-label="첫 페이지" title="첫 페이지" onClick={()=>move(1)}><ChevronsLeft size={15}/></button>
  <button type="button" disabled={current===1} aria-label="이전 페이지" title="이전 페이지" onClick={()=>move(current-1)}><ChevronLeft size={15}/></button>
  {numbers.map(n=><button type="button" key={n} className={current===n?'chosen':''} aria-label={n+'페이지'} aria-current={current===n?'page':undefined} onClick={()=>move(n)}>{n}</button>)}
  <button type="button" disabled={current===count} aria-label="다음 페이지" title="다음 페이지" onClick={()=>move(current+1)}><ChevronRight size={15}/></button>
  <button type="button" className="page-edge" disabled={current===count} aria-label="마지막 페이지" title="마지막 페이지" onClick={()=>move(count)}><ChevronsRight size={15}/></button>
 </div>
}
