/**
 * FileName: app.js
 * @Author Javid Niftaliyev
 * Student ID: 300742916
 * @description: This is the main javascript file for the current web site.
 * Website(Azure): http://comp125-assign3-json.azurewebsites.net/about.html
 * Website(Github): https://github.com/Web1017/COMP125-Assignment3-JSON-Data
 * 
 */
//IIFE - Immediately invoked Expression 

(function () {
    "use strict";  //doesnt allow variables to be redeclared
    
   var xhr;
   var xhrNavData;

    // we can use a named function instead of an anonymous function
    function readData() {
        // data loaded                everything is ok
        if ((xhr.readyState === 4) && (xhr.status === 200)) {

            var giveInfo = JSON.parse(xhr.responseText);
            var paragInfo = giveInfo.pageText;

  
            
           // Switch function checking Document by Title to check if paragraph exists in stated page.
            paragInfo.forEach(function(parag){
                switch (document.title){

                    case "Home Page": document.getElementById("paragraphOne").innerHTML= giveInfo.pageText[0].homePage;
                    break; 

                    case "My Project": document.getElementById("paragraphTwo").innerHTML = giveInfo.pageText[1].projectPage,

                    document.getElementById("paragraphThree").innerHTML = giveInfo.pageText[2].projectPage2,

                    document.getElementById("paragraphFour").innerHTML = giveInfo.pageText[3].projectPage3;
                    break;

                    case "About Me" : document.getElementById("paragraphFive").innerHTML = giveInfo.pageText[4].aboutPage;
                    break;
                    

                    default:""
                    break;

                }
                
              /*  if(document.getElementById("paragraphOne")){
                    document.getElementById("paragraphOne").innerHTML= giveInfo.pageText[0].homePage;
                }
                
*/
            }, this);

            

        }
    }



    function readParag() {
        xhr = new XMLHttpRequest(); // step 1 - create xhr object
        xhr.open("GET", "Scripts/paragraphs.json", true); // step 2 - open request
        xhr.send(null); // step 3 - send request
        xhr.addEventListener("readystatechange", readData); // step 4
    }


  /**
     * displays readParag
     * 
     * @method init
     * @returns {void}
     */
   

    // app entry function
    function init() {
   
        readParag();
     
        

    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();