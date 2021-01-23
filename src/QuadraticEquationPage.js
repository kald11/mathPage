function QuadraticEquationPage(){
    const calculateEquation=()=>{

        const a=document.getElementById("a").value;
        const b=document.getElementById("b").value;
        const c=document.getElementById("c").value;
        const mainDiv=document.getElementById("mainDiv");
        const newDiv=document.createElement("div");



        //-----------One_Solution-----------------------
        if((Math.pow(b,2)-4*a*c)===0){
            const returnNum=-b/2*a;
            console.log(returnNum);
            newDiv.innerText="x="+returnNum;
        }
        //------------------Non-Solution-----------------
        else if ((Math.pow(b,2)-4*a*c)<0){
            newDiv.innerText="There is no solution.Make sure you insert values correctly."
        }

        else{
            const x1=(-b+Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
            const x2=(-b-Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
            newDiv.innerHTML="X1: "+x1+"X2:"+x2;

        }
        mainDiv.appendChild(newDiv);

    }
    return(
        <div id={"mainDiv"}>
            <h1>This is the page that solve you the equation</h1>
            <div> Please insert a , b ,c of the equation:</div>
            <br/>

            <input id={"a"} placeholder={"enter here a"}/>
            <br/>
            <input id={"b"} placeholder={"enter here b"}/>
            <br/>
            <input id={"c"} placeholder={"enter here c"}/>
            <br/>
            <button onClick={calculateEquation}>Submit</button>
            <br/>


        </div>
    )
}
export default QuadraticEquationPage
