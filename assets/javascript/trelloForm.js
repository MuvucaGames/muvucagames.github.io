
var progListId = "55c9304a5520e4096c27c2e8";
var gdListId = "55c9304d8d66a05cd5fba24a";
var arteListId = "55c932b51973c6a48411b0bb";
var roteiroListId = "55c932ba403f090ede0f4304";
var nsListId  = "55c932dfb2962c9f4af425c0";
var variasListId = "55c932dfb2962c9f4af425c0";


var progCardId = "XjuMEYyq";
var gdCardId = "qhcYnz1t";
var arteCardId = "8tRCHRms";
var roteiroCardId = "zj1ZQy8A";
var nsCardId  = "ITCtOSIF";
var variasCardId = "ITCtOSIF";




function submitEntryFormX(){
  var idList = [arteCardId, gdCardId, roteiroCardId, progCardId, nsCardId, variasCardId];

  Trello.members.get("me", function(member){

    Trello.post("/cards/" + idList[$('input[name=area]:checked').val()] + "/actions/comments",
      {text: "Pedido de Entrada \n\n"
       + "usario: " +  member.username + "\n\n\n"
       + "email: " + $("input[name='email']").val() + "\n\n\n"
       + "Comentario:\n\n\n"
       + $("textarea[name='comment']").val()},
      function(resp){
        console.log(resp);
        $("#entryform").toggle(false);
        $("#success").toggle(true);
      }
    );

  });
}

//Trello.deauthorize();


var onAuthorize = function() {
    $("#loggedout").toggle(false);
    $("#entryform").toggle(true);

};

/*
Trello.authorize({
    interactive:false,
    success: onAuthorize
    scope: { write: true, read: true }

});
*/

$("#connectLink")
.click(function(){
    Trello.authorize({
        type: "popup",
        success: onAuthorize,
        scope: { write: true, read: true },
        name: "Muvuca Games Trello App",
        expiration: "1day"
    })
});
