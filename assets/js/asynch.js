  // async function loadUsers() {
  //   const response = await fetch("https://fakestoreapi.com/users?limit=5")
  //       return response.json(); 
  // }
  
  // document.addEventListener("DOMContentLoaded", async () => {
  //   try {
  //     const users = await loadUsers();
  //     const divContainer = document.getElementById('content');
  //     users.forEach(user => {
  //         const paragraphElem = document.createElement('p');
  //         paragraphElem.innerText = `ID: ${user.id} \n Email: ${user.Email} \n Username: ${user.username} \n Password: ${user.password}`;
  //         divContainer.appendChild(paragraphElem);
  //     });
  //   } catch (e) {
  //     console.log('ERROR');
  //     console.log(e);
  //   }
  // });

  

// ENd of new table


// {/* <td><a href ="details.html${element.id} " class="details btn btn-success">detailp</a></td> */}


const table = document.getElementById('tableau')

async function getResponse() {
	const response = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json)) }
       
fetch('https://fakestoreapi.com/products')
  .then(
  // recuperer les valeurs que contient response
  response => response.json())
  .then((json) => json.forEach(tableElements))

  function tableElements (element, index, arr){
    arr[index] = document.querySelector('#tableau tbody').innerHTML +=

    `<tr>
      <td>${element.id}</td>
      <td>${element.title}</td>
      <td>${element.price}</td>
      <td><a class="details btn btn-primary" data-details="" href="details.html/${element.id}" id="details" >details</a></td>

<!-- Modal -->
<div class="modal fade" id="exampleModal${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog large">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${element.title}</h1>
      </div>
      <div class="modal-body">
       <img src = "${element.image}" id ="myImg" /> 
       <p> ${element.description}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </tr>`

    
  }  


  
 $(document).on('click', '#details', function () {

  var id = $(this).attr('data-details')

  var showdetail = '#exampleModal'+ id 


  $(showdetail).modal('show');

 });  