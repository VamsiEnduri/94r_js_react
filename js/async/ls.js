let btn_values = ["Get", "Post"];
let btns_c = document.getElementById("btns");
let t_body = document.getElementById("tbody");
let all_users = JSON.parse(localStorage.getItem("all_users"));

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
                <td><button>Update</button></td>
                `;

                let btn_delete=tr.querySelector(".dlt_bn")
                btn_delete.addEventListener("click",()=>{
                    deleteUser(elem.email)
                })
      t_body.append(tr);
    });
  
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
