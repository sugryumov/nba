import{a7 as _,m as c,j as e}from"./index.a25acdb7.js";import{G as N}from"./index.5ad8586e.js";import{T as t}from"./Table.08e07cb9.js";import{a4 as A}from"./index.dc8c109c.js";const G=s=>{const{homeTeam:l,awayTeam:n}=s.game;return{awayTeam:n,homeTeam:l}},M=_.injectEndpoints({endpoints:s=>({fetchBoxScore:s.query({query:l=>({url:`/box-score/${l}`}),transformResponse:l=>G(l)})})}),{useFetchBoxScoreQuery:w}=M,a=s=>Number(s.played)?{}:{colSpan:0},v=[{title:"Player",fixed:!0,render:(s,l)=>{const{name:n,position:i}=l;return c("div",{className:"box-score__table--player",children:[n,e("span",{className:"box-score__table--position",children:i!=null?i:""})]})}},{title:"MIN",dataIndex:["statistics","minutes"],render:(s,l)=>{const[n,i]=s.split("M"),{played:o,notPlayingReason:r}=l;return Number(o)?`${n.match(/\d+/)}:${i.match(/\d+/)}`:e("p",{className:"box-score__table--not-playing",children:r?r.split("_").join(" - "):"DNP - Coach's Decision"})},onCell:({played:s})=>Number(s)?{}:{colSpan:20}},{title:"FGM",dataIndex:["statistics","fieldGoalsMade"],onCell:a},{title:"FGA",dataIndex:["statistics","fieldGoalsAttempted"],onCell:a},{title:"FG%",dataIndex:["statistics","fieldGoalsPercentage"],render:s=>(s*100).toFixed(1),onCell:a},{title:"3PM",dataIndex:["statistics","threePointersMade"],onCell:a},{title:"3PA",dataIndex:["statistics","threePointersAttempted"],onCell:a},{title:"3P%",dataIndex:["statistics","threePointersPercentage"],render:s=>(s*100).toFixed(1),onCell:a},{title:"FTM",dataIndex:["statistics","freeThrowsMade"],onCell:a},{title:"FTA",dataIndex:["statistics","freeThrowsAttempted"],onCell:a},{title:"FT%",dataIndex:["statistics","freeThrowsPercentage"],render:s=>(s*100).toFixed(1),onCell:a},{title:"OREB",dataIndex:["statistics","reboundsOffensive"],onCell:a},{title:"DREB",dataIndex:["statistics","reboundsDefensive"],onCell:a},{title:"REB",dataIndex:["statistics","reboundsTotal"],onCell:a},{title:"AST",dataIndex:["statistics","assists"],onCell:a},{title:"STL",dataIndex:["statistics","steals"],onCell:a},{title:"BLK",dataIndex:["statistics","blocks"],onCell:a},{title:"TO",dataIndex:["statistics","turnovers"],onCell:a},{title:"PF",dataIndex:["statistics","foulsPersonal"],onCell:a},{title:"PTS",dataIndex:["statistics","points"],onCell:a},{title:"+/-",dataIndex:["statistics","plusMinusPoints"],onCell:a}];const B=({statistics:s})=>{const{fieldGoalsMade:l,fieldGoalsAttempted:n,fieldGoalsPercentage:i,threePointersMade:o,threePointersAttempted:r,threePointersPercentage:m,freeThrowsMade:d,freeThrowsAttempted:x,freeThrowsPercentage:u,reboundsOffensive:h,reboundsDefensive:C,reboundsPersonal:y,assists:f,steals:S,blocks:p,turnovers:P,foulsPersonal:b,points:T}=s,I=(i*100).toFixed(1),F=(m*100).toFixed(1),g=(u*100).toFixed(1);return e(t.Summary,{fixed:!0,children:c(t.Summary.Row,{className:"box-score__table--summary",children:[e(t.Summary.Cell,{index:0,className:"box-score__table--totals",children:"Totals"}),e(t.Summary.Cell,{index:1}),e(t.Summary.Cell,{index:2,children:l}),e(t.Summary.Cell,{index:2,children:n}),e(t.Summary.Cell,{index:3,children:I}),e(t.Summary.Cell,{index:4,children:o}),e(t.Summary.Cell,{index:5,children:r}),e(t.Summary.Cell,{index:6,children:F}),e(t.Summary.Cell,{index:7,children:d}),e(t.Summary.Cell,{index:8,children:x}),e(t.Summary.Cell,{index:9,children:g}),e(t.Summary.Cell,{index:10,children:h}),e(t.Summary.Cell,{index:11,children:C}),e(t.Summary.Cell,{index:12,children:y}),e(t.Summary.Cell,{index:13,children:f}),e(t.Summary.Cell,{index:14,children:S}),e(t.Summary.Cell,{index:15,children:p}),e(t.Summary.Cell,{index:16,children:P}),e(t.Summary.Cell,{index:17,children:b}),e(t.Summary.Cell,{index:18,children:T}),e(t.Summary.Cell,{index:19})]})})};const j=({data:s})=>{const{teamCity:l,teamName:n,players:i,statistics:o}=s,r=i.filter(d=>d.status==="ACTIVE");return e(t,{size:"small",rowKey:"name",title:()=>c("p",{className:"title",children:[l," ",n]}),dataSource:r,columns:v,pagination:!1,className:"box-score__table",summary:()=>e(B,{statistics:o})})},L=()=>{const{search:s}=A(),l=new URLSearchParams(s).get("id"),{data:n={},isFetching:i,isError:o}=w(l);return e(N,{data:Object.keys(n),isLoading:i,isError:o,children:Object.values(n).map(r=>e(j,{data:r},r.teamId))})};export{L as default};
