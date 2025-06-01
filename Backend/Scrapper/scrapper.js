import puppeteer from "puppeteer";

function getStudents(branch) {
    var students = [];
    var size = (branch == "CO") ? 600 : 200;
    for (var i = 1; i <= size; i++) {
        var rollNo = i < 10 ? "0" + i : i;
        students.push("2K21-" + branch + "-" + rollNo);
    }
    return students;
}

function scrapData() {
    var branches = ["CO", "IT", "SE", "MC", "EC", "EE"];
    var arr = [];
    for (var i = 0; i < branches.length; i++) {
        arr[i] = getStudents(branches[i]);
    }
    console.log("Branches:", branches);
    console.log("Roll Numbers generated");

    findResult(arr);
}

async function findResult(arr) {
    const browser = await puppeteer.launch({ headless: true });
    var data = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            const page = await browser.newPage();
            try {
                const rollNo = arr[i][j];
                const url = `https://rankwallah.in/${rollNo}`;
                await page.goto(url, { waitUntil: 'networkidle2'});
                const subdata = await page.evaluate(() => {
                    var name = document.querySelectorAll(".jsx-fc9e72a0641a5e42.text-4xl.font-bold");
                    var roll = document.querySelector(".jsx-fc9e72a0641a5e42.flex.w-full.items-center.gap-2.text-justify.text-base.text-gray-700 > .jsx-fc9e72a0641a5e42");
                    var cgpa = document.querySelector(".jsx-fc9e72a0641a5e42.text-3xl.sm\\:text-4xl.font-bold.text-gray-900.mt-2");
                    name = name[1].innerText;
                    roll = roll.innerText;
                    cgpa = cgpa.innerText;
                    return {name , roll , cgpa};
                });
                var details = subdata;
                console.log(details.name + ", " + details.roll + ", " + details.cgpa);
                data.push(details);

            } catch (e) {
                console.log(`Error fetching data for ${arr[i][j]}: ${e.message}`);
            }
            finally{
                await page.close();
            }
        }
    }

    await browser.close();
}

// Start the script
scrapData();
