
const IMAGE_BASE_URL= "https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket";




async function fetchData() {
  // console.log("Fetching data");

  try {
    const apiUrl = `${BASE_URL}/website/auth/get-website-by-uid/${WEBSITE_UID}`;
    const response = await fetch(apiUrl);
    // console.log("apiUrl=",apiUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

        fetchGallery();
        fetchAssociation();
        fetchBlog()
        // fetchTestimonial();
        // galleryData();
        // bannerData();
  

    console.log("Data fetched successfully:", data);
  } catch (error) {
    // console.error("Error fetching data:", error.message);
  }
}

window.onload = function () {
        fetchData();
 
        };




        
  // async function testimonialData() {
  //   console.log("Testimonial data");
  
  //   try {
  //     const apiUrl =`${BASE_URL}/website/testimonial/get-all-testimonials/65d0951a52fd1189b6d9f8df`
  //     const response = await fetch(apiUrl);
  
  //     if (!response.ok) {
  //       throw new Error(
  //         `Failed to testimonial data: ${response.status} ${response.statusText}`
  //       );
  //     }
  
  //     const data = await response.json();
  //     console.log("Data testimonial successfully:", data);
  //   } catch (error) {
  //     console.error("Error testimonial data:", error.message);
  //   }
  // }
  


  
// -------fetch gallery ------

async function fetchGallery() {
  console.log("Fetching Gallery");
  const galleryContainer = document.getElementById("gallery-portfolio");

  try {
      const websiteID = WebsiteID();

      const apiUrl =  `${BASE_URL}/website/gallery/get-all-galleries/${websiteID}`;
      const response = await fetch(apiUrl);


      if (!response.ok) {
          const statusText = response.statusText || "Unknown error";
          throw new Error(
              `Failed to fetch Gallery: ${response.status} ${statusText}`
          );
      }

      const data = await response.json();
              console.log("gallery data:", data);    


  
      // Clear the existing content of the gallery container
      galleryContainer.innerHTML = '';


      // Iterate over each gallery item and create HTML markup
      data.data.forEach(item => {
         

          const galleryItem = document.createElement('div');
          galleryItem.classList.add('news');
          galleryItem.innerHTML = `


          <div class="news">
                       <a href="print-media.html?menuid=${item?._id} "><img src="${getIMAGE_BASE_NAME(item?.mediaDetails?.images[0])}" alt="${item.title}">
                       </a>
                       <a href="print-media.html?menuid=${item?._id} "><button>View Details</button></a>
                       <a href="submit.html?menuid=${item?._id} "><button>Enquire Now</button></a>
                        <h3>${item?.title}</h3>
                    </div>
          `;
          galleryContainer.appendChild(galleryItem);
      });
  } catch (error) {
      // console.error("Error fetching Gallery:", error);

  }
}

// -------fetch gallery ------





 // fetchData (Association)

async function fetchAssociation() {
  console.log("Fetching Association");
  // const associationContainer = document.getElementById("association");

  try {
    const websiteID = WebsiteID();
      const apiUrl =  `${BASE_URL}/website/association/get-all-associations/${websiteID}?type=CLIENT`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
          const statusText = response.statusText || "Unknown error";
          throw new Error(
              `Failed to fetch Association: ${response.status} `
          );
      }

      const data = await response.json();
      console.log("association data:", data);    


      const associationContainer = document.getElementById(
        "association"
      );

      // const images=data?.logo;



      const associationItemsHTML = (data?.data || [])
      
        .map(
          (item) => `

          <div class="member cxu-fade" data-ease="back">
            <div class="image" 
            style="height: auto;">
              <img src=${IMAGE_BASE_URL}/${item?.logo} alt=${
            item?.name
          }>
            </div>
            </div>
            `
        )
        .join("");


        associationContainer.innerHTML = associationItemsHTML;



  } catch (error) {
      // console.error("Error fetching Association:", error);
  }
}

// Call the fetchAssociation function to initiate the fetching process
// fetchAssociation();






  
// async function fetchTestimonial() {
//   console.log("Fetching Testimonial");
//   const testimonialContainer = document.getElementById("testimonial-part");

//   try {
//       const apiUrl =  `${BASE_URL}/website/testimonial/get-all-testimonials/65d0951a52fd1189b6d9f8df`;
//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//           const statusText = response.statusText || "Unknown error";
//           throw new Error(
//               `Failed to fetch Testimonial: ${response.status} ${statusText}`
//           );
//       }

//       const data = await response.json();
//       console.log("testimonial data:", data);    




//           // const testimonialContainer = document.getElementById(testimonial-part) ;
          
          
//           const testimonialItemHTML = (data?.data || [])
//           .map( 
//             (item) =>`
//           <div class="news">
//           <div class="reviews">
//                     <div class="orange-reviews">

//                     </div>
//                     <div class="tilted-reviews">
//                         <img src="${imageBASE_URL}/${item?.image}" alt="${item?.name}" >
//                     </div>
//                 </div>

//                 <div class="rakesh">
//                     <img src="quote-2.svg" alt="">
//                     <h3>"${item?.review}"</h3>

//                     <h4>"${item?.name}"</h4>
//                     <p>"${item?.companyProfile}"</p>
//                 </div>
//             </div>
                
//           `)
//           .join("");
//           testimonialContainer.innerHTML = testimonialItemHTML;
      
//   } catch (error) {
//       // console.error("Error fetching testimonial:", error);

//   }
// }




// /* .testimonial-container open */
// const testimonialpages = document.querySelectorAll(".testimonialpage");
// const prevBTN = document.querySelector(".prev-page");
// const nextBTN = document.querySelector(".next-page");

// let slideIndex = 0;
// testimonialpages[slideIndex].classList.add('active'); // Corrected class addition

// prevBTN.addEventListener('click', prevPage);
// nextBTN.addEventListener('click', nextPage);

// function prevPage() {
//   testimonialpages[slideIndex].classList.remove('active');
  
//   slideIndex = (slideIndex === 0) ? testimonialpages.length - 1 : slideIndex - 1; // Updated condition for previous slide
//   testimonialpages[slideIndex].classList.add('active');
//   testimonialpages.style.transform = `translateX(-${slideIndex * 100}%)`; // Corrected string interpolation
// }

// function nextPage() {
//   testimonialpages[slideIndex].classList.remove('active');

//   slideIndex = (slideIndex === testimonialpages.length - 1) ? 0 : slideIndex + 1;
//   testimonialpages[slideIndex].classList.add('active');
//   testimonialpages.style.transform = `translateX(-${slideIndex * 100}%)`;
// }


// /* .testimonial-container close */



async function fetchBlog() {
  console.log("Fetching Blog");
  const blogContainer = document.getElementById("blog-container");

  try {
      const websiteID = WebsiteID();

      const apiUrl =  `${BASE_URL}/website/post/get-all-posts/65d0951a52fd1189b6d9f8df`;
      const response = await fetch(apiUrl);


      if (!response.ok) {
          const statusText = response.statusText || "Unknown error";
          throw new Error(
              `Failed to fetch Blog: ${response.status} ${statusText}`
          );
      }

      const data = await response.json();
              console.log("blog data:", data);    


  
      // Clear the existing content of the gallery container
      blogContainer.innerHTML = '';


      // Iterate over each blog item and create HTML markup
      data.data.forEach(item => {
         

          const blogItem = document.createElement('div');
          blogItem.classList.add('grid-blog');
          blogItem.innerHTML = `
            <div class="item-blog">
              <a href=""><img src="${getIMAGE_BASE_NAME(item?.banner?.image)}" alt="${item.title}"></a> 
              <h4>${item?.updatedAt}</h4>
              <p>${item?.title}
            </p>
            <button class="blog-btn">Read More</button>
            </div>

          `;
          blogContainer.appendChild(blogItem);
      });
  } catch (error) {
      // console.error("Error fetching Blog:", error);

  }
}






