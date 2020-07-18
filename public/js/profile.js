$(document).ready(function() {

    $.get("/api/user_data").then(function (data) {
    // personal greeting
    const firstname = data.firstname;
    console.log(data.birthday);
    var birthday = moment(data.birthday).add(1, 'days').format('MMMM Do YYYY');
    // birthday = moment().format('MMMM Do YYYY');
    const email = data.email;

   
      $("#profile").append(`
      <div class="name"> ${firstname}</div>
    <div class="email">Email: ${email}</div>
    <div class="birthday">Birthday: ${birthday}</div>
    <button id= "button" class="btn waves-effect waves-light red" type="submit" name="action">Delete Account
<i class="material-icons right">delete_forever</i>
   
  `);

    $("#button").on("click", function () {
      if(confirm("Are you sure you want to delete")===true) {
        $.ajax({
          type: "DELETE",
          url: `/api/user/${firstname}`,
          success: () => {
            window.location.replace("/");
            
          },
        });
      }
        
      });
      // $.ajax({
      //   type: "GET",
      //   url:`/api/profilepic`
      // }).then((res)=>console.log(res));      
});
    
});