var text="";
var ans;
document.getElementById("ip1").value="";
function func(num)
{
    if(num!== "=" && num!=="clr")
    {
        text=text+num;
        document.getElementById("ip1").value=text;
    }
    else if(num==="clr")
    {
        text="";
        document.getElementById("ip1").value=text;
    }
    else
    func2();
}
function func2()
{
    if(text!=="")
    {
    text=eval(text).toString();
    document.getElementById("ip1").value=text;
    }
    else
    document.getElementById("ip1").value=text;

}