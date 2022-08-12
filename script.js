var link="https://www.anapioficeandfire.com/api/books";


async function bookdetails(){
    try
    {
        var detail=await fetch(link);
        var books=await detail.json();
        console.log(books);
    
    var rootdiv=document.createElement("div");
    rootdiv.className="rootdiv";
    document.body.append(rootdiv);


    var table=document.createElement("table");
    table.classList.add("table", "table-striped");
    table.id="table";

    var thead=document.createElement("thead");
    thead.classList.add("thead");

    var tbody=document.createElement("tbody");
    tbody.classList.add("tbody");

    var headrow=document.createElement("tr");

    var heading=["Novel Name", "isbn", "Number of Page", "Author", "Publisher", "Released Date", "Character info"];
    heading.forEach(ele =>{
        var thelement=document.createElement("th");
        thelement.innerHTML= ele;
        headrow.append(thelement);
        thelement.setAttribute("scope","col");
    });

    books.forEach(val => {
        var bodyrow=document.createElement("tr");
        bodyrow.classList.add("bodyrow");

        var tdElement1=document.createElement("td");
        tdElement1.classList.add("tdElement1");
        tdElement1.innerHTML=val.name;
        console.log(val.name);

        var tdElement2=document.createElement("td");
        tdElement2.innerHTML=val.isbn;
        

        var tdElement3=document.createElement("td");
        tdElement3.innerHTML=val.numberOfPages;
        

        var tdElement4=document.createElement("td");
        tdElement4.innerHTML=val.authors;
        

        var tdElement5=document.createElement("td");
        tdElement5.innerHTML=val.publisher;
       

        var tdElement6=document.createElement("td");
        tdElement6.innerHTML= val.released;

        var tdElement7=document.createElement("td");
        tdElement7.innerHTML= "",character(val);
        
        function  character(arr){
            for(let i=1;i<6;i++){
                
                    var char=document.createElement("ul");
                    var list=document.createElement("li");
                    list.innerText= arr.characters[i];
                    char.append(list);
                    console.log(arr.characters[i]);
                    tdElement7.append(char);
            }
        }
        
       
        bodyrow.append( tdElement1,tdElement2,tdElement3,tdElement4,tdElement5,tdElement6,tdElement7);
        tbody.append(bodyrow);
    })

    
    thead.appendChild(headrow);
    table.appendChild(thead);
    table.appendChild(tbody);


    rootdiv.append(table);


    }
catch(error){
    console.log("oops there might be an error");
    console.log(error);
}
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByClassName("bodyrow");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByClassName("tdElement1")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



var maindiv=document.createElement("div");
maindiv.setAttribute("id","maindiv");



var title = document.createElement("h1");
title.id="title";
title.innerHTML="Novels";

var subdiv= document.createElement("div");
subdiv.id="subdiv";

var novellist=document.createElement("button");
novellist.id="list";
novellist.innerHTML="Click Me first to View Novel Collection";
novellist.addEventListener("click",bookdetails);

var search=document.createElement("input");
search.id="myInput";
search.setAttribute("type","text");
search.setAttribute("placeholder","Search by Book name..");
search.setAttribute("title","Type in name");
search.addEventListener("keyup",myFunction);

subdiv.append(novellist,search);

maindiv.append(title,subdiv);
document.body.append(maindiv);



