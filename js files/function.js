// image details
function getIMAGE_BASE_NAME(image = ""){
    if(image){
      const images = image?.split("/")?.pop()
      const imageBaseName = `${IMAGE_BASE_URL}/${images}`;
      return imageBaseName;
    }
    return image;
  }


//website details 
function WebsiteID(){
    const websiteData = sessionStorage.getItem(WEBSITE_DATA_KEY);
    return websiteData ? JSON.parse(websiteData)?._id : null;
}



// const data = await response.json();
// var websiteID = data.data_id;

// console.log( "hello",websiteID);








// ========================
// const dialogElem = document.getElementById("dialog");
// const closeBtn = document.querySelector(".close");
// const dialogButton = document.getElementById("dialog-button");

// dialogButton.onclick = function () {
//   dialogElem.showModal();
// };
// closeBtn.onclick = function () {
//   dialogElem.close();
// };