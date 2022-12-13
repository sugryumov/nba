import{a7 as v,a9 as l,j as s,m as o,ab as y,K as C,ac as T}from"./index.9ce2ad36.js";import{G as E}from"./index.99eca8be.js";import{m as b}from"./index.dfacec3b.js";import{C as O,S as k,b as c}from"./index.2b4e8b0d.js";import{S as B,T as w}from"./Table.c03aa743.js";import"./getScrollBarSize.d23cc292.js";import"./TextArea.27aa7f6b.js";const A=n=>n.map(({TeamID:e,PlayoffRank:a,DivisionRank:t,TeamCity:i,TeamName:d,Conference:r,Division:m,WINS:g,LOSSES:u,WinPCT:p,ConferenceGamesBack:h,ConferenceRecord:_,DivisionRecord:f,HOME:R,ROAD:S,OT:N,L10:I,strCurrentStreak:x})=>({teamId:e,playoffRank:a,divisionRank:t,teamCity:i,teamName:d,division:m,conference:r,wins:g,losses:u,winPct:p,conferenceGamesBack:h,conferenceRecord:_,divisionRecord:f,homeRecord:R,roadRecord:S,overTime:N,last10:I,strCurrentStreak:x})),D=v.injectEndpoints({endpoints:n=>({fetchStandings:n.query({query:()=>({url:"/standings"}),transformResponse:e=>A(e.Standings)})})}),{useFetchStandingsQuery:G}=D,F=[{value:"division",label:"Division"},{value:"conference",label:"Conference"}];const L=()=>{const{groupBy:n}=l(t=>t.standingsReducer),{setGroupBy:e}=b();return s(O,{className:"standings__settings",children:o("div",{className:"standings__settings--inner",children:[s("p",{className:"standings__settings--title",children:"'22 - '23 Regular Season Standings"}),s(B,{defaultValue:n,style:{width:120},onChange:t=>{e(t)},options:F,className:"standings__settings--select"})]})})},j=[{title:"Team",fixed:!0,render:(n,e)=>{const{groupBy:a,divisionRank:t,playoffRank:i,teamCity:d,teamName:r}=e;return o("div",{className:"standings__team",children:[s("p",{className:"standings__rank",children:a===y.CONFERENCE?i:t}),s(k,{name:c[r],width:28,height:28}),o("div",{className:"standings__name",children:[s("p",{className:"standings__name-mobile",children:c[r]}),o("p",{className:"standings__name-desktop",children:[d," ",r]})]})]})}},{title:"W",dataIndex:"wins"},{title:"L",dataIndex:"losses"},{title:"WIN%",dataIndex:"winPct",render:n=>n.toLocaleString(void 0,{minimumFractionDigits:3})},{title:"GB",dataIndex:"conferenceGamesBack"},{title:"CONF",dataIndex:"conferenceRecord"},{title:"DIV",dataIndex:"divisionRecord"},{title:"HOME",dataIndex:"homeRecord"},{title:"ROAD",dataIndex:"roadRecord"},{title:"OT",dataIndex:"overTime"},{title:"LAST10",dataIndex:"last10"},{title:"STREAK",dataIndex:"strCurrentStreak"}];const K=({title:n,data:e})=>s(w,{size:"small",rowKey:"teamId",title:()=>s("p",{className:"title",children:n}),dataSource:e,columns:j,pagination:!1,className:"standings__table"}),V=(n=[],e)=>n.reduce((a,t)=>{const i=t[e].toLocaleLowerCase();return a[i]?{...a,[i]:[...a[i],{...t,groupBy:e}]}:{...a,[i]:[t]}},{}),U=()=>{const{groupBy:n}=l(d=>d.standingsReducer),{data:e,isFetching:a,isError:t}=G({}),i=V(e,n);return o(C,{children:[s(L,{}),s(E,{data:e,isLoading:a,isError:t,children:Object.entries(i).map(([d,r])=>s(K,{data:r,title:T[d]},d))})]})};export{U as default};
