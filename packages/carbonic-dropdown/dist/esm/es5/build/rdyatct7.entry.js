/*! Built with http://stenciljs.com */
import{h}from"../carbonic-dropdown.core.js";var CarbonicDropdown=function(){function e(){var e=this;this.isExpanded=!1,this.chosenOption={label:"(no options)",value:null},this.options=[],this.onChange=function(n){var o=JSON.parse(n.target.getAttribute("value"));e.chosenOption=o,e.collapseExpansion(),e.carbonicDropdownValueChanged.emit(o)},this.onExpandClick=function(){e.options.length&&(e.isExpanded=!0)},this.collapseExpansion=function(){e.isExpanded=!1},this.onOutsideClick=function(n){n.target!==e.el&&e.collapseExpansion()}}return e.prototype.onIsExpandedChange=function(e){console.log("New value of expanded is: : ",e)},e.prototype.componentDidLoad=function(){document.addEventListener("click",this.onOutsideClick)},e.prototype.componentDidUnload=function(){document.removeEventListener("click",this.onOutsideClick)},e.prototype.render=function(){var e=this;return h("div",{class:"dropdown"},h("div",{onClick:this.onExpandClick,class:"selected-option"},h("span",{class:"selected-option__label"},this.chosenOption.label),h("slot",{name:"dropdown-arrow"},"Your icon here")),h("ul",{class:this.isExpanded?"options--expanded":"options"},this.options.map(function(n){return h("option",{onClick:e.onChange,class:"option",value:JSON.stringify(n)},n.label)})))},Object.defineProperty(e,"is",{get:function(){return"carbonic-dropdown"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{chosenOption:{type:"Any",attr:"chosen-option",reflectToAttr:!0,mutable:!0},el:{elementRef:!0},isExpanded:{type:Boolean,attr:"is-expanded",reflectToAttr:!0,mutable:!0,watchCallbacks:["onIsExpandedChange"]},onChangeHandler:{type:"Any",attr:"on-change-handler"},options:{type:"Any",attr:"options",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"carbonicDropdownValueChanged",method:"carbonicDropdownValueChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host,:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--light-gray:#d3d3d3;--gray:#a9a9a9;--black:#000;--white:#fff;--icon-dimension:25px;font-family:\"sans-serif, Helvetica\";font-size:14px;cursor:pointer;color:var(--black)}.dropdown{position:relative;border:1px solid var(--gray);border-radius:5px}.selected-option{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:5px 10px}.options{display:none}.options--expanded{position:absolute;border:1px solid var(--gray);width:100%;display:block;padding:0;margin:0}.option{padding:10px;background:var(--white)}.option:hover{background:var(--light-gray)}::slotted(*){width:var(--icon-dimension);height:var(--icon-dimension)}"},enumerable:!0,configurable:!0}),e}();export{CarbonicDropdown};