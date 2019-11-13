// initializing variables
$("#submit").on("click", function (event) {
  event.preventDefault();
  add(event);
});

function add(event) {
  event.preventDefault();


  var newPlayer = {
    firstName: $("#athlete-firstname").val(),
    lastName: $("#athlete-lastname").val(),
    position: $("#athlete-position").val(),
    height: $("#athlete-height").val(),
    weight: $("#athlete-weight").val(),
    highschool: $("#athlete-school").val(),
    class: $("#athlete-year").val(),
    film: $("#athlete-film").val()
  };

  console.log(newPlayer)
};

//to be added to react page

handleInputChange = event => {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
    [name]: value
  });
};

//function to control the submit button of the search form 
handleFormSubmit = event => {
  event.preventDefault();
  // once it clicks it connects to the google book api with the search value
  this.savePlayer(this.state);
}