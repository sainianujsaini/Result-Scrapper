import puppeteer from "puppeteer";

function getStudents(branch){
    var students = [];
    var size = (branch == "CO") ? 600 : 200;
    for(var i = 1 ; i <= size ; i++){
        var rollNo = i;
        if(i < 10){
            rollNo = "0"+i;
        }
        students[i] = "2K21-"+branch+"-"+rollNo;
    }
    return students;
}
function scrapData(){
    var branches = ["CO" , "IT", "SE", "MC", "EC", "EE"];
    var arr = [];
    for(var i = 0; i < branches.length ; i++){
        arr[i] = getStudents(branches[i]);
    }
    console.log("Branches : " + branches);
    console.log("Roll Number of above generated");

    findResult(arr);
}

async function findResult(arr){
    const browser = await puppeteer.launch({headless: false});
    for(var i = 0; i < arr.length; i++){
        for(var j = 0 ; j < arr[i].length ; j++){
            try{
                console.log("working");
                const page = await browser.newPage();
                await page.goto("https://rankwallah.in/"+arr[i][j] , {waitUntil : 'networkidle2'});
                
            }
            catch(e){
                console.log("Exception is " + e);
            }
            finally{

            }
        }
    }
}

scrapData();