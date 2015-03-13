;(function($, doc, win) {
  "use strict";

  var name = 'js-form-manager';

  function FormManager(el, opts) {
    this.$el      = $(el);
    this.$el.data(name, this);

    this.defaults = {};

    var meta      = this.$el.data(name + '-opts');
    this.opts     = $.extend(this.defaults, opts, meta);

    this.opts.form_el = this.$el.find('form');

    this.init();
  }

  FormManager.prototype.init = function() {
    this.opts.form_el.submit(function(e){
      e.preventDefault();
      FormManager.prototype.validate($(this).serializeArray(), $(this).serialize());
    });
  };

  FormManager.prototype.validate = function(data, urlEncode){
    var empty = "";
    $.each(data, function(key, field){
      if(field.value == ""){
        empty += field.name+'\n';
      }
    });
    if(empty != ""){
      alert("Cannot submit without the following fields:\n\n"+empty);
    } else {
      FormManager.prototype.formatEmailSend(urlEncode);
    }
  };

  FormManager.prototype.formatEmailSend = function(encoded){
    $.ajax({
      type: "POST",
      url: 'mail.php',
      data: encoded,
      success: function(){
        $('#appointment-form').html("<div style=\"padding-top:20px\" ><h4>Thank you!</h4><p>Your appointment request was submitted successfully.<br/>You should receive a reply soon.</p></div>");
      },
      error: function(){
        alert("An error occurred. Please refresh and try again.\n\nIf the problem persists, please contact us.");
      }
    });
  };

  FormManager.prototype.destroy = function() {
    this.$el.off('.' + name);
    this.$el.find('*').off('.' + name);
    this.$el.removeData(name);
    this.$el = null;
  };

  $.fn.formManager = function(opts) {
    return this.each(function() {
      new FormManager(this, opts);
    });
  };

  $(doc).on('dom_loaded ajax_loaded', function(e, nodes) {
    var $nodes = $(nodes);
    var $elements = $nodes.find('.' + name);
    $elements = $elements.add($nodes.filter('.' + name));

    $elements.form_manager();
  });
})(jQuery, document, window);