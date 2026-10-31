'use client';
import {useEffect,useRef,useState} from 'react';
import type {Post} from './data';
export type PortalComment={id:string;parent?:string|null;account?:string;hero:string;affiliation:string;body:string};
export function CommentThread({post,comments,me,busy,onSubmit,onLogin}:{post:Post;comments:PortalComment[];me:any;busy:boolean;onSubmit:(body:string,parent:string|null)=>Promise<boolean>;onLogin:()=>void}){
const [replyTo,setReplyTo]=useState<PortalComment|null>(null),[draft,setDraft]=useState(''),[rootDraft,setRootDraft]=useState('');
const replyInput=useRef<HTMLTextAreaElement>(null);
useEffect(()=>{setReplyTo(null);setDraft('');setRootDraft('')},[post.id]);
useEffect(()=>{if(replyTo)replyInput.current?.focus()},[replyTo]);
const anonymous=['자유게시판','장비·능력 상담'].includes(post.category);
const author=(c:PortalComment)=>post.account&&c.account?c.account===post.account:c.hero===post.hero&&c.affiliation===post.affiliation;
const identity=(c:PortalComment)=>c.account||c.hero+'|'+c.affiliation;
const members=Array.from(new Set(comments.filter(c=>!author(c)).map(identity)));
const label=(c:PortalComment)=>anonymous?(author(c)?'익명(작성자)':'익명 '+(members.indexOf(identity(c))+1)):c.hero;
const roots=comments.filter(c=>!c.parent||!comments.some(p=>p.id===c.parent));
async function submit(e:React.FormEvent,parent:string|null){e.preventDefault();const body=(parent?draft:rootDraft).trim();if(!body||busy)return;if(await onSubmit(body,parent)){if(parent){setReplyTo(null);setDraft('')}else setRootDraft('')}}
function form(parent:PortalComment|null){return <form className={'comment-form'+(parent?' reply-form':'')} onSubmit={e=>submit(e,parent?.id||null)}>{parent&&<div className="reply-heading"><b>{label(parent)}님에게 답글</b><button type="button" onClick={()=>{setReplyTo(null);setDraft('')}}>취소</button></div>}<textarea ref={parent?replyInput:undefined} aria-label={parent?'답글 내용':'댓글 내용'} value={parent?draft:rootDraft} onChange={e=>parent?setDraft(e.target.value):setRootDraft(e.target.value)} required maxLength={2000} disabled={!me||busy} placeholder={!me?'로그인 후 댓글을 작성할 수 있습니다.':parent?'답글을 입력하세요.':'댓글을 입력하세요.'}/><button className="primary" disabled={!me||busy||!(parent?draft:rootDraft).trim()}>{busy?'등록 중…':parent?'답글 등록':'댓글 등록'}</button>{!me&&<button type="button" className="text-link" onClick={onLogin}>로그인하기</button>}</form>}
function comment(c:PortalComment,nested=false){return <div className={'comment'+(nested?' nested-comment':'')} key={c.id}><b>{nested&&<span className="reply-mark" aria-label="답글">↳ </span>}{label(c)}</b><small>{c.affiliation}</small><p>{c.body}</p>{!nested&&<button type="button" className="reply-button" aria-expanded={replyTo?.id===c.id} onClick={()=>{if(!me){onLogin();return}setReplyTo(c);setDraft('')}}>답글</button>}</div>}
return <div className="comment-thread">{roots.map(root=><section className="comment-group" key={root.id} aria-label={label(root)+'님의 댓글'}>{comment(root)}{comments.filter(c=>c.parent===root.id).map(c=>comment(c,true))}{replyTo?.id===root.id&&form(root)}</section>)}{form(null)}</div>
}
