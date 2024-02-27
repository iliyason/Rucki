function showDescription(descriptionId) {
    var descriptions = document.getElementsByClassName('product-description');
    for (var i = 0; i < descriptions.length; i++) {
      descriptions[i].style.display = 'none';
    }
    document.getElementById(descriptionId).style.display = 'block';
  }
  
  function hideDescription(descriptionId) {
    document.getElementById(descriptionId).style.display = 'none';
  }

   function scrollToDivAssort() {
            var div = document.getElementById('assort');
            div.scrollIntoView({ behavior: 'smooth' });
        }

function scrollToDivFooter() {
            var div = document.getElementById('footer');
            div.scrollIntoView({ behavior: 'smooth' });
        }