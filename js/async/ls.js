let btn_values=["Get","Post","Delete","Update"]
let btns_c=document.getElementById("btns")
let t_body=document.getElementById("tbody")
btn_values.map((elem,index)=>{
    let btn=document.createElement("button")
    btn.textContent=elem
    let all_users=JSON.parse(localStorage.getItem("all_users"))
    btn.onclick=()=>{
        let btn_type=elem

        if (btn_type == "Get"){
            alert("get op")
            all_users.map((elem,index)=>{
                let tr=document.createElement("tr")

                tr.innerHTML=`
                <td>${index+1}</td>
                <td>${elem.name}</td>
                <td>${elem.email}</td>
                <td><button>Delete</button></td>
                <td><button>Update</button></td>
                `
                t_body.append(tr)
            })
            
        }
        else if (btn_type == "Post"){
            alert("post op")
            n=prompt("enter your name")
            e=prompt("enter your email")
            p=prompt("enter your password")
            c_p=prompt("enter your confirm-password")

            if (p == c_p){
                
                let new_user={
                    name:n,
                    email:e,
                    password:p
                }
                all_users.push(new_user)  
                localStorage.setItem("all_users",JSON.stringify(all_users))
            }
        }
        else if (btn_type == "Delete"){
            alert("delete op")
        }
        else if (btn_type == "Update"){
            alert("update op")
        }
    }
    btn.classList.add("api-btn");
    btn.classList.add(elem.toLowerCase());

    btns_c.append(btn)
})

