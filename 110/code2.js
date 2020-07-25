$.ajax({
    url: "ajax/save-photo.php",
    method: 'POST',
    data: new FormData($('#my-form')[0]),
    processData: false,
    contentType: false,
    dataType: 'json',
    success: function() {
        alert('success');
    },
      error: function(){
        alert('error');
     }
});