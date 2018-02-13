require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({25:[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],15:[function(require,module,exports) {
var e=require("./bundle-url").getBundleURL;function r(e){var r=e[e.length-1];try{return Promise.resolve(require(r))}catch(r){if("MODULE_NOT_FOUND"===r.code)return new s(function(r,n){t(e).then(r,n)});throw r}}function t(e){var r=e[e.length-1];return Promise.all(e.slice(0,-1).map(u)).then(function(){return require(r)})}var n={};function o(e,r){n[e]=r}module.exports=exports=r,exports.load=t,exports.register=o;var i={};function u(r){var t;if(Array.isArray(r)&&(t=r[1],r=r[0]),i[r])return i[r];var o=r.match(/\.(.+)$/)[1].toLowerCase(),u=n[o];return u?i[r]=u(e()+r).then(function(e){return e&&(module.bundle.modules[t]=[function(r,t){t.exports=e},{}]),e}):void 0}function s(e){this.executor=e,this.promise=null}s.prototype.then=function(e,r){return this.promise||(this.promise=new Promise(this.executor).then(e,r))},s.prototype.catch=function(e){return this.promise||(this.promise=new Promise(this.executor).catch(e))};
},{"./bundle-url":25}],9:[function(require,module,exports) {
const e=document.getElementById("filedrag"),t=document.getElementById("fileselect");let n,r=null;function s(e){e.stopPropagation(),e.preventDefault(),e.target.className="dragover"===e.type?"hover":""}const a=document.querySelector(".download");function o(t){Promise.all([require("_bundle_loader")(require.resolve("./converter.js")),require("_bundle_loader")(require.resolve("../vendor/moment.js")),require("_bundle_loader")(require.resolve("isomorphic-unzip/zip-browser")),require("_bundle_loader")(require.resolve("./csvtoarray"))]).then(o=>{const[i,l,c,d]=o;n=new i.default,s(t);const m=(t.target.files||t.dataTransfer.files)[0];r=m.name;const u=e=>new Promise(t=>{c.getEntryData(e,(e,n)=>{(e=>new Promise(t=>{let n=new FileReader;n.onload=(e=>{t(e.target.result)}),n.readAsText(e)}))(n).then(t)})});let f=null;((e,t)=>{(f=new c(e)).getEntries(function(e,n){t(n)})})(m,t=>{const r=t.map(e=>{switch(!0){case-1!==e.filename.indexOf("Skills.csv"):return u(e).then(e=>{let t=(e=e.replace(/"/g,"")).split("\n");t=t.slice(1,t.length-1),n.processSkills(t)});case-1!==e.filename.indexOf("Education.csv"):return u(e).then(e=>{const t=d(e),r=t.slice(1,t.length-1).map(e=>({schoolName:e[0],startDate:l(e[1]).format("YYYY-MM-DD"),endDate:l(e[2]).format("YYYY-MM-DD"),notes:e[3],degree:e[4],activities:e[5]}));n.processEducation(r.sort((e,t)=>+t.startDate.year-+e.startDate.year||+t.startDate.month-+e.startDate.month))});case-1!==e.filename.indexOf("Positions.csv"):return u(e).then(e=>{const t=d(e),r=t.slice(1,t.length-1).map(e=>({companyName:e[0],title:e[1],description:e[2],location:e[3],startDate:l(e[4]).format("YYYY-MM-DD"),endDate:e[5]?l(e[5]).format("YYYY-MM-DD"):null}));n.processPosition(r.sort((e,t)=>+t.startDate.year-+e.startDate.year||+t.startDate.month-+e.startDate.month))});case-1!==e.filename.indexOf("Languages.csv"):return u(e).then(e=>{const t=d(e),r=t.slice(1,t.length-1).map(e=>({name:e[0],proficiency:e[1]}));n.processLanguages(r)});case-1!==e.filename.indexOf("Recommendations Received.csv"):return u(e).then(e=>{const t=d(e),r=t.slice(1,t.length-1).map(e=>({recommenderFirstName:e[0],recommenderLastName:e[1],recommenderCompany:e[2],recommenderTitle:e[3],recommendationBody:e[4],recommendationDate:e[5],displayStatus:e[6]})).filter(e=>"VISIBLE"===e.displayStatus);n.processReferences(r)});case-1!==e.filename.indexOf("Profile.csv"):return u(e).then(e=>{const t=d(e),r={firstName:t[1][0],lastName:t[1][1],maidenName:t[1][2],createdDate:t[1][3],address:t[1][4],birthDate:t[1][5],contactInstructions:t[1][6],maritalStatus:t[1][7],headline:t[1][8],summary:t[1][9],industry:t[1][10],association:t[1][11]};n.processProfile(r)});case-1!==e.filename.indexOf("Email Addresses.csv"):return u(e).then(e=>{const t=d(e,"\t"),r=t.slice(1,t.length-1).map(e=>({address:e[0],status:e[1],isPrimary:"Yes"===e[2],dateAdded:e[3],dateRemoved:e[4]})).filter(e=>e.isPrimary);r.length&&n.processEmail(r[0])});case-1!==e.filename.indexOf("Interests.csv"):return u(e).then(e=>{const t=d(e);let r=[];t.slice(1,t.length-1).forEach(e=>{r=r.concat(e[0].split(","))}),n.processInterests(r)});case-1!==e.filename.indexOf("Projects.csv"):return u(e).then(e=>{const t=d(e),r=t.slice(1,t.length-1).map(e=>({title:e[0],startDate:l(e[1]).format("YYYY-MM-DD"),endDate:e[2]?l(e[2]).format("YYYY-MM-DD"):null,description:e[3],url:e[4]}));n.processProjects(r.sort((e,t)=>+t.startDate.year-+e.startDate.year||+t.startDate.month-+e.startDate.month))});default:return Promise.resolve([])}});Promise.all(r).then(()=>{e.innerHTML="Dropped! See the resulting JSON Resume at the bottom.";const t=document.getElementById("output");t.innerHTML=JSON.stringify(n.getOutput(),void 0,2),Prism.highlightElement(t),a.style.display="block",document.getElementById("result").style.display="block"})})})}a.addEventListener("click",()=>{require("_bundle_loader")(require.resolve("./file.js")).then(e=>{e.default(JSON.stringify(n.getOutput(),void 0,2),"resume.json")})}),a.style.display="none",t.addEventListener("change",o,!1);const i=new XMLHttpRequest;i.upload?(e.addEventListener("dragover",s,!1),e.addEventListener("dragleave",s,!1),e.addEventListener("drop",o,!1),e.style.display="block"):e.style.display="none",document.getElementById("select-file").addEventListener("click",()=>{t.click()});
},{"_bundle_loader":15,"./file.js":[["2415afd344a911e89b087a590046c2bf.js",17],17],"./converter.js":[["8eec9bcaf6d9a5e1c07d9a43700eaf98.js",18],18],"../vendor/moment.js":[["a3c7103a3666a6f63ec32f3af119baa8.js",19],19],"isomorphic-unzip/zip-browser":[["isomorphic-unzip.js",27],27],"./csvtoarray":[["c1d5dce6aa5d08c62e62fb5ec05b5382.js",20],20]}],36:[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require(15);b.register("js",require(36));
},{}]},{},[0,9])