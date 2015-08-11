
var progListId = "55c9304a5520e4096c27c2e8";
var gdListId = "55c9304d8d66a05cd5fba24a";
var arteListId = "55c932b51973c6a48411b0bb";
var roteiroListId = "55c932ba403f090ede0f4304";
var nsListId  = "55c932dfb2962c9f4af425c0";
var variasListId = "55c932dfb2962c9f4af425c0";


function submitEntryFormX(){
  var idLsit = [arteListId, gdListId, roteiroListId, progListId, nsListId, variasListId];

  Trello.members.get("me", function(member){

    Trello.post("/lists/" + idLsit[$('input[name=area]:checked').val()] +"/cards",
      {name: "Pedido de Entrada: " + member.username,
       desc: $("textarea[name='comment']").val(),
       due : null}, function(card){
         console.log(card);
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
