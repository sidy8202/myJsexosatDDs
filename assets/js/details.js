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


var lien = fetch('https://fakestoreapi.com/products')
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    var data = value[cle[1]]
    document.getElementById('descri').innerHTML = data.description
    document.getElementById('image').src = data.image
  })
  .catch(function (err) {
  });

var getId = document.location.href;
var cle = getId.split('=')


