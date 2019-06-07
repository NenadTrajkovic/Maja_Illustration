
let button = document.querySelector(".hamburger__menu"),
    navigation = document.querySelector(".navigation__small");

  button.addEventListener("click", function() {
    if(navigation.style.display === "none" || !navigation.style.display) {
      navigation.style.display = "block";
    } else {
      navigation.style.display = "none";
    }
  });

  const MAJA = (function() {
    // Private memebers
    const _isContactFormValid = false;
  
    function _handleFormSubmit(event) {
      
  
      console.log('event: ', event);
  
      // TODO: Find "required" inputs in this form + Validate them + return true/false based on valdiaiton
      event.preventDefault();
    }
  
    // Public memebers
    return {
      init: function() {
        console.log('OK');
      },
  
      submitForm: function(options) {
        const form = document.getElementById(options.formId);
  
        form.addEventListener('submit', _handleFormSubmit)
      }
    };
  })();