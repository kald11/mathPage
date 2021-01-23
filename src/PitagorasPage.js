function PitagorasPage(){
    const calculateSide=()=>{
        const a=document.getElementById("a").value;
        const b=document.getElementById("b").value;
        const c=document.getElementById("c").value;
        const mainDiv=document.getElementById("mainDiv");
        const newDiv=document.createElement("div");
        let solution;

        //-------------------Cheak-which-input-empty--------

        //------------------a_empty-----------------------
        if (a.length==0&&b.length>0&&c.length>0&&c>b){
             solution=Math.pow(c,2)-Math.pow(b,2);
            solution=Math.sqrt(solution);
            newDiv.innerHTML=solution;
        }
        //------------------b_empty-----------------------
        else if(a.length>0&&b.length==0&&c.length>0&&c>a){
            solution=Math.pow(c,2)-Math.pow(a,2);
            solution=Math.sqrt(solution);
            newDiv.innerHTML=solution;
        }
        //------------------c_empty-----------------------
        else if (a.length>0&&b.length>0&&c.length==0){
             solution=Math.pow(a,2)+Math.pow(b,2);
            solution=Math.sqrt(solution);
            newDiv.innerHTML=solution;
        }
        //------------------InCorrect_Values-----------------------
        else{
            solution="You entered incorrect values.Please try again."
            alert("Error,please cheak the values you entered")
            newDiv.innerHTML=solution;
        }
        mainDiv.appendChild(newDiv);
    }
    return(
        <div id ="mainDiv">
            <h1>Solve Pitagoras Question</h1><br/>
            <div>Enter 2 parameters (a or b or c) and the app calculate for you the other parameter</div>
            <br/>
            <input id={"a"} placeholder={"enter here a:"}/>
            <br/>
            <input id={"b"} placeholder={"enter here b:"}/>
            <br/>
            <input id={"c"} placeholder={"enter here c:"}/>
            <br/>
            <button onClick={calculateSide}>Submit</button>

        </div>
    )
}
export default PitagorasPage