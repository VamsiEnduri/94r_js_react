// JSON is nothing but string data, but it looks like an object
// JSON -> JavaScript object using res.json()

let t_body = document.getElementById("tbody");

let get_btn = document.getElementById("get_btn");
let post_btn = document.getElementById("post_btn");

let result = null;

// ================================
// GET BUTTON STYLING
// ================================

get_btn.style.padding = "10px 20px";
get_btn.style.backgroundColor = "green";
get_btn.style.color = "white";
get_btn.style.border = "none";
get_btn.style.borderRadius = "5px";
get_btn.style.cursor = "pointer";
get_btn.style.fontSize = "16px";

// ================================
// GET BUTTON EVENT
// ================================

get_btn.addEventListener("click", () => {
  getData();
});

// ================================
// GET DATA
// ================================

async function getData() {
  let res = await fetch("http://localhost:3000/users");

  result = await res.json();

  console.log(result);

  t_body.innerHTML = "";

  result.map((elem, index) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${elem.name}</td>
            <td>${elem.email}</td>
            <td>
                <button class="dlt_bn">Delete</button>
            </td>
            <td>
                <button class="upd-btn">Update</button>
            </td>
        `;

    // ================================
    // ROW STYLING
    // ================================

    tr.style.borderBottom = "1px solid #ddd";

    // ================================
    // TD STYLING
    // ================================

    let td_elements = tr.querySelectorAll("td");

    td_elements.forEach((td) => {
      td.style.padding = "12px";
      td.style.border = "1px solid #ddd";
      td.style.textAlign = "center";
    });

    // ================================
    // DELETE BUTTON STYLING
    // ================================

    let btn_delete = tr.querySelector(".dlt_bn");

    btn_delete.style.padding = "7px 15px";
    btn_delete.style.backgroundColor = "red";
    btn_delete.style.color = "white";
    btn_delete.style.border = "none";
    btn_delete.style.borderRadius = "4px";
    btn_delete.style.cursor = "pointer";

    // ================================
    // UPDATE BUTTON STYLING
    // ================================

    let update_btn = tr.querySelector(".upd-btn");

    update_btn.style.padding = "7px 15px";
    update_btn.style.backgroundColor = "orange";
    update_btn.style.color = "white";
    update_btn.style.border = "none";
    update_btn.style.borderRadius = "4px";
    update_btn.style.cursor = "pointer";

    // ================================
    // DELETE EVENT
    // ================================

    btn_delete.addEventListener("click", () => {
      deleteUser(elem.email);
    });

    // ================================
    // UPDATE EVENT
    // ================================

    // update_btn.addEventListener("click", () => {
    //     updateUser(elem, index);
    // });

    t_body.append(tr);
  });
}

document.addEventListener("DOMContentLoaded", getData());

async function deleteUser(incomingEmail) {
  let status_d = confirm("are you sure to dlete ?");
  if (status_d) {
    let tobe_delte_user = result.find((elem, index) => {
      return elem.email == incomingEmail;
    });

    let r = await fetch(`http://localhost:3000/users/${tobe_delte_user.id}`, {
      method: "DELETE",
    });
    console.log(r);
  }
}

function postData() {
  let reg_btn = document.getElementById("register");
  document.getElementById("register_form").style.display = "block";

  reg_btn.addEventListener("click", async () => {
    n = document.getElementById("name").value;
    e = document.getElementById("email").value;
    p = document.getElementById("password").value;
    c_p = document.getElementById("confirm_password").value;
    r = document.getElementById("role").value;
    let new_user = {
      name: n,
      email: e,
      password: p,
      confirm_password: c_p,
      role: r,
    };

    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_user),
    });
  });

  // document.getElementById("register_form").style.disp="flex"
}

post_btn.addEventListener("click", () => {
  postData();
});
