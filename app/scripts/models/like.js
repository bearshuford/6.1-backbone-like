var _ = require('underscore');
var Backbone = require('backbone');

var Like = Backbone.Model.extend({

   defaults: {
      likes: 0,
   },

   like: function(){
      this.set('likes',this.get('likes')+1);
      return this; // make chainable
   },

   toJSON: function(){
      this.set('html', this.get('likes') + (this.get('likes') === 1 ? ' like' : ' likes'));
      return _.clone(this.attributes);
   }

});

module.exports = {
   'Like': Like
};
