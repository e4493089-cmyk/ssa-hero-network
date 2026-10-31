import {recruitmentPosts,recruitmentComments} from './recruitment-data';
import {officialPosts,fieldPosts} from './official-data';
import {additionalDossiers} from './villains';
import {caseDossiers} from './case-data';
import {gatePosts} from './gate-posts';
import {communityPosts,communityComments} from './community-data';
export type Post={id:string;title:string;body:string;category:string;hero:string;affiliation:string;created:string;account?:string;views?:number;replies?:number;board?:string;relatedCase?:string};
export const seed:Post[]=[...gatePosts,...officialPosts,...fieldPosts,...recruitmentPosts,...communityPosts,...[
  {
    "id": "c1",
    "category": "자유게시판",
    "title": "구내식당 외부 길드도 이용할 수 있나요?",
    "hero": "잔물결",
    "affiliation": "해오름",
    "created": "2026-10-31",
    "body": "내일 교육 때문에 서울지국 가는데 점심을 어디서 먹어야 하나 해서요. 교육 참석자도 식권 구매 가능한가요?\n처음 가는 거라 건물 입구부터 헤맬 예정입니다.",
    "views": 216,
    "replies": 3
  },
  {
    "id": "c2",
    "category": "자유게시판",
    "title": "야간 근무 끝나고 먹는 첫 끼 추천 받습니다",
    "hero": "철야",
    "affiliation": "서광",
    "created": "2026-10-31",
    "body": "국밥은 어제 먹었고 오늘도 먹어도 되는지 진지하게 고민 중입니다.\n부상 없습니다. 그냥 배고픕니다.",
    "views": 187,
    "replies": 2
  },
  {
    "id": "c3",
    "category": "장비·능력 상담",
    "title": "통신 이어피스, 헬멧이랑 같이 쓰는 분 계세요?",
    "hero": "리벳",
    "affiliation": "미소속",
    "created": "2026-10-30",
    "body": "장시간 착용하면 귀가 너무 눌리네요. 현장용 헬멧 안에 넣어도 간섭 적은 형태가 있을까요?\n특정 제품 홍보 말고 착용 방식 조언이면 좋겠습니다.",
    "views": 352,
    "replies": 2
  },
  {
    "id": "c4",
    "category": "자유게시판",
    "title": "공용 냉장고에 이름 적어주세요. 제발.",
    "hero": "앵커",
    "affiliation": "SSA 현장대응과",
    "created": "2026-10-29",
    "body": "이름 없는 용기 세 개가 있습니다. 언제 들어왔는지도 모르겠습니다.\n능력으로 해결할 수 있는 문제가 아닙니다.",
    "views": 591,
    "replies": 4
  },
  {
    "id": "c5",
    "category": "장비·능력 상담",
    "title": "방수 장갑 건조할 때 열풍 써도 되나요?",
    "hero": "소나기",
    "affiliation": "넥시온",
    "created": "2026-10-28",
    "body": "안감까지 젖어서 잘 안 마르는데 관리 지침에는 자연 건조만 적혀 있네요.\n예비 장갑 신청해두긴 했습니다. 다들 두 켤레씩 돌려 쓰시나요?",
    "views": 208,
    "replies": 1
  }
]];
export const initialComments:Record<string,{id?:string;parent?:string;hero:string;affiliation:string;body:string}[]>={...recruitmentComments,...communityComments,...{
  "c1": [
    {
      "hero": "앵커",
      "affiliation": "SSA 현장대응과",
      "body": "교육 참가증 보여주시면 식권 구매 가능합니다. 2층이에요."
    },
    {
      "hero": "철야",
      "affiliation": "서광",
      "body": "오른쪽 엘리베이터 타세요. 왼쪽 타면 또 길 잃습니다."
    },
    {
      "hero": "잔물결",
      "affiliation": "해오름",
      "body": "감사합니다. 이미 왼쪽 탈 생각이었는데 살았네요."
    }
  ],
  "c2": [
    {
      "hero": "방벽",
      "affiliation": "넥시온",
      "body": "이틀 연속은 가능합니다. 사흘째부터는 단골입니다."
    },
    {
      "hero": "철야",
      "affiliation": "서광",
      "body": "그럼 이미 단골이네요."
    }
  ],
  "c4": [
    {
      "hero": "리벳",
      "affiliation": "미소속",
      "body": "마지막 문장에서 현장 지휘관의 피로가 느껴져요."
    },
    {
      "hero": "앵커",
      "affiliation": "SSA 현장대응과",
      "body": "농담 아닙니다. 금요일에 정리합니다."
    }
  ],
  "c3": [
    {
      "hero": "방벽",
      "affiliation": "넥시온",
      "body": "장비실에서 헬멧 호환 규격부터 확인해 보세요. 패드 바꾸니 나아졌습니다."
    }
  ]
}};
export const dossiers=[
  {
    "id": "unknown",
    "name": "UNKNOWN",
    "type": "중점 추적 · 집단",
    "status": "수배 중",
    "summary": "시설 파괴 및 연구원 사망 사건 관련 집단 수배 대상 6인.",
    "body": "재단법인 백산의생명연구원 시설 파괴 및 연구원 사망 사건과 관련하여 발렌타인·세인트·오멘·아비터·비주·파우스트 등 관련자 6인을 집단 수배합니다.\n\n이후 반복적인 공동 출몰이 확인되어 SSA 서울지국이 사건 구분을 위한 행정상 명칭 “UNKNOWN”을 부여하였습니다. 대상자들이 사용하는 조직명이나 별도의 소속 관계가 확인되었다는 의미는 아닙니다.\n\n사건의 세부 경위, 관련자별 관여 정도 및 수사자료는 공개하지 않습니다. 목격 시 직접 접근하거나 독자적으로 추적하지 말고 관찰 시각·위치·이동 방향을 구분하여 지정된 보고체계로 전달하십시오.\n\n능력별 분석과 교전 관련 자료는 담당 부서 인가가 필요한 제한 자료입니다."
  },
  {
    "id": "gray",
    "name": "회색항로",
    "type": "불법 유통 · 수사상 분류명",
    "status": "수사 중",
    "summary": "무허가 능력억제제 유통과 관련된 연계망.",
    "body": "불법 능력억제제의 보관·운송·중개에 관여한 연계망을 지칭합니다. 단일 지휘체계 존재 여부는 미확인입니다.\n\n일부 관련자 신병 확보 후 유통 경로를 조사 중입니다. 회수품의 성분과 위해성 분석은 진행 중이며 현장 인력의 임의 사용을 금지합니다.\n\n[비공개] 관련자 인적사항 및 추적 중인 유통 거점."
  },
  {
    "id": "hollow",
    "name": "할로우 서클",
    "type": "불법 중개 · 조직",
    "status": "수사 중",
    "summary": "미등록 능력자의 불법 의뢰 중개 관련 수사 대상.",
    "body": "익명 의뢰망을 통해 능력자의 범죄 가담을 중개한 정황이 확인되었습니다. 회색항로와의 연계설은 현재 확인되지 않았습니다.\n\n확인되지 않은 조직명이나 구성원 추정을 사실처럼 게시하지 마십시오.\n\n[열람 제한] 잠입수사 및 정보원 관련 자료."
  },
  {
    "id": "byproduct-records",
    "name": "부산물 인수기록 위조 의심 사건",
    "type": "불법 유통 · 사건자료",
    "status": "수사 중",
    "summary": "회수 경위가 확인되지 않은 물품과 인수 기록의 연관성 확인 중.",
    "body": "정상 회수물로 표시된 인수 기록과 실제 회수 경위가 일치하는지 확인 중인 사건입니다.\n\n문서번호만으로 해당 물품의 출처나 거래 적법성이 확인되는 것은 아닙니다. 관련 기록을 보유한 기관은 원본을 보존하고 지정 창구로 제출하여 주십시오.\n\n개별 업체명, 거래 조건과 수사 중인 운송 경로는 공개하지 않습니다. 확인되지 않은 거래처 정보를 일반 게시판에 유포하지 마십시오."
  }
];
dossiers.push(...additionalDossiers,...caseDossiers);
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
