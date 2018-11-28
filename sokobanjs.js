/**
 * Created by RAIN on 05-02-2018.
 */
/**SOKOBAN MAP
 * 0 = Walls
 * 1 = Blank spaces in the map
 * 2 = Player
 * 3 = Box
 * 4 = Target
 * 5 = Box and target
 * 6 = Player standing on target
 * 7 = White spaces outside the map
 * */

var player_start=0;           //Initializing map and player
var check=0;                  //Flag Variable to check player won or not
var id;                       //Variable to store id of button
function level_load(key_code,level_id)          //To load Level in beginning
{
    document.body.innerHTML = "";
    id=level_id;
    var level;
    var level1=[[0,0,0,0,0,0],[0,1,1,1,1,0],[0,1,0,2,1,0],[0,1,3,5,1,0],[0,1,4,5,1,0],[0,1,1,1,1,0],[0,0,0,0,0,0]];
    var level2=[[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[0,1,4,3,4,1,0],[0,1,3,4,3,1,0],[0,1,4,3,4,1,0],[0,1,3,4,3,1,0],[0,1,1,2,1,1,0],[0,0,0,0,0,0,0]];
    var level3=[[7,7,0,0,0,0,7,7],[7,7,0,1,2,0,0,0],[7,7,0,3,3,1,1,0],[0,0,0,1,3,4,1,0],[0,4,4,4,1,0,0,0],[0,0,0,3,1,0,7,7],[7,7,0,1,1,0,7,7],[7,7,0,0,0,0,7,7]]
    if(level_id==1)
    {
        level=level1;       //selecting level
    }
    else if(level_id==2)
    {
        level=level2;
    }
    else if(level_id==3)
    {
        level=level3;
    }
    //Variable to get Body of html
    var body = document.getElementsByTagName("body")[0];
    for(var i=0;i<8;i++)
    {
        var br=document.createElement("br");
        body.appendChild(br);
    }
    // creates a <table> element and a <tbody> element
    var frame=document.createElement("table");
    var tblBody = document.createElement("tbody");
    //creating rows
    for ( i = 0; i < level.length; i++)
    {
        var level_length= level[i].length;
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < level_length; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            if(level[i][j]==1)
            {
                var img=document.createElement("img");          //setting images according to array
                img.setAttribute('src','free.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==0)
            {
                img=document.createElement("img");
                img.setAttribute('src','wall.gif');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==2 && player_start==0)
            {
                img=document.createElement("img");
                img.setAttribute('src','right.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
                player_start+=1;
            }
            else if(level[i][j]==2 && key_code==37)         //key_code to get pressed key and change image according to key
            {
                img=document.createElement("img");
                img.setAttribute('src','left.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==2 && key_code==38)
            {
                img=document.createElement("img");
                img.setAttribute('src','up.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==2 && key_code==39)
            {
                img=document.createElement("img");
                img.setAttribute('src','right.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==2 && key_code==40)
            {
                img=document.createElement("img");
                img.setAttribute('src','down.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==3)
            {
                img=document.createElement("img");
                img.setAttribute('src','box.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==4)
            {
                img=document.createElement("img");
                img.setAttribute('src','target.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==5)
            {
                img=document.createElement("img");
                img.setAttribute('src','boxt.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==6)
            {
                img=document.createElement("img");
                img.setAttribute('src','playtar.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==7)
            {
                img=document.createElement("img");
                img.setAttribute('src','free.gif');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
        }

        row.setAttribute('style','padding: 0px; margin: 0px; border: none;');
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

// put the <tbody> in the <table>
    frame.appendChild(tblBody);
// appends <table> into <body>
    body.appendChild(frame);
// sets the border attribute of tbl to 0;
    frame.setAttribute("border", "0");
    frame.setAttribute("style", "border-collapse: collapse;");
    frame.setAttribute("style", "margin: 10px auto;");
    frame.setAttribute("style", "line-height: 0;");
    frame.setAttribute("align", "center");
    frame.setAttribute("cellspacing", "0");
    load_key(level,level_length);
}

// function to update image and change maps
function update_image(key_code,level,level_length)
{

    var body = document.getElementsByTagName("body")[0];
    for(var i=0;i<8;i++)
    {
        var br=document.createElement("br");
        body.appendChild(br);
    }
    // creates a <table> element and a <tbody> element
    var frame=document.createElement("table");
    var tblBody = document.createElement("tbody");

    //creating all cells
    for ( i = 0; i < level.length; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < level_length; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            if(level[i][j]==1)
            {
                var img=document.createElement("img");
                img.setAttribute('src','free.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==0)
            {
                img=document.createElement("img");
                img.setAttribute('src','wall.gif');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==2 && player_start==0)
            {
                img=document.createElement("img");
                img.setAttribute('src','right.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
                player_start+=1;
            }
            else if(level[i][j]==2 && key_code==37)
            {
                img=document.createElement("img");
                img.setAttribute('src','left.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==2 && key_code==38)
            {
                img=document.createElement("img");
                img.setAttribute('src','up.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==2 && key_code==39)
            {
                img=document.createElement("img");
                img.setAttribute('src','right.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==2 && key_code==40)
            {
                img=document.createElement("img");
                img.setAttribute('src','down.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==3)
            {
                img=document.createElement("img");
                img.setAttribute('src','box.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==4)
            {
                img=document.createElement("img");
                img.setAttribute('src','target.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==5)
            {
                img=document.createElement("img");
                img.setAttribute('src','boxt.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==6 && key_code==37)
            {
                img=document.createElement("img");
                img.setAttribute('src','targleft.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==6 && key_code==38)
            {
                img=document.createElement("img");
                img.setAttribute('src','targup.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==6 && key_code==39)
            {
                img=document.createElement("img");
                img.setAttribute('src','targright.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==6 && key_code==40)
            {
                img=document.createElement("img");
                img.setAttribute('src','targdown.png');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else if(level[i][j]==7)
            {
                img=document.createElement("img");
                img.setAttribute('src','free.gif');
                img.setAttribute("height","52");
                img.setAttribute("width","51");
                img.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.setAttribute('style','padding: 0px; margin: 0px; border: none;');
                cell.appendChild(img);
                row.appendChild(cell);
            }
        }
        row.setAttribute('style','padding: 0px; margin: 0px; border: none;');
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

// put the <tbody> in the <table>
    frame.appendChild(tblBody);
// appends <table> into <body>


    body.appendChild(frame);
// sets the border attribute of tbl to 2;
    frame.setAttribute("border", "0");
    frame.setAttribute("style", "border-collapse: collapse;");
    frame.setAttribute("style", "margin: 10px auto;");
    frame.setAttribute("style", "line-height: 0;");
    frame.setAttribute("align", "center");
    frame.setAttribute("cellspacing", "0");
}

//function to check player win or not

function check_win(level,level_length)
{
    if(id==1)
    {
        for(var i=0;i<level.length;i++)
        {
            for(var j=0; j<level_length; j++)
            {
                if(level[3][3]==5 && level[4][2]==5 && level[4][3]==5)
                {
                    check=1;
                    break;
                }
            }
        }
        if(check==1)
        {
            alert("YOU WIN");
            window.location.href="sokoban.html"
        }
    }
    else if(id==2)
    {
        for(var i=0;i<level.length;i++)
        {
            for(var j=0; j<level_length; j++)
            {
                if(level[2][2]==5 && level[2][4]==5 && level[3][3]==5 && level[4][2]==5 && level[4][4]==5 && level[5][3]==5)
                {
                    check=1;
                    break;
                }
            }
        }
        if(check==1)
        {
            alert("YOU WIN");
            window.location.href="sokoban.html"
        }
    }
    else if(id==3)
    {
        for(var i=0;i<level.length;i++)
        {
            for(var j=0; j<level_length; j++)
            {
                if(level[4][1]==5 && level[4][2]==5 && level[4][3]==5 && level[3][5]==5)
                {
                    check=1;
                    break;
                }
            }
        }
        if(check==1)
        {
            alert("YOU WIN");
            window.location.href="sokoban.html"
        }
    }

}

//function to check pressed key and change 2d array according to it (Player Movement)n
function load_key(level,level_length)
{
    var key= function(event)
    {
        var key_code=event.keyCode;
        if(key_code==37)
        {
            for( i=0;i< level.length; i++)
            {
                for( j=0; j<level_length; j++)
                {
                    if(level[i][j]==2)
                    {
                        if(level[i][j-1]==1)
                        {
                            level[i][j]=1;
                            level[i][j-1]=2;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j-1]==3 && level[i][j-2]==1)
                        {
                            level[i][j] = 1;
                            level[i][j - 1] = 2;
                            level[i][j - 2] = 3;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j-1]==4)
                        {
                            level[i][j]=1;
                            level[i][j-1]=6;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j-1]==5 && level[i][j-2]==4)
                        {
                            level[i][j] = 1;
                            level[i][j - 1] = 6;
                            level[i][j - 2] = 5;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j-1]==5 && level[i][j-2]==1)
                        {
                            level[i][j] = 1;
                            level[i][j - 1] = 6;
                            level[i][j - 2] = 3;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j-1]==3 && level[i][j-2]==4)
                        {
                            level[i][j] = 1;
                            level[i][j - 1] = 2;
                            level[i][j - 2] = 5;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }

                    }
                    else if(level[i][j]==6)
                    {
                        if(level[i][j-1]==1)
                        {
                            level[i][j]=4;
                            level[i][j-1]=2;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                            break;
                        }
                        else if(level[i][j-1]==4)
                        {
                            level[i][j] = 4;
                            level[i][j - 1] = 6;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j-1]==5 && level[i][j-2]==1)
                        {
                            level[i][j] = 4;
                            level[i][j - 1] = 6;
                            level[i][j - 2] = 3;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j-1]==3 && level[i][j-2]==4)
                        {
                            level[i][j] = 4;
                            level[i][j - 1] = 2;
                            level[i][j - 2] = 5;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j-1]==3 && level[i][j-2]==1)
                        {
                            level[i][j] = 4;
                            level[i][j - 1] = 2;
                            level[i][j - 2] = 3;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j-1]==5 && level[i][j-2]==4)
                        {
                            level[i][j] = 4;
                            level[i][j - 1] = 6;
                            level[i][j - 2] = 5;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                    }
                }
            }
        }
        else if(key_code==38)
        {
            for(var i=0;i< level.length; i++)
            {
                for(var j=0; j<level_length; j++)
                {
                    if(level[i][j]==2)
                    {
                        if(level[i-1][j]==1)
                        {
                            level[i][j]=1;
                            level[i-1][j]=2;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                            break;
                        }
                        else if(level[i-1][j]==3 && level[i-2][j]==1)
                        {
                            level[i][j]=1;
                            level[i-1][j]=2;
                            level[i-2][j]=3;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i-1][j]==4)
                        {
                            level[i][j]=1;
                            level[i-1][j]=6;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i-1][j]==5 && level[i-2][j]==4)
                        {
                            level[i][j] = 1;
                            level[i-1][j] = 6;
                            level[i-2][j] = 5;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i-1][j]==5 && level[i-2][j]==1)
                        {
                            level[i][j] = 1;
                            level[i-1][j] = 6;
                            level[i-2][j] = 3;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i-1][j]==3 && level[i-2][j]==4)
                        {
                            level[i][j] = 1;
                            level[i-1][j] = 2;
                            level[i-2][j] = 5;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                    }
                    else if(level[i][j]==6)
                    {
                        if(level[i-1][j]==1)
                        {
                            level[i][j]=4;
                            level[i-1][j]=2;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                            break;
                        }
                        else if(level[i-1][j]==4)
                        {
                            level[i][j]=4;
                            level[i-1][j]=6;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                            break;
                        }
                        else if(level[i-1][j]==5 && level[i-2][j]==1)
                        {
                            level[i][j] = 4;
                            level[i-1][j] = 6;
                            level[i-2][j] = 3;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i-1][j]==3 && level[i-2][j]==4)
                        {
                            level[i][j] = 4;
                            level[i-1][j] = 2;
                            level[i-2][j] = 5;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i-1][j]==3 && level[i-2][j]==1)
                        {
                            level[i][j] = 4;
                            level[i-1][j] = 2;
                            level[i-2][j] = 3;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i-1][j]==5 && level[i-2][j]==4)
                        {
                            level[i][j] = 4;
                            level[i-1][j] = 6;
                            level[i-2][j] = 5;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                    }
                }
            }
        }
        else if(key_code==39)
        {
            for(var i=0;i< level.length; i++)
            {
                for(var j=0; j<level.length+1; j++)
                {
                    if(level[i][j]==2)
                    {
                        if(level[i][j+1]==1)
                        {
                            level[i][j]=1;
                            level[i][j+1]=2;
                            document.body.innerHTML="";
                            var x=1;                                //variable to stop the loop
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                            break;
                        }
                        else if(level[i][j+1]==3 && level[i][j+2]==1)
                        {
                            level[i][j]=1;
                            level[i][j+1]=2;
                            level[i][j+2]=3;
                            var x=1;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j+1]==4)
                        {
                            level[i][j]=1;
                            level[i][j+1]=6;
                            document.body.innerHTML="";
                            var x=1;
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j+1]==5 && level[i][j+2]==4)
                        {
                            level[i][j] = 1;
                            level[i][j+1] = 6;
                            level[i][j+2] = 5;
                            document.body.innerHTML = "";
                            var x=1;
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j+1]==5 && level[i][j+2]==1)
                        {
                            level[i][j] = 1;
                            level[i][j+1] = 6;
                            level[i][j+2] = 3;
                            document.body.innerHTML = "";
                            var x=1;
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j+1]==3 && level[i][j+2]==4)
                        {
                            level[i][j] = 1;
                            level[i][j+1] = 2;
                            level[i][j+2] = 5;
                            var x=1;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                    }
                    else if(level[i][j]==6)         //if player is standing on target and to change image according to that
                    {
                        if(level[i][j+1]==1)
                        {
                            level[i][j]=4;
                            level[i][j+1]=2;
                            document.body.innerHTML="";
                            var x=1;
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                            break;
                        }
                        else if(level[i][j+1]==4)
                        {
                            level[i][j]=4;
                            level[i][j+1]=6;
                            var x=1;
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                            break;
                        }
                        else if(level[i][j+1]==5 && level[i][j+2]==1)
                        {
                            level[i][j] = 4;
                            level[i][j+1] = 6;
                            level[i][j+2] = 3;
                            var x=1;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j+1]==3 && level[i][j+2]==4)
                        {
                            level[i][j] = 4;
                            level[i][j+1] = 2;
                            level[i][j+2] = 5;
                            document.body.innerHTML = "";
                            var x=1;
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j+1]==3 && level[i][j+2]==1)
                        {
                            level[i][j] = 4;
                            level[i][j+1] = 2;
                            level[i][j+2] = 3;
                            document.body.innerHTML = "";
                            var x=1;
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i][j+1]==5 && level[i][j+2]==4)
                        {
                            level[i][j] = 4;
                            level[i][j+1] = 6;
                            level[i][j+2] = 5;
                            document.body.innerHTML = "";
                            var x=1;
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                    }
                    if(x==1)
                    {
                        break;
                    }
                }
            }
        }
        else if(key_code==40)
        {
            for(i=0; i<level.length; i++)
            {
                for(j=0; j<level_length; j++)
                {
                    if(level[i][j]==2)
                    {
                        if(level[i+1][j]==1)
                        {
                            level[i][j]=1;
                            level[i+1][j]=2;
                            document.body.innerHTML="";
                            var p=1;                        ////variable to stop the loop
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                            break;
                        }
                        else if(level[i+1][j]==3 && level[i+2][j]==1)
                        {
                            level[i][j]=1;
                            level[i+1][j]=2;
                            level[i+2][j]=3;
                            document.body.innerHTML="";
                            var x=1;
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i+1][j]==4)
                        {
                            level[i][j]=1;
                            level[i+1][j]=6;
                            var y=1;                        //variable to stop the loop
                            document.body.innerHTML="";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i+1][j]==5 && level[i+2][j]==4)
                        {
                            level[i][j] = 1;
                            level[i+1][j] = 6;
                            level[i+2][j] = 5;
                            var z=1;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i+1][j]==5 && level[i+2][j]==1)
                        {
                            level[i][j] = 1;
                            level[i+1][j] = 6;
                            level[i+2][j] = 3;
                            var z=1;                            //variable to stop the loop
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i+1][j]==3 && level[i+2][j]==4)
                        {
                            level[i][j] = 1;
                            level[i+1][j] = 2;
                            level[i+2][j] = 5;
                            var z=1;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                    }
                    else if(level[i][j]==6)
                    {
                        if(level[i+1][j]==1)
                        {
                            level[i][j]=4;
                            level[i+1][j]=2;
                            document.body.innerHTML="";
                            var x=1;
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i+1][j]==4)
                        {
                            level[i][j]=4;
                            level[i+1][j]=6;
                            document.body.innerHTML="";
                            var x=1;
                            check_win(level);
                            update_image(key_code,level);
                        }
                        else if(level[i+1][j]==5 && level[i+2][j]==1)
                        {
                            level[i][j] = 4;
                            level[i+1][j] = 6;
                            level[i+2][j] = 3;
                            var z=1;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i+1][j]==3 && level[i+2][j]==4)
                        {
                            level[i][j] = 4;
                            level[i+1][j] = 2;
                            level[i+2][j] = 5;
                            var z=1;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i+1][j]==3 && level[i+2][j]==1)
                        {
                            level[i][j] = 4;
                            level[i+1][j] = 2;
                            level[i+2][j] = 3;
                            var k=1;                            //variable to stop the loop
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                        else if(level[i+1][j]==5 && level[i+2][j]==4)
                        {
                            level[i][j] = 4;
                            level[i+1][j] = 6;
                            level[i+2][j] = 5;
                            var z=1;
                            document.body.innerHTML = "";
                            check_win(level,level_length);
                            update_image(key_code,level,level_length);
                        }
                    }

                    if(p==1 || x==1 || y==1 || z==1 ||k==1)
                    {
                        break;
                    }
                }
            }
        }
    }

    window.addEventListener("keydown",key);
}
