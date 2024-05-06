
async function fetchData() {
  console.log("Fetching data");

  try {
    const apiUrl = "${BASE_URL}/website-builder/website/auth/get-website-by-uid/PRJ00001";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

        testimonialData();
        galleryData();
        bannerData();
  

    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

window.onload = function () {
        fetchData();
 
        };




  async function testimonialData() {
    console.log("Testimonial data");
  
    try {
      const apiUrl =
        "https://api.webbuilder.technolitics.com/api/v1/website-builder/website/testimonial/get-all-testimonials/65d0951a52fd1189b6d9f8df";
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(
          `Failed to testimonial data: ${response.status} ${response.statusText}`
        );
      }
  
      const data = await response.json();
      console.log("Data testimonial successfully:", data);
    } catch (error) {
      console.error("Error testimonial data:", error.message);
    }
  }
  



      
  async function galleryData() {
    console.log("Gallery data");
  
    try {
      const apiUrl =
        "https://api.webbuilder.technolitics.com/api/v1/website-builder/website/gallery/get-all-galleries/65d0951a52fd1189b6d9f8df";
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(
          `Failed to gallery data: ${response.status} ${response.statusText}`
        );
      }
  
      const data = await response.json();
      console.log("Data gallery successfully:", data);
    } catch (error) {
      console.error("Error gallery data:", error.message);
    }
  }

 
  
     
  async function bannerData() {
    console.log("Banner data");
  
    try {
      const apiUrl =
        "https://api.webbuilder.technolitics.com/api/v1/website-builder/website/banner/get-all-banners/65d0951a52fd1189b6d9f8df?type=POPUP_BANNER";
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(
          `Failed to banner data: ${response.status} ${response.statusText}`
        );
      }
  
      const data = await response.json();
      console.log("Data banner successfully:", data);
    } catch (error) {
      console.error("Error banner data:", error.message);
    }
  }
  
  
  
  

    window.onload = function () {
      fetchData();
      testimonialData();
      galleryData();
      bannerData();
      };




const BASE_URL = "https://api.webbuilder.technolitics.com/api/v1/website-builder";
d_id = "65d0951a52fd1189b6d9f8df";
console.log(" fetchData....");
function fetchData() {
    const apiUrl = `${BASE_URL}/website/auth/get-website-by-uid/PRJ00001`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log( "fatch data",data);
            displayBanner();
            displayTestimonials();
            displayGALLERY();
            displayASSOCIATION();         
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


console.log(" fetch Banne....");
function displayBanner() {
  const bannerUrl = `${BASE_URL}/website/banner/get-all-banners/65d0951a52fd1189b6d9f8df?type=POPUP_BANNER`;
    fetch(bannerUrl)
    .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      console.log("fetch Banne", data);
    
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
}


console.log(" fetch Testimonials....");
function displayTestimonials(){
  const testimonialUrl = `${BASE_URL}/website/testimonial/get-all-testimonials/65d0951a52fd1189b6d9f8df`;
  fetch(testimonialUrl)
  
  .then(response =>{
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(testimonial =>{
    console.log("fatch testimonial",testimonial);
  })
  .catch(error=>{
    ('There was a problem with the fetch operation:',error);
});
}




console.log(" fetch GALLERY....");
function displayGALLERY(){
  const galleryUrl = `${BASE_URL}/website/gallery/get-all-galleries/65d0951a52fd1189b6d9f8df`;
  fetch(galleryUrl)
  .then(response =>{
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(gallery =>{
    console.log("fetch gallery",gallery);
  })
  .catch(error =>{
    ('There was a problem with the fetch operation:',error);
  });
}

window.onload = function () {
    fetchData();
    // displayBanner();
};





console.log(" fetch ASSOCIATION....");
function displayASSOCIATION(){
  const galleryUrl = `${BASE_URL}/website/association/get-all-associations/65d0951a52fd1189b6d9f8df?type=CLIENT`;
  fetch(galleryUrl)
  .then(response =>{
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(association =>{
    console.log( "fetch association",association);
  })
  .catch(error =>{
    ('There was a problem with the fetch operation:',error);
  });
}

window.onload = function () {
    fetchData();
    // displayBanner();
};





// <----------------------------------->
// fetchGalleryData
// <----------------------------------->



async function fetchGalleryData() {
  try {
    console.log("Fetching Gallery Data");
    const galleryContainer = document.getElementById("gallery-portfolio");

    const apiUrl = `${BASE_URL}/website/association/get-all-associations/65d0951a52fd1189b6d9f8df?type=CLIENT`; // Replace "YOUR_API_URL_HERE" with the actual endpoint of your API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch gallery data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Gallery data fetched successfully:", data);

    galleryContainer.innerHTML = ""; // Clear existing content
    data.forEach(item => {
      const galleryItemDiv = document.createElement("news");
      galleryItemDiv.classList.add("gallery-item");

      const image = document.createElement("img");
      image.src = item.images; // Assuming the property name for image URL is "imageUrl"
      image.alt = AWARD; // Assuming each gallery item has a "title" property

      const title = document.createElement("h3");
      title.textContent = item.title; // Assuming each gallery item has a "title" property

      galleryItemDiv.appendChild(image);
      galleryItemDiv.appendChild(title);

      galleryContainer.appendChild(galleryItemDiv);
    });
  } catch (error) {
    console.error("Error fetching gallery data:", error.message);
  }
}

// Call the function to fetch gallery data
fetchGalleryData();



function fetchGalleryData(){
  let api=`${BASE_URL}/website/association/get-all-associations/65d0951a52fd1189b6d9f8df?type=CLIENT`;
  fetch(api).then(res=>{
    return res
  }).then(data=>{
    display_image(data.url)
  }).catch(e=>console.log("error"))
}

function display_image(image){
  document.getElementById("image").src=img
}


// Fetching Testimonial




// <----------------------------------->
// fetchGallery
// <----------------------------------->

async function fetchGallery() {
  console.log("Fetching Gallery");
  const galleryContainer = document.getElementById("gallery-portfolio");

  try {
    const apiUrl =  "https://api.webbuilder.technolitics.com/api/v1/website-builder/website/gallery/get-all-galleries/65d0951a52fd1189b6d9f8df";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Gallery: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("fetched successfully:", data);
    const galleryItems = data?.gallery
      ?.map(
        (item) =>`
        <div class="news">
        <img src="mediaType" alt="" >
        <button>View Details</button>
        <button>Enquire Now</button>
        <h3>${item?.TITLE}</h3>
    </div>
        `
      )
      .join("");
    galleryContainer.innerHTML = galleryItems;
  } catch (error) {
    console.error("Error fetching Gallery:", error.message);
  }
}


// fetchGallery
const TITLE = [
  {
    title: "PRINT MEDIA",
  },
  {
    title: "ELECTRONIC MEDIA",
  },
  {
    title: "RADIO MEDIA",
  },
  {
    title: "DIGITAL MEDIA",
  },
  {
    title: "OUTDOOR MEDIA",
  },
  {
    title: "MULTIPLEX MEDIA",
  },
  {
    title: "PR SERVICES",
  },
  {
    title: "EVENTS PROMOTIONS",
  },
];



async function fetchGallery() {
  console.log("Fetching Gallery");
  const galleryContainer = document.getElementById("gallery-portfolio");

  try {
      const apiUrl =  "https://api.webbuilder.technolitics.com/api/v1/website-builder/website/gallery/get-all-galleries/65d0951a52fd1189b6d9f8df";
      const response = await fetch(apiUrl);

      if (!response.ok) {
          const statusText = response.statusText || "Unknown error";
          throw new Error(
              `Failed to fetch Gallery: ${response.status} ${statusText}`
          );
      }

      const data = await response.json();
  

  
      // Clear the existing content of the gallery container
      galleryContainer.innerHTML = '';


      // Iterate over each gallery item and create HTML markup
      data.data.forEach(item => {
        console.log("gallery:", item);      

          const galleryItem = document.createElement('div');
          galleryItem.classList.add('news');
          galleryItem.innerHTML = `
              <img src="https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/${item.mediaDetails.images[0]}" alt="${item.title}">
              <button>View Details</button>
              <button>Enquire Now</button>
              <h3>${item.title}</h3>
          `;
          galleryContainer.appendChild(galleryItem);
      });
  } catch (error) {
      console.error("Error fetching Gallery:", error);
  }
}

// Call the fetchGallery function to initiate the fetching process
fetchGallery();







// fetchData (Association)

async function fetchAssociation() {
  console.log("Fetching Association");
  const associationContainer = document.getElementById("association");

  try {
      const apiUrl =  "https://api.webbuilder.technolitics.com/api/v1/website-builder/website/association/get-all-associations/65d0951a52fd1189b6d9f8df?type=CLIENT";
      const response = await fetch(apiUrl);

      if (!response.ok) {
          const statusText = response.statusText || "Unknown error";
          throw new Error(
              `Failed to fetch Association: ${response.status} `
          );
      }

      const data = await response.json();
  

  
      // Clear the existing content of the association container
      associationContainer.innerHTML= '';


      // Iterate over each association item and create HTML markup
      data.data.forEach(item => {
        console.log("association:", item); 
        // const logoUrl = item.logo[0];

         const associationItem = document.createElement('div');
         associationItem.classList.add('slide');
         associationItem.innerHTML = `
         <a href="">
                            <img src="https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket" alt="${item.name}" />
                        </a>
              
          `;
          associationContainer.appendChild(associationItem);
      });
  } catch (error) {
      console.error("Error fetching Association:", error);
  }
}

// Call the fetchAssociation function to initiate the fetching process
fetchAssociation();



// <----------------------------------->
// fetchGallery(print-media)
// <----------------------------------->




async function fetchGallery() {
  console.log("Fetching Gallery");
  const galleryContainer = document.getElementById("print-image");

  try {
      const apiUrl =  "https://api.webbuilder.technolitics.com/api/v1/website-builder/website/gallery/get-all-galleries/65d0951a52fd1189b6d9f8df";
      const response = await fetch(apiUrl);

      if (!response.ok) {
          const statusText = response.statusText || "Unknown error";
          throw new Error(
              `Failed to fetch Gallery: ${response.status} ${statusText}`
          );
      }

      const data = await response.json();
  

  
      // Clear the existing content of the gallery container
      galleryContainer.innerHTML = '';


      // Iterate over each gallery item and create HTML markup
      data.data.forEach(item => {
        console.log("gallery:", item);      

          const galleryItem = document.createElement('div');
          galleryItem.classList.add('print-image');
          galleryItem.innerHTML = `
                <figure><img src="https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/${item.mediaDetails.images[0]}" alt=""></figure>
                <figure><img src="https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/${item.mediaDetails.images[0]}" alt=""></figure>
                <figure><img src="https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/${item.mediaDetails.images[0]}" alt=""></figure>
          `;
          galleryContainer.appendChild(galleryItem);
      });
  } catch (error) {
      console.error("Error fetching Gallery:", error);
  }
}

// Call the fetchGallery function to initiate the fetching process
fetchGallery();

