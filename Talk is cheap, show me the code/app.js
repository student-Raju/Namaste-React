import React from "react";
import ReactDOM from "react-dom";

/* Headers
-Logo
-NavItems
Body
-Search
-Restaurant Container
-Restaurant Card
  -Image
  -Name of the Restaurant
  -Star Rating
  -Cuisine
  -Delivery Time
Footer
-Copyright
-Links
-Address
-Contact */
const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo"
                 src="https://marketplace.canva.com/EAFzZd9frfk/1/0/1600w/canva-colorful-illustrative-restaurant-master-chef-logo-4rQv_oY-CF8.jpg"/>
            </div>
       <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
       </div>
        </div>
    );
};
const RestaurantCard=(props)=>{
 const {resData}=props;
 const{
    imageId,
 }=resData;
 const{text}=resData.action
 
return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
       <img className="res-logo" alt="res-logo"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId}/>
     
        <h3>{text}</h3>
        <h4>4.4 Stars</h4>
        <h4>38 Minutes</h4>
    </div>
)
}
 const resList=[
    {
      "id": "750592",
      "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
        "text": "Biryani",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for biryani",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750580",
      "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
        "text": "pizzas",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for pizza",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "762797",
      "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
        "text": "Burgers",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for burger",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750582",
      "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83645?collection_id=83645&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
        "text": "North Indian",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for north indian",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian&search_context=northindian",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750223",
      "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
        "text": "Rolls",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for roll",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750584",
      "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83646?collection_id=83646&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
        "text": "South Indian",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for south indian",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian&search_context=southindian",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750588",
      "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
        "text": "Chinese",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for chinese",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750597",
      "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
        "text": "Ice Cream",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for icecream",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "749774",
      "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
        "text": "Noodles",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for noodles",
        "altTextCta": "open"
      },
      "entityId": "80464",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750636",
      "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
        "text": "Kebabs",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for kebabs",
        "altTextCta": "open"
      },
      "entityId": "80452",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750217",
      "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
        "text": "Pav Bhaji",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for pav bhaji",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750249",
      "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
        "text": "Shawarma",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for shawarma",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750572",
      "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
        "text": "Pure Veg",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for veg",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "749874",
      "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
        "text": "Cakes",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for cakes",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750207",
      "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
        "text": "Pasta",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for pasta",
        "altTextCta": "open"
      },
      "entityId": "80480",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "749769",
      "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
        "text": "Momos",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for momos",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750203",
      "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
        "text": "Paratha",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for paratha",
        "altTextCta": "open"
      },
      "entityId": "80476",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750132",
      "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
        "text": "Dosa",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for dosa",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750226",
      "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
        "text": "Salad",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for salad",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750644",
      "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
        "text": "Idli",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for idly",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
      "frequencyCapping": {
        
      }
    }
  ]
const Body=()=>{
    return(
        <div className="body">
        <div className="search">search</div>
        
        <div className="res-container">
       
       {resList.map((restaurant)=>(
        <RestaurantCard key={restaurant.id}resData={ restaurant} />     
       ))}
            </div>  
        </div>

    );
}

const AppLayout=()=>{
    return (
        <div className="app">
         <Header/>
         <Body/>
        </div>
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)