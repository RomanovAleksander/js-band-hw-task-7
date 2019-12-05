(this["webpackJsonpjs-band-hw-task-7"]=this["webpackJsonpjs-band-hw-task-7"]||[]).push([[0],{32:function(e,t,n){e.exports=n(44)},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(18),i=n.n(a),c=n(20),l=n(28),s=n(14),p=n(16),u=n(6),d=n(9),m=n(10),h=n(12),O=n(11),f=n(13);var y=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},"TODOList"))},b=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(h.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(o)))).onSearchChange=function(e){var t=e.target;n.props.onSearchChange(t.value)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.searchText;return o.a.createElement("div",{className:"filter__item"},o.a.createElement("input",{type:"search",className:"filter__search",placeholder:"search by title",onChange:this.onSearchChange,value:e}))}}]),t}(r.Component),g=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(h.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(o)))).handlePriorityChange=function(e){var t=e.target;n.props.onPriorityChange(t.value)},n.handleStatusChange=function(e){var t=e.target;n.props.onStatusChange(t.value)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.priority,n=e.completed,r=e.openForm;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"filter__item"},o.a.createElement("select",{className:"select-status select",key:"status",onChange:this.handleStatusChange,value:n},o.a.createElement("option",{value:"all"},"all"),o.a.createElement("option",{value:"open"},"open"),o.a.createElement("option",{value:"done"},"done"))),o.a.createElement("div",{className:"filter__item"},o.a.createElement("select",{className:"select-priority select",key:"priority",onChange:this.handlePriorityChange,value:t},o.a.createElement("option",{value:"all"},"all"),o.a.createElement("option",{value:"high"},"high"),o.a.createElement("option",{value:"normal"}," normal"),o.a.createElement("option",{value:"low"},"low"))),o.a.createElement("div",{className:"filter__item"},o.a.createElement("button",{className:"filter__create-btn btn",type:"button",onClick:r},"Create")))}}]),t}(r.Component),v=n(31);var E=function(e){var t=Object(r.useState)(!1),n=Object(v.a)(t,2),a=n[0],i=n[1],c=e.id,l=e.text,s=e.description,p=e.priority,u=e.done,d=e.onDeleted,m=e.onToggleDone,h=e.onToggleEdit,O="todo",f=u?"":" display_none";return u&&(O+=" done"),o.a.createElement("div",{className:O},o.a.createElement("div",{className:"todo__check ".concat(f),onClick:m},o.a.createElement("span",{className:"glyphicon glyphicon-ok","aria-hidden":"true"}," ")),o.a.createElement("h3",{className:"todo__title"},l),o.a.createElement("div",{className:"todo__description"},s),o.a.createElement("div",{className:"todo__footer"},o.a.createElement("div",{className:"todo__priority"},p),o.a.createElement("div",{className:"todo__button btn",onClick:function(){i(!a)},id:c},"..."),o.a.createElement("div",{className:"todo__menu ".concat(a?"":" display_none")},o.a.createElement("div",{className:"todo__menu-item task-done",onClick:m},"done"),o.a.createElement("div",{className:"todo__menu-item task-edit",onClick:h},"edit"),o.a.createElement("div",{className:"todo__menu-item task-delete",onClick:d},"delete"))))};var j=function(e){var t=e.todos,n=e.onDeleted,r=e.onToggleDone,a=e.onToggleOpen,i=e.onToggleEdit,c=t.map((function(e){var t=e.id;return o.a.createElement("div",{key:t},o.a.createElement(E,Object.assign({},e,{onDeleted:function(){return n(t)},onToggleDone:function(){return r(t)},onToggleOpen:function(){return a(t)},onToggleEdit:function(){return i(t)}})))}));return o.a.createElement("div",{className:"todo-list"},c)};var _=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("h1",null,"Oleksandr Romanov"))};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var T=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(O.a)(t).call(this,e))).onTitleChange=function(e){n.setState({text:e.target.value})},n.onDescriptionChange=function(e){n.setState({description:e.target.value})},n.onPriorityChange=function(e){n.setState({priority:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.todo?n.props.onUpdated(n.state):n.props.onAdded(n.state),n.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.default)),n.props.closeForm()},n.default={text:"",description:"",priority:"normal"},n.state=e.todo||n.default,n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.text,n=e.description,r=e.priority,a=this.props,i=a.isFormOpen,c=a.closeForm,l=i?"":" display_none";return o.a.createElement("div",{className:"form-wrapper".concat(l),onSubmit:this.onSubmit},o.a.createElement("form",{className:"form"},o.a.createElement("label",{htmlFor:"title"}," Title"),o.a.createElement("input",{required:"",id:"title",type:"text",className:"title_input",onChange:this.onTitleChange,placeholder:"Title",value:t}),o.a.createElement("label",{htmlFor:"description"}," Description"),o.a.createElement("input",{type:"text",className:"description_input",placeholder:"Description",id:"description",onChange:this.onDescriptionChange,value:n}),o.a.createElement("label",{htmlFor:"priority"},"Priority"),o.a.createElement("select",{className:"change-priority",id:"priority",onChange:this.onPriorityChange,value:r},o.a.createElement("option",{value:"normal"},"normal"),o.a.createElement("option",{value:"high"},"high"),o.a.createElement("option",{value:"low"},"low")),o.a.createElement("div",{className:"form__footer"},o.a.createElement("button",{type:"button",className:"cancel-btn btn",onClick:c},"Cancel"),o.a.createElement("button",{type:"submit",className:"button btn"},"Save"))))}}]),t}(o.a.Component),P=1,C=function(e,t,n){return{type:"ADD_TODO",payload:{id:P++,text:e,description:t,priority:n}}},w=function(e){return{type:"REMOVE_TODO",payload:{id:e}}},N=function(e,t,n,r){return{type:"UPDATE_TODO",payload:{id:r,text:e,description:t,priority:n}}},S=function(e){return{type:"FILTER_BY_PRIORITY",payload:{priorityFilter:e}}},x="all",k=function(e){return{type:"FILTER_BY_DONE",payload:{doneFilter:e}}},F="all",I=function(e){return{type:"TOGGLE_TODO",payload:{id:e}}},R=function(e,t){return{type:"SEARCH_TODO",payload:{searchText:e,todos:t}}},A=function(e,t){return{type:"SEARCH_IN_TODOS",payload:{searchText:t,todos:e}}},L=function(e,t){return{type:"PRIORITY_IN_TODOS",payload:{priority:t,todos:e}}},M=function(e,t){return{type:"DONE_IN_TODOS",payload:{done:t,todos:e}}};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var B=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(O.a)(t).call(this))).onSearchChange=function(t){e.props.dispatch(R(t)),e.props.dispatch(A(e.props.todos,t))},e.onPriorityChange=function(t){e.props.dispatch(S(t)),e.props.dispatch(L(e.props.todos,t))},e.onStatusChange=function(t){e.props.dispatch(k(t)),e.props.dispatch(M(e.props.todos,t))},e.openForm=function(){e.setState({isFormOpen:!0})},e.closeForm=function(){e.setState({isFormOpen:!1,item:null})},e.toggleProperty=function(e,t,n,r){var o,a=!r,i=e.findIndex((function(e){return e.id===t})),c=e[i],l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c,(o={},Object(u.a)(o,n,!c[n]),Object(u.a)(o,"showMenu",a),o));return[].concat(Object(p.a)(e.slice(0,i)),[l],Object(p.a)(e.slice(i+1)))},e.onToggleDone=function(t){e.props.dispatch(I(t))},e.onToggleOpen=function(t){e.setState((function(n){var r=n.todoData;return{todoData:e.toggleProperty(r,t,"showMenu",!1)}}))},e.findItem=function(t){return e.props.todos.find((function(e){return e.id===t}))},e.onEdit=function(t){var n=e.findItem(t);e.openForm(),e.setState({item:n})},e.deleteItem=function(t){e.props.dispatch(w(t))},e.addItem=function(t){var n=t.text,r=t.description,o=t.priority;e.props.dispatch(C(n,r,o))},e.updateItem=function(t){var n=t.text,r=t.description,o=t.priority,a=t.id;e.props.dispatch(N(n,r,o,a))},e.state={isFormOpen:!1,item:null},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isFormOpen,n=e.item,r=this.props,a=r.filterPriority,i=r.filterDone,c=r.searchText,l=r.visibleTodos;return o.a.createElement("div",{className:"wrapper"},o.a.createElement(y,null),o.a.createElement("main",{className:"content"},o.a.createElement("div",{className:"filter"},o.a.createElement(b,{onSearchChange:this.onSearchChange,searchText:c}),o.a.createElement(g,{priority:a,completed:i,onPriorityChange:this.onPriorityChange,onStatusChange:this.onStatusChange,openForm:this.openForm})),o.a.createElement(j,{todos:l,onDeleted:this.deleteItem,onToggleDone:this.onToggleDone,onToggleOpen:this.onToggleOpen,onToggleEdit:this.onEdit}),t&&o.a.createElement(T,{todo:n,isFormOpen:t,closeForm:this.closeForm,onAdded:this.addItem,onUpdated:this.updateItem})),o.a.createElement(_,null))}}]),t}(o.a.Component),G=Object(c.b)((function(e){return{todos:e.todos,filterPriority:e.filterByPriority,filterDone:e.filterDone,searchText:e.searchText,visibleTodos:e.visibleTodos}}))(B),U=(n(41),function(){return o.a.createElement(l.a,null,o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/todos",component:G}),o.a.createElement(s.a,{from:"/",to:"/todos",exact:!0}),o.a.createElement(s.b,{path:"*"},o.a.createElement("div",{className:"glyphicon glyphicon-remove not-found"},o.a.createElement("p",null,"Page not found")))))}),H=n(15),V=n(30);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=[{id:0,text:"HW6",description:"Use bootstrap",priority:"high",done:!1,showMenu:!1}],z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"FILTER_BY_PRIORITY":return r.priorityFilter;default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"FILTER_BY_DONE":return r.doneFilter;default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"SEARCH_TODO":return r.searchText;default:return e}};function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"SEARCH_IN_TODOS":return r.todos.filter((function(e){return e.text.toLowerCase().includes(r.searchText.toLowerCase())}));case"PRIORITY_IN_TODOS":return"all"===r.priority?r.todos:r.todos.filter((function(e){return e.priority.includes(r.priority)}));case"DONE_IN_TODOS":return"open"===r.done?r.todos.filter((function(e){return!1===e.done})):"done"===r.done?r.todos.filter((function(e){return!0===e.done})):r.todos;case"ADD_TODO":return[].concat(Object(p.a)(e),[{id:r.id,text:r.text,description:r.description,priority:r.priority,done:!1,showMenu:!1}]);case"REMOVE_TODO":return e.filter((function(e){return e.id!==r.id}));case"UPDATE_TODO":return e.map((function(e){return e.id===r.id?{id:r.id,text:r.text,description:r.description,priority:r.priority}:e}));case"TOGGLE_TODO":return e.map((function(e){return e.id===r.id?Z({},e,{done:!e.done}):e}));default:return e}},ee=Object(H.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"ADD_TODO":return[].concat(Object(p.a)(e),[{id:r.id,text:r.text,description:r.description,priority:r.priority,done:!1,showMenu:!1}]);case"REMOVE_TODO":return e.filter((function(e){return e.id!==r.id}));case"UPDATE_TODO":return e.map((function(e){return e.id===r.id?{id:r.id,text:r.text,description:r.description,priority:r.priority}:e}));case"TOGGLE_TODO":return e.map((function(e){return e.id===r.id?W({},e,{done:!e.done}):e}));default:return e}},filterPriority:z,filterDone:K,searchText:Q,visibleTodos:$}),te=Object(H.createStore)(ee,Object(V.composeWithDevTools)());n(43);i.a.render(o.a.createElement(c.a,{store:te},o.a.createElement(U,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ddb4bbdd.chunk.js.map