(function($){
  $(function(){

    // Initialize collapse button
    $('.button-collapse').sideNav();

    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();


    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

    $('.dropdown-button').dropdown({
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    }
  );

	$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
  
  
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space