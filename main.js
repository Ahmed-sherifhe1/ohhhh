let numEle    = document.getElementsByName      ( "elements" )[0]
let txtEle    = document.getElementsByName      ( "texts"    )[0]
let createBtn = document.getElementsByName      ( "create"   )[0]
let results   = document.getElementsByClassName ( "results"  )[0]
var typeEle = document.getElementsByName("type")[0];
var option;
let numEleVal;
numEle.style.cssText=`
border-radius: 3px;
background-image:url("etfaraaaag.png");
border:1px solid gray;
`;
txtEle.style.cssText=`
border-radius: 3px;
background-image:url("etfaraaaag.png");
border:1px solid gray;
`;
results.style.cssText=`
display: flex;
flex-wrap: wrap;
text-align: center;
margin: 0 auto;
width: 100%;
justify-content: center;
`;
document.forms[0].style.cssText=`
display: flex;
gap: 8px;
margin-top: 3%;
flex-direction: column;
align-items: center;
`;
typeEle.style.cssText=`
background-image:url("etfaraaaag.png");
border:1px solid gray;
width: 177px;
height: 21px;
border-radius: 3px;
`;
createBtn.style.cssText=`
    width: 173.14px;
    height: 20.86px;
    outline: none;
    border-radius: 3px;
    background-color: #250000;
    color:#f0b600;
    cursor:pointer;
    border: 1px solid lightgray;
    transition:0.5s;
    `;

createBtn.onmouseleave=function(){
    this.style.cssText=`
    width: 173.14px;
    height: 20.86px;
    outline: none;
    border-radius: 3px;
    background-color: #250000;
    color:#f0b600;
    cursor:pointer;
    border: 1px solid lightgray;
    transition:0.5s;
    `;
};
createBtn.onmouseover=function(){
    this.style.cssText=`
    transition:0.5s;
    width: 173.14px;
    height: 20.86px;
    outline: none;
    border-radius: 3px;
    color:#e62828;
    cursor:pointer;
    border: 1px solid lightgray;
    `;
};
    numEle.oninput=function(){
    numEleVal = numEle.value;
};
function type() {
    option = typeEle.options[typeEle.selectedIndex];
    return option.value
};
type();
createBtn.onclick=(e)=> {
    e.preventDefault();
    cc="";
    gg="";
    results.innerHTML="";
    for(let i = 0 ; i < numEleVal ; i++){
        var cc= document.createElement(`${type()}`)
        cc.classList.add("box");
        cc.title="Element";
        cc.id=`id-${i+1}`;
        cc.style.cssText=`
        display: inline-block;
    margin: 10px;
    background-color: crimson;
    color: white;
    border-radius: 20px;
    padding: 10px;
    box-shadow: inset 0px 0px 18px 0px black;`;
        var gg = document.createTextNode(`${txtEle.value}`);
        cc.appendChild(gg);
        results.appendChild(cc);
    };
    if(numEle.value!=""){

        var mm = `ايه رايك في العبط ده يبشه`;
        var ss = `<span style="color:#e1b1bf">أمر</span><span style="color:#2e4970">يكا</span> تريدني`;
        var oo = `<span style="color:#00206b">بر</span><span style="color:#ce0b2d">يطا</span><span style="color:#00206b">نيا</span> تكلمني`;
        var nn = `أ<span style="color:#ed3b34">لما</span><span style="color:#fbb132">نيا</span> تحتاجني`;
        document.body.innerHTML +=`<p style="text-align:center">${mm}<br><br>${ss}<br>${oo}<br>${nn}</p>`;
    };
};