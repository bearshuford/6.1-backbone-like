var $ = require('jquery');
var Backbone = require('backbone');
var Like = require('./models/like').Like;

var counter = new Like();
$('#counter').on('click', function(){
   $(this).html(counter.like().toJSON().html);
});
