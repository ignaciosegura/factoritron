(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),i=a.n(r),s=(a(17),a(2)),o=a(3),l=a(6),m=a(5),u=a(7),d=(a(20),a(21),a(8)),h=a(4),b=a(1),p=new(function(){function e(){Object(s.a)(this,e),this.teams=Object(b.j)([])}return Object(o.a)(e,[{key:"addPointToTeam",value:function(e){this.teams[e].score++}},{key:"subtractPointToTeam",value:function(e){this.teams[e].score=this.teams[e].score>0?this.teams[e].score-1:0}},{key:"addTeam",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"new team";this.teams.push({name:e,score:0})}}]),e}()),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),"+"===this.props.sign?p.addPointToTeam(this.props.team):p.subtractPointToTeam(this.props.team)}},{key:"render",value:function(){var e="button ";return e+="+"===this.props.sign?"button plus":"minus",c.a.createElement("div",{className:e,onClick:this.handleClick},this.props.sign)}}]),t}(n.Component),j=Object(d.b)("GameStore")(Object(d.c)(function(e){function t(e){var a;Object(s.a)(this,t);var n=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.team;return a.teamInfo=a.props.GameStore.teams[n],a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"teamboard scoreboard-box"},c.a.createElement("div",{className:"name"},this.teamInfo.name),c.a.createElement("div",{className:"score"},this.teamInfo.score),c.a.createElement("div",{className:"buttons"},c.a.createElement(v,{sign:"+",team:this.props.team}),c.a.createElement(v,{sign:"-",team:this.props.team})))}}]),t}(n.Component))),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={active:!1},a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(h.a)(Object(h.a)(a))),a.addTeam=a.addTeam.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState({active:!0})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&(this.addTeam(e.currentTarget.value),this.setState({active:!1}))}},{key:"addTeam",value:function(e){p.addTeam(e)}},{key:"render",value:function(){var e=this.state.active?"active":"not-active";return c.a.createElement("div",{className:"new-team scoreboard-box",onClick:this.handleClick},"+",c.a.createElement("input",{className:e,type:"text",onKeyPress:this.handleKeyPress}))}}]),t}(n.Component),f=Object(d.b)("GameStore")(Object(d.c)(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).teamList=a.props.GameStore.teams,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.teamList.map(function(e,t){return c.a.createElement(j,{team:t,key:t})});return c.a.createElement("div",{className:"scoreboard"},e,c.a.createElement(O,null))}}]),t}(n.Component))),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"title"},"Factoritr\xf3n")),c.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(d.a,{GameStore:p},c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.46999338.chunk.js.map