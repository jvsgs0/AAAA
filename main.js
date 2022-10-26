//var nomepessoa = document.getElementById("pessoa1").value;
//nomes.push(nomepessoa);

//nomes.sort();

//function searching()
//{
    //var s= document.getElementById("s1").value;
    //var found=0;
    //var j;
    //for (j=0; j<nomes; j++)
    //if(s==nomes[j]){
        //found=found+1;
    //}
//}
//document.getElementById("pessoa2").innerHTML="Nominho"+found+"vez(es)";
//console.log("Nominho"+found+"vez(es)");

nomedaspessoasArray = [];

function submit()
{
    var displaypessoaArray = [];

    for (var j = 1; j <= 4; j++)
    {
        var nomedaspessoas = document.getElementById("nomedaspessoas"+j).value;
        console.log(nomedaspessoas);
        nomedaspessoasArray.push(nomedaspessoas);
    }
    console.log(nomedaspessoasArray)


    var lenghtdaspessoasArray = nomedaspessoasArray.length;
    console.log(lenghtdaspessoasArray);

    for (var k = 0; k < lenghtdaspessoasArray; k++)
    {
        displaypessoaArray.push("<h4>NOME - "+ nomedaspessoasArray[k] + "</h4>");
        console.log(displaypessoaArray);
    }
    console.log(displaypessoaArray);
    document.getElementById("displayNameWithCommas").innerHTML = displaypessoaArray;

var removeCommas = displaypessoaArray.join(" ")
console.log(removeCommas);
document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


document.getElementById("submitButton").style.display = "none";
document.getElementById("sortButton").style.display = "inline-block";

}

function sorting()
{
    nomedaspessoasArray.sort();
    console.log(nomedaspessoasArray);

    var displaypessoaArraySorting = [];

    var lenghtdaspessoasArray = nomedaspessoasArray.length;
    console.log(lenghtdaspessoasArray);

    for (var k = 0; k < lenghtdaspessoasArray; k++)
    {
        displaypessoaArraySorting.push("<h4>NOME - " + nomedaspessoasArray[k] + "</h4>");
        console.log(displaypessoaArraySorting);
    }

    var removeCommas = displaypessoaArraySorting.join(" ");
    console.log(displaypessoaArraySorting);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}
//professora eu fiz quase igual ao projeto de classe, pois acho melhor.