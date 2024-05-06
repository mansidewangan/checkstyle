// const fetchBlogDetailsEndPoint = (ProjectId)=>`${BASE_URL}/website/post/get-all-posts/${ProjectId}`



// async function handleFetchBlogDetails(){
//     try{
//         const websiteID = WebsiteID();
//         const urlParams = new URLSearchParams(window.location.search);
//         const blogSlug = urlParams.get("slug");

//         if (websiteID && blogSlug){
//             const response = await fetch(
//                 fetchBlogDetailsEndPoint(websiteID,blogSlug),
//                 {
//                     method: FETCH_METHODS.GET,
//                 }
//             );
//             if (!response.ok){
//                 throw new Error(`HTTP error! Status: ${response.status}`);

//             }
//             const data = await response.json();
//             const blogContainer = document.getElementById("grid-blog");
//             const blogDetails = data?.data;
            
//             const blogDetailImageItem = blogDetails?.
//         }
//     }
// }