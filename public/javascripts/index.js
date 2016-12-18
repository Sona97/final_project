/**
 * Created by Apple on 12/16/16.
 */
//Indiegogo
const Indiegogo = $('#indigogolink').on('mouseenter', function(e) {
    Indiegogo.css('background-color', '#F6391F');
});
Indiegogo.on('mouseleave', function(e) {
    Indiegogo.css('background-color','#C0392B');
});