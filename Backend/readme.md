Edge Cases : 
1) URL : https://rankwallah.in/2K21-MC-01
2) Roll No < 10 will have 0 in start.

Structure of Page : 

1) Extrace CGPA
    Aggregated CGPA
    -> class="jsx-fc9e72a0641a5e42 text-gray-700 font-semibold text-base sm:text-lg"
    Value
    -> class="jsx-fc9e72a0641a5e42 text-3xl sm:text-4xl font-bold text-gray-900 mt-2"

2) Name
    class="jsx-fc9e72a0641a5e42 text-4xl font-bold"

3) 






// Frontend

public -> css, js, images
views -> ejs files



// Backend

Server.js
Routes // will handle the specific link of routes 
Controller // get requests from routes and do appropiate actions
config // 
utils 
models

-> once we connect with mongo, and again import in different files it does not create a new instance apart give the same connected index, this is handle by node.

// Read about
export




My working model : In case of MongoDB or postgresql
1. First need to create a database manually and insert all the values present in JSON.


API
1. Give all data in sorted order according to cgpa.
2. Give all data of the selected branches (Checkbox type) in sorted order of cgpa.
3. Post query to fetch and update the data related to that particular branch. (In between show user the loader with the current percentage of data loaded.)
4. API that will tell the not available roll numbers of the selected branch.
5. Handle the case when the loader is working then the filter option should be disabled and only the loader must be shown regardless of which branch is currently getting fetch.
6. Name, Roll number filter, sort maintain.
7. Clear all filter option, which will unselect the selected filters.




Future advancements
1. Feature to login, signup. along with navbar
    a. Store the last preference of user related to filters, option selected in his browser.
2. Create extra options for admin : 
    a. Create new student.
    b. Edit information of a student.
        i. Here we have to give the roll number of that student and if it exists, its information will be shown and you can change the text written in those fields and you can either update, or cancel the process.
3. Deploy the website.
    

-> Option list: Available data (data of students currently present with me), Non available data (Students data that is not present with me). SINGLE OPTION
-> Filter list: Branch wise (multiple filters can be selected at once)  MULTIPLE OPTIONS, By default all branches are selected.
