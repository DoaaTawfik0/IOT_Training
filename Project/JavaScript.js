let body = document.querySelector("body");

(async function result() {
  let data = await fetch("https://techcrunch.com/wp-json/wp/v2/posts");
  let result = await data.json();


  let Total_DIV = document.createElement("div");
  Total_DIV.className = "Post_Div";


  for (let i = 0; i < result.length; i++) {

    console.log(result[i]);

    let postImage = result[i].jetpack_featured_media_url;
    let Title = result[i].yoast_head_json.title;
    let URL = result[i].link;
    let Description = result[i].yoast_head_json.description;
    console.log(Description);


    let div1 = document.createElement("div");  //Div to carry data of post
    div1.className = "Post";


    let Head_Title = document.createElement("h3");
    Head_Title.className = "Post_Title";


    let Image = document.createElement("img");
    Image.className = "Post_Image";
    Image.src = postImage;
    Image.alt = "Post Image " + i;


    let a_Ref = document.createElement("a"); 
    a_Ref.href = URL;
    a_Ref.innerText = Title;
    a_Ref.style.color = "black";
    a_Ref.className = "Post_Link";


    let P_Desc = document.createElement("p");
    P_Desc.className = "Post_Desc";
    P_Desc.innerText = Description;
    
    P_Desc.style.color = "gray";
    



    body.appendChild(Total_DIV);
    div1.appendChild(Image);
    div1.appendChild(Head_Title);
    div1.appendChild(P_Desc);
    Head_Title.appendChild(a_Ref);
    Total_DIV.appendChild(div1);

  }

})();