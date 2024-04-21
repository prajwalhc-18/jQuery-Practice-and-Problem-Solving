$(document).ready(function() {
    $('#imageInput').change(function() {
      var file = this.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#cropperImage').attr('src', e.target.result);
      }
      reader.readAsDataURL(file);
    });
  
    $('#cropButton').click(function() {
      var cropper = new Cropper(document.getElementById('cropperImage'), {
        aspectRatio: 1 / 1, // Set aspect ratio as needed
        viewMode: 1, // Set to 1 to restrict the cropped area to within the container
        zoomable: false, // Disable zooming for simplicity
        crop: function(event) {
          var croppedImage = cropper.getCroppedCanvas().toDataURL();
          $('#cropPreview').html('<img src="' + croppedImage + '" alt="Cropped Image">');
        }
      });
    });
  });
  