let btn_values = ["Get", "Post"];
let btns_c = document.getElementById("btns");
let t_body = document.getElementById("tbody");
let all_users = JSON.parse(localStorage.getItem("all_users"));
let update_form=document.getElementById("update_form")

btn_values.map((elem, index) => {
  let btn = document.createElement("button");
  btn.textContent = elem;
  
  // btn.onclick=()=>{
  //     let btn_type=elem

  //     if (btn_type == "Get"){
  //         alert("get op")
  //         all_users.map((elem,index)=>{
  //             let tr=document.createElement("tr")

  //             tr.innerHTML=`
  //             <td>${index+1}</td>
  //             <td>${elem.name}</td>
  //             <td>${elem.email}</td>
  //             <td><button>Delete</button></td>
  //             <td><button>Update</button></td>
  //             `
  //             t_body.append(tr)
  //         })

  //     }
  //     else if (btn_type == "Post"){
  //         alert("post op")
  //         n=prompt("enter your name")
  //         e=prompt("enter your email")
  //         p=prompt("enter your password")
  //         c_p=prompt("enter your confirm-password")

  //         if (p == c_p){

  //             let new_user={
  //                 name:n,
  //                 email:e,
  //                 password:p
  //             }
  //             all_users.push(new_user)
  //             localStorage.setItem("all_users",JSON.stringify(all_users))
  //         }
  //     }
  //     else if (btn_type == "Delete"){
  //         alert("delete op")
  //     }
  //     else if (btn_type == "Update"){
  //         alert("update op")
  //     }
  // }
  btn.addEventListener("click", () => {
    let btn_type=elem
    if (elem == "Get") {
      displyData(all_users);
    } else if (btn_type == "Post") {
      alert("post op");
      n = prompt("enter your name");
      e = prompt("enter your email");
      p = prompt("enter your password");
      c_p = prompt("enter your confirm-password");

      if (p == c_p) {
        let new_user = {
          name: n,
          email: e,
          password: p,
        };
        all_users.push(new_user); 
        localStorage.setItem("all_users", JSON.stringify(all_users));
        displyData(all_users)
      }
    } else if (btn_type == "Delete") {
      alert("delete op");

    } else if (btn_type == "Update") {
      alert("update op");
    }
  });
  btn.classList.add("api-btn");
  btn.classList.add(elem.toLowerCase());

  btns_c.append(btn);
});



function displyData(all_users) {

    t_body.innerHTML=""

    all_users.map((elem, index) => {
      let tr = document.createElement("tr");

      tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${elem.name}</td>
                <td>${elem.email}</td>
                <td><button class="dlt_bn">Delete</button></td>
                <td><button class="upd-btn">Update</button></td>
                `;

                let btn_delete=tr.querySelector(".dlt_bn")
                btn_delete.addEventListener("click",()=>{
                    deleteUser(elem.email)
                })

                let updte_btn=tr.querySelector(".upd-btn")
                updte_btn.addEventListener("click",()=>{
                  updateUser(elem,index)
                })

                
      t_body.append(tr);
    });
  
}


function updateUser(incomingUserObj,inocmingIndexNum){
  update_form.style.display="flex"
  update_form.style.flexDirection="column"
  let cnfm_udt=document.getElementById("cnfm_udt")
  document.getElementById("name").value=incomingUserObj.name
  document.getElementById("email").value=incomingUserObj.email
  document.getElementById("password").value=incomingUserObj.password
  cnfm_udt.addEventListener("click",()=>{
    let name_u=document.getElementById("name").value
    let email_u=document.getElementById("email").value
    let password_u=document.getElementById("password").value
    let updated_user={
      name:name_u,
      email:email_u,
      password:password_u
    }
    all_users[inocmingIndexNum]=updated_user
    localStorage.setItem("all_users",JSON.stringify(all_users))
    displyData(all_users)
  })
  // update_form.style.width="100px"

  // update_form.style.height="100px"
  // update_form.style.backgroundColor="red"

}

function deleteUser(incomingEmail){
    let status_d=confirm("are you sure to dlete ?")
    if(status_d){
        all_users=all_users.filter((elem,index)=>{
        return elem.email !== incomingEmail
    })

    localStorage.setItem("all_users",JSON.stringify(all_users))
    displyData(all_users)
    }else{
        alert("delete cancelled")
    }
}


document.addEventListener("DOMContentLoaded",()=>{
    displyData(all_users)
})
// displyData()
