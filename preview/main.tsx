import React from 'react';import {createRoot} from 'react-dom/client';import Portal from '../app/page';import '../app/globals.css';
const originalFetch=window.fetch.bind(window);
window.fetch=async(input,init)=>{const url=typeof input==='string'?input:input instanceof Request?input.url:input.href;if(url.includes('/api/portal')){if(init?.method==='POST')return Response.json({error:'화면 검토용 미리보기입니다. 서버 연결 후 이용할 수 있습니다.'},{status:503});return Response.json({user:null,posts:[],comments:[]})}return originalFetch(input,init)};
createRoot(document.getElementById('root')!).render(<Portal/>);