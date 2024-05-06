const BASE_URL = "https://api.webbuilder.technolitics.com/api/v1/website-builder";

const dialogElem = document.getElementById("dialog");
const closeBtn = document.querySelector(".close");


const portfolioModalImageContaner = document.getElementById("portfolio-single-image-view-containerr");
let images = [];



closeBtn.onclick = function () {
  dialogElem.close();
};
dialogElem.onclick = function () {
  dialogElem.close();
};

let currentImageIndex = 0;
// let images = [];

function handleOpenImageModal(event) {
   
    
    const image = event.target;
    const imageSrc = image.src;

   
    const index = parseInt(image.getAttribute("index"));


    // currentImageIndex = Array.from(images).indexOf(image);
    // console.log("Clicked Image Source:", imageSrc);


    // const index = parseInt(image.getAttribute("index"));



    // Check if the images array is empty, and if so, populate it with all images
    if (images.length === 0) {
      console.log("Images array is empty. Populating with all images...");
      images = Array.from(document.querySelectorAll("#portfolio-detail-container img"));
      console.log("Populated Images Array:", images);

    }

    
    currentImageIndex = images.findIndex((img) => img.src === imageSrc);
    console.log(event.target.currentSrc, "image=");


//     console.log("Clicked Image Source", images);
// console.log("index:", index);


// currentImageIndex = images.indexOf();
// NaN === NaN // false

console.log("Current Image Index:", currentImageIndex);

  
    portfolioModalImageContaner.innerHTML = `
    <img style="weight: auto; height: auto; object-fit: contain;"  src="${IMAGE_BASE_URL}/${images[currentImageIndex].src}"  /> 
    `;
  
    dialogElem.showModal();
  }

  // Previous button
document.getElementById("prev-BTN").addEventListener("click", function (event) {
  event.stopPropagation(); // Stop propagation here
  navigateImages(-1); // Call function to navigate to previous image

});
  
// next button
document.getElementById("next-BTN").addEventListener("click", function (event) {
  event.stopPropagation(); // Stop propagation here
  navigateImages(1); // Call function to navigate to next image

});
function navigateImages(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  const imgElement = document.getElementById("portfolio-single-image-view-containerr").querySelector("img");
  imgElement.src = images[currentImageIndex].src;

  portfolioModalImageContaner.innerHTML = "";
  portfolioModalImageContaner.appendChild(imgElement);
}



async function fetchNestedGallery(menuid) {
    const galleryContainer = document.getElementById("portfolio-detail-container");

    try {
        const apiUrl = `${BASE_URL}/website/gallery/get-gallery-by-id/65d0951a52fd1189b6d9f8df?id=${menuid}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch nested gallery: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const galleryDetail = data?.data;
        


        const galleryDetailTitle = galleryDetail?.title;


        const galleryDetailImageItems = galleryDetail?.mediaDetails?.images
        ?.map((image) => {
            return `

            <div id="print-media">
                <div id="portfolio-single-image-view-container">

                    <figure class="masonry-item" onclick="handleOpenImageModal(event)">
                        <img  src="${getIMAGE_BASE_NAME(image)}" alt="${galleryDetail?.title}">
                    </figure>
                </div>
            </div>

            `;
        })
        .join("");


        const galleryDetailsHTML =`
        <div class="galleryDetails">
          <div class="galleryDetails-top">
            <div class="content">
              <h1 class="title cxu-words">${galleryDetailTitle}</h1>
            </div>
          </div>
          <div class="masonry-layout">
          ${galleryDetailImageItems}
      </div>
      </div>
                `;



        galleryContainer.innerHTML = galleryDetailsHTML;

        galleryDetailsHTML += galleryDetailImageItems;
        galleryDetailsHTML +=`
        </div>
        </div>
        `;
        galleryContainer.innerHTML = galleryDetailsHTML;

        const images = galleryDetail.querySelectorAll("img");
        images.forEach((image) => {
          image.addEventListener("click", handleOpenImageModal);
        });


    } catch (error) {
        // console.error("Error fetching nested gallery:", error.message);
    }
}

async function loadNestedGallery() {
    const urlParams = new URLSearchParams(window.location.search);
    const menuid = urlParams.get("menuid");
    fetchNestedGallery(menuid);

     await fetchNestedGallery(); 


    if (menuid) {
        await fetchNestedGallery(menuid);
    } else {
        console.error("Menu ID not found in URL parameters.");
    }
}

loadNestedGallery();

 


// popup button
// var openPopupBtn = document.querySelector("#open-popup-btn");
// var closePopupBtn = document.querySelector(".popup-close-btn");

// openPopupBtn.addEventListener("click",function(){
//   document.body.classList.add("popup-active");
// });

// closePopupBtn.addEventListener("click",function(){
//   document.body.classList.remove("popup-active");
// });


// function add){
//   // code
//   return ''
// }

// const xyz = add("okdssfgbdsf")




// function openModal(apiUrl){

//   var openPopupBtn = document.querySelector("#open-popup-btn");
// var closePopupBtn = document.querySelector(".popup-close-btn");
// var modal 

// }


// openPopupBtn.addEventListener("click",function(){
//   document.body.classList.add("popup-active");
// });

// closePopupBtn.addEventListener("click",function(){
//   document.body.classList.remove("popup-active");
// });







