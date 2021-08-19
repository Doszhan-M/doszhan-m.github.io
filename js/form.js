$(document).ready(function(){ 

    let path = '/C:/Users/Asus_Note/Desktop/GitHub/JS-SkillFactory/Front_E10/img/Test.txt'; 
    // let path = $(location).attr('pathname'); 
    console.log(path)

    function readTextFile(file)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
    }
    readTextFile(path)
});