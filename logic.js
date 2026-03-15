let currentRoundNo=0;
        let totalRoundCount=0;
        let setCount=1;
        let mantraCount=0;
        function addRound()
        {
            //console.log("add button is clicked");
            document.getElementById("roundId").value=++totalRoundCount;
            document.getElementById("currentRoundID").innerText= ++currentRoundNo;
            document.getElementById("totalRoundsID").innerText= totalRoundCount;
            if(totalRoundCount%16==0)
            {
                currentRoundNo=0;
                document.getElementById("currentRoundID").innerText= currentRoundNo;
                document.getElementById("setID").innerText=++setCount;
                

            }
        }

        function removeRound2()
        {
            //console.log("remove button is clicked");
            if(currentRoundNo>0 && setCount>0)
            {

            }
        }

        function removeRound()
        {
            //console.log("remove button is clicked");
            if(currentRoundNo>0 && setCount>0)
            {
                //console.log("enter 1st condition \t before reduction");
                //console.log("Current round: \t"+ currentRoundNo + "\t total count: \t"+ totalRoundCount+ "\t Set count: \t"+ setCount);
                document.getElementById("currentRoundID").innerText= --currentRoundNo;
                document.getElementById("totalRoundsID").innerText= totalRoundCount-1;
                document.getElementById("roundId").value=totalRoundCount-1;
                //currentRoundNo--;

                if(totalRoundCount%16==0 && setCount>1)
                {
                //currentRoundNo=0;                
                document.getElementById("currentRoundID").innerText= currentRoundNo;
                document.getElementById("setID").innerText=--setCount;
                }
                //console.log("before exiting 1st condition \t after reduction");
                //console.log("Current round: \t"+ currentRoundNo + "\t total count: \t"+ totalRoundCount+ "\t Set count: \t"+ setCount);
                totalRoundCount--;
            }
                else if(currentRoundNo==0 && setCount>1)
                {
                    //console.log("enter 2nd condition \t before reduction");
                    //console.log("Current round: \t"+ currentRoundNo + "\t total count: \t"+ totalRoundCount+ "\t Set count: \t"+ setCount);
                    currentRoundNo+=16;
                    document.getElementById("currentRoundID").innerText= --currentRoundNo;
                    document.getElementById("totalRoundsID").innerText= totalRoundCount-1;
                    document.getElementById("roundId").value=totalRoundCount-1;
                    
                    if(totalRoundCount%16==0 && setCount>1)
                    {
                    //currentRoundNo=0;                
                    document.getElementById("currentRoundID").innerText= currentRoundNo;
                    document.getElementById("setID").innerText=--setCount;
                    }

                    //console.log("before exiting 1st condition \t after reduction");
                    //console.log("Current round: \t"+ currentRoundNo + "\t total count: \t"+ totalRoundCount+ "\t Set count: \t"+ setCount);
                    totalRoundCount--;
                
                }
                else
                {
                    //console.log("enter last condition condition");
                    //console.log("Current round: \t"+ currentRoundNo + "\t total count: \t"+ totalRoundCount+ "\t Set count: \t"+ setCount);
                }
            

        }


        function addMantraRound()
        {
            //console.log("add mantra button is clicked");
            document.getElementById("mantraId").innerText=++mantraCount;
            document.getElementById("mantraRoundId").value=mantraCount;
            


        }
        function removeMantraRound()
        {
            //console.log("remove mantra button is clicked");
            if(mantraCount>0)
            {
                document.getElementById("mantraId").innerText= --mantraCount;
                document.getElementById("mantraRoundId").value=mantraCount;  

            }
             

        }