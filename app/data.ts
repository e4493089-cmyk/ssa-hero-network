import {recruitmentPosts,recruitmentComments} from './recruitment-data';
import {officialPosts,fieldPosts} from './official-data';
import {additionalDossiers} from './villains';
import {communityPosts,communityComments} from './community-data';
export type Post={id:string;title:string;body:string;category:string;hero:string;affiliation:string;created:string;account?:string;views?:number;replies?:number;board?:string};
export const seed:Post[]=[...recruitmentPosts,...communityPosts,
{id:'n1',category:'공지사항',title:'공인 히어로 네트워크 이용 및 정보 취급 안내',hero:'포털운영팀',affiliation:'SSA 서울지국',created:'2026-10-31',body:'본 네트워크는 SSA 등록 히어로 및 협력기관의 현장 정보 공유를 지원합니다.\n\n사건 관계자의 개인정보, 피해자 사진 및 작전 중 취득한 비공개 정보를 게시하지 마십시오. 현장 정보는 확인된 사실과 개인의 추정을 구분하여 작성해 주시기 바랍니다.\n\n긴급한 위험 상황은 게시판 대신 소속 지휘체계를 통해 보고하십시오.\n\n※ 이 사이트는 UNKNOWN 세계관을 배경으로 한 창작 커뮤니티입니다. 실제 신고·긴급구조 서비스가 아닙니다.',views:1248},
{id:'n2',category:'공지사항',title:'11월 합동 현장대응 교육 일정 안내',hero:'교육훈련과',affiliation:'SSA 서울지국',created:'2026-10-30',body:'11월 합동교육은 능력 충돌 상황에서의 시민 대피와 현장 인계 절차를 중심으로 진행됩니다.\n\n대상: SSA 소속 및 협력 길드 등록 히어로\n과정: 시민 대피 유도 / 초동 현장 통제 / 기관 간 상황 인계\n\n상세 장소와 조 편성은 소속기관 담당자에게 별도 전달합니다.',views:862},
{id:'n3',category:'공지사항',title:'포털 정기점검 안내 — 11. 4. 02:00~04:00',hero:'포털운영팀',affiliation:'SSA 서울지국',created:'2026-10-29',body:'서비스 안정화를 위한 정기점검이 예정되어 있습니다. 점검 중 게시판과 자료 열람이 일시적으로 제한될 수 있습니다. 작성 중인 내용은 미리 보관해 주십시오.\n\n점검 일정은 작업 상황에 따라 변경될 수 있습니다.',views:513},
{id:'b1',category:'보도자료',title:'SSA, 불법 능력억제제 유통망 「회색항로」 합동 단속',hero:'대외협력실',affiliation:'SSA 서울지국',created:'2026-10-30',body:'특수치안관리기구 서울지국은 협력 길드와의 합동 단속을 통해 무허가 능력억제제 유통 관련자 일부의 신병을 확보했습니다.\n\n유통품은 성분과 안전성이 확인되지 않은 제품으로, 회수 및 유통 경로 확인이 진행 중입니다.\n\n관련 조직은 수사상 「회색항로」로 분류하고 있습니다. 조직 규모와 추가 수사 대상은 수사 중인 사안으로 공개하지 않습니다.',views:934},
{id:'b2',category:'보도자료',title:'민간 길드 현장 공조 간담회 개최',hero:'대외협력실',affiliation:'SSA 서울지국',created:'2026-10-27',body:'서울지국은 청람·백야·해오름 길드 관계자들과 현장 공조 간담회를 개최했습니다.\n\n이번 회의에서는 중복 출동 방지, 현장 통제선 인계, 구조 인력 보호를 위한 공통 절차를 논의했습니다.\n\nSSA는 소속에 관계없이 등록 히어로가 안전하게 협력할 수 있도록 지원하겠습니다.',views:621},
{id:'f1',category:'현장 정보',title:'[서부권] 폐창고 일대 미확인 장치 발견 시 주의',hero:'방벽',affiliation:'청람 길드',created:'2026-10-31',body:'서부권 폐창고 현장에서 출처 불명의 금속 장치가 확인됐습니다. 일반 폐기물로 판단해 옮기지 말고 현장 보존 후 보고 부탁드립니다.\n\n유사 장치와의 연관성은 확인 중입니다. 구체 위치는 담당팀에 전달했습니다.',views:328,replies:3},
{id:'f2',category:'현장 정보',title:'다중 능력 발현 현장, 통제선부터 공유해 주세요',hero:'앵커',affiliation:'SSA 현장대응과',created:'2026-10-30',body:'후발대 도착 시 진입로가 겹치는 사례가 있습니다. 현장 인계 때 통제선, 시민 대피 방향, 구조팀 진입로를 우선 공유해 주세요.\n\n개별 교전 정보보다 대피 동선 확인이 먼저입니다.',views:467,replies:2},
{id:'f3',category:'현장 정보',title:'야간 수색 인계 시 남겨두면 좋은 항목 정리',hero:'등대',affiliation:'해오름 길드',created:'2026-10-28',body:'수색 완료 구역, 미확인 구역, 조명 상태, 구조 요청 접수 위치를 따로 기록하면 인계가 빨라집니다.\n\n지도에 미확인 구역까지 완료 표시하지 않도록 한 번 더 확인 부탁드립니다.',views:279,replies:1},
{id:'c1',category:'자유게시판',title:'구내식당 외부 길드도 이용할 수 있나요?',hero:'잔물결',affiliation:'해오름 길드',created:'2026-10-31',body:'내일 교육 때문에 서울지국 가는데 점심을 어디서 먹어야 하나 해서요. 교육 참석자도 식권 구매 가능한가요?\n처음 가는 거라 건물 입구부터 헤맬 예정입니다.',views:216,replies:3},
{id:'c2',category:'자유게시판',title:'야간 근무 끝나고 먹는 첫 끼 추천 받습니다',hero:'철야',affiliation:'백야 길드',created:'2026-10-31',body:'국밥은 어제 먹었고 오늘도 먹어도 되는지 진지하게 고민 중입니다.\n부상 없습니다. 그냥 배고픕니다.',views:187,replies:2},
{id:'c3',category:'장비·능력 상담',title:'통신 이어피스, 헬멧이랑 같이 쓰는 분 계세요?',hero:'리벳',affiliation:'개인 히어로',created:'2026-10-30',body:'장시간 착용하면 귀가 너무 눌리네요. 현장용 헬멧 안에 넣어도 간섭 적은 형태가 있을까요?\n특정 제품 홍보 말고 착용 방식 조언이면 좋겠습니다.',views:352,replies:2},
{id:'c4',category:'자유게시판',title:'공용 냉장고에 이름 적어주세요. 제발.',hero:'앵커',affiliation:'SSA 현장대응과',created:'2026-10-29',body:'이름 없는 용기 세 개가 있습니다. 언제 들어왔는지도 모르겠습니다.\n능력으로 해결할 수 있는 문제가 아닙니다.',views:591,replies:4},
{id:'c5',category:'장비·능력 상담',title:'방수 장갑 건조할 때 열풍 써도 되나요?',hero:'소나기',affiliation:'청람 길드',created:'2026-10-28',body:'안감까지 젖어서 잘 안 마르는데 관리 지침에는 자연 건조만 적혀 있네요.\n예비 장갑 신청해두긴 했습니다. 다들 두 켤레씩 돌려 쓰시나요?',views:208,replies:1},
];
export const initialComments:Record<string,{id?:string;parent?:string;hero:string;affiliation:string;body:string}[]>={...recruitmentComments,...communityComments,
c1:[{hero:'앵커',affiliation:'SSA 현장대응과',body:'교육 참가증 보여주시면 식권 구매 가능합니다. 2층이에요.'},{hero:'철야',affiliation:'백야 길드',body:'오른쪽 엘리베이터 타세요. 왼쪽 타면 또 길 잃습니다.'},{hero:'잔물결',affiliation:'해오름 길드',body:'감사합니다. 이미 왼쪽 탈 생각이었는데 살았네요.'}],
c2:[{hero:'방벽',affiliation:'청람 길드',body:'이틀 연속은 가능합니다. 사흘째부터는 단골입니다.'},{hero:'철야',affiliation:'백야 길드',body:'그럼 이미 단골이네요.'}],
c4:[{hero:'리벳',affiliation:'개인 히어로',body:'마지막 문장에서 현장 지휘관의 피로가 느껴져요.'},{hero:'앵커',affiliation:'SSA 현장대응과',body:'농담 아닙니다. 금요일에 정리합니다.'}],
f1:[{hero:'앵커',affiliation:'SSA 현장대응과',body:'담당팀 전달 확인했습니다. 추가 식별 정보는 공개 게시를 삼가 주세요.'}],
c3:[{hero:'방벽',affiliation:'청람 길드',body:'장비실에서 헬멧 호환 규격부터 확인해 보세요. 패드 바꾸니 나아졌습니다.'}]
};
export const dossiers=[
{id:'unknown',name:'UNKNOWN',type:'중점 추적 · 집단',status:'수배 중',summary:'다수의 특수범죄 사건에서 공동 출몰이 확인된 6인.',body:'UNKNOWN은 반복적으로 공동 출몰한 관련자들을 구분하기 위해 SSA 서울지국이 부여한 행정상 명칭입니다. 자칭 조직명으로 확인된 바 없습니다.\n\n관련자 식별명: 발렌타인 · 세인트 · 오멘 · 아비터 · 비주 · 파우스트\n\n2년 전 백산의생명연구원 시설 파괴 및 연구원 사망 사건과 관련하여 집단 수배 중입니다. 사건의 세부 경위 및 개별 관여 정도는 수사 중입니다.\n\n시민 및 비전투 인력은 접근하거나 추적하지 마십시오. 접촉 시 안전한 거리를 확보하고 소속 보고체계를 이용하십시오.\n\n[열람 제한] 능력별 분석, 교전 기록, 신병 확보 지침은 담당 부서 인가가 필요합니다.'},
{id:'gray',name:'회색항로',type:'불법 유통 · 수사상 분류명',status:'수사 중',summary:'무허가 능력억제제 유통과 관련된 연계망.',body:'불법 능력억제제의 보관·운송·중개에 관여한 연계망을 지칭합니다. 단일 지휘체계 존재 여부는 미확인입니다.\n\n일부 관련자 신병 확보 후 유통 경로를 조사 중입니다. 회수품의 성분과 위해성 분석은 진행 중이며 현장 인력의 임의 사용을 금지합니다.\n\n[비공개] 관련자 인적사항 및 추적 중인 유통 거점.'},
{id:'moth',name:'모스',type:'단독 활동 · 식별명',status:'소재 확인 중',summary:'야간 침입 및 보안설비 훼손 사건 관련 추적 대상.',body:'일부 현장에서 동일한 복장과 이동 특성이 확인되었습니다. 광원 주변의 시야 교란 현상이 보고되었으나 대상의 능력으로 확정되지 않았습니다.\n\n신원: 미상\n소속: 미확인\n관련 혐의: 특수침입, 보안설비 훼손\n\n목격 정보는 시간·장소·관찰 방향을 구분해 기록하십시오. 단독 추적은 삼가 주십시오.'},
{id:'hollow',name:'할로우 서클',type:'불법 중개 · 조직',status:'수사 중',summary:'미등록 능력자의 불법 의뢰 중개 관련 수사 대상.',body:'익명 의뢰망을 통해 능력자의 범죄 가담을 중개한 정황이 확인되었습니다. 회색항로와의 연계설은 현재 확인되지 않았습니다.\n\n확인되지 않은 조직명이나 구성원 추정을 사실처럼 게시하지 마십시오.\n\n[열람 제한] 잠입수사 및 정보원 관련 자료.'}
];

seed.splice(0,seed.length,...officialPosts,...fieldPosts,...seed.filter(p=>!['공지사항','보도자료','현장 정보'].includes(p.category)));
dossiers.splice(0,dossiers.length,...dossiers.filter(d=>d.id!=='moth'),...additionalDossiers);
seed.sort((a,b)=>b.created.localeCompare(a.created));
seed.forEach(post=>{post.replies=initialComments[post.id]?.length||0});

const casualUpdates:Record<string,string>={"c1":"내일 교육때문에 서울지국 가는데 거기 식당 외부인도 쓸수있음?\n참가증 있으면 되나.. 처음가서 입구부터 헤맬듯ㅋㅋ","c2":"야간 끝남 배고픔\n국밥 어제도 먹었는데 오늘 또먹어도 되겠지\n다친거아님 걍 밥얘기임","c3":"헬멧이랑 이어피스 같이쓰는사람 귀 안아픔?\n좀만 오래끼면 눌려서 아픈데 나만그런가\n광고말고 착용팁 있으면 좀","c4":"냉장고에 이름없는 통 세개있음\n언제 들어온지도 모름\n능력으로 해결 안됩니다 제발 이름좀","c5":"장갑 안쪽까지 젖었는데 이거 대체 언제마르냐\n열풍 쓰지말라해서 걍 놔뒀는데 예비 하나 더 있어야겠네"};
seed.forEach(p=>{if(casualUpdates[p.id])p.body=casualUpdates[p.id]});

const retainedReplies:Record<string,string[]>={c1:['교육 참가증 보여주면 식권 살수있어요 2층임','엘베 오른쪽 타세요 왼쪽타면 또헤맴ㅋㅋ','ㄳㅋㅋ 이미 왼쪽탈생각이었는데'],c2:['이틀까지는 괜찮음 사흘째부터 단골','그럼 나 이미 단골임ㅋㅋ'],c3:['헬멧 호환규격부터 봐봐 패드만 바꿔도 다름'],c4:['마지막줄에서 피곤함이 느껴진다','금요일에 정리할거임 농담아님']};
Object.entries(retainedReplies).forEach(([id,replies])=>{initialComments[id]?.forEach((comment,i)=>{if(replies[i])comment.body=replies[i]})});

// Stable IDs let server replies target the existing worldbuilding comments.
Object.entries(initialComments).forEach(([postId,comments])=>{
 const post=seed.find(p=>p.id===postId);
 comments.forEach((comment,index)=>{comment.id='seed:'+postId+':'+index;
  if(index>0&&post&&comment.hero===post.hero&&comment.affiliation===post.affiliation){
   const previous=comments[index-1];comment.parent=previous.parent||previous.id;
  }
 });
});
