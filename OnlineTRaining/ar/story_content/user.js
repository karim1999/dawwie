function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6njGJTpCOSN":
        Script1();
        break;
      case "5YvgDvI4La0":
        Script2();
        break;
      case "5X4fw0ykYLa":
        Script3();
        break;
      case "5mxeQOJVrCF":
        Script4();
        break;
      case "5mSYIX8RqB6":
        Script5();
        break;
  }
}

function Script1()
{
  myWindow = window.open("", "", "width=80%, height=80%");

window.print();


}

function Script2()
{
  myWindow = window.open("", "", "width=80%, height=80%");

window.print();


}

function Script3()
{
  var currentTime = new Date()
var day = currentTime.getDate()
var month = currentTime.getMonth() + 1
var year = currentTime.getFullYear()
if(day<10) {
day='0'+day
}
if(month<10) {
month='0'+month
}
var dateString=day + "/" + month + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  myWindow = window.open("", "", "width=80%, height=80%");

window.print();


}

function Script5()
{
  myWindow = window.open("", "", "width=80%, height=80%");

window.print();


}

