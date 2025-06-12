import React from 'react';
function Rightsection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className='container'>
        <div className='row'>
            
            <div className='col-6 p-5 mt-5 '>
               <h1>{productName}</h1>
               <p>{productDescription}</p>
               <div>
               <a href={tryDemo}>Try Demo</a>
               <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
               </div>
               <div>
               <a href={googlePlay}><img src="media\images\images\googlePlayBadge.svg"/></a>
               <a href={appStore} ><img src="media\images\images\appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
               </div>
              
            </div>
            <div className='col-6' style={{padding:"10px"}}>
        <img src={imageURL} alt='Console'/>
            </div>
        </div>
    </div>
     );
}

export default Rightsection;