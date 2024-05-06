const BASE_URL = "https://api.webbuilder.technolitics.com/api/v1/website-builder";
const WEBSITE_UID="PRJ00001"; 


const  WEBSITE_DATA_KEY = "websiteData";
const WEBSITE_ID_KEY = "websiteProjectId";

const FETCH_METHODS ={
    GET:"GET",
    POST:"POST",
    PUT:"PUT",
    DELETE:"DELETE"
}

const FETCH_WEBSITE_DETAILS_END_POINT = `${BASE_URL}/website/auth/get-website-by-uid/${WEBSITE_UID}`;

// fetch the website details

async function fetchWebsiteDetails(){
    try {
        const response = await fetch(FETCH_WEBSITE_DETAILS_END_POINT,{
            method: FETCH_METHODS.GET,
        });

        if(!response.ok){
            throw new Error('HTTP error! Status: ${response.staus}');
        }
        const data = await response.json();
        if (data?.data){
            // store the website Detail in session storage 
            sessionStorage.setItem(WEBSITE_DATA_KEY, JSON.stringify(data?.data));
        

            // Handle firther  processing here if needed

            console.log('Website details fetch successfully:', data?.data);
        } else{
            throw new Error ('Website details not found in response data');
        }

        } catch(error){
            // console.error('Error fetching website details:',error.message);
        }
    }
    fetchWebsiteDetails();