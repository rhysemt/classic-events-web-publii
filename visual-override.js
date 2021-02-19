/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
    let output = '';
    
    if (
        params.fontNormalWeight !== '300' || 
        params.fontBoldWeight !== '600' || 
        params.primaryColor !== '#FF427F' || 
        params.fontHeadignsWeight !== '900' ||
        params.fontHeadingsTransform !== 'upprcase') {
        output += `
        :root {
           --font-weight-normal: ${params.fontNormalWeight}; 
           --font-weight-bold:   ${params.fontBoldWeight}; 
           --headings-weight:    ${params.fontHeadignsWeight};
           --headings-transform: ${params.fontHeadingsTransform};        
           --color:              ${params.primaryColor};  
           --color-rgb:          ${params.primaryColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')};          
         }`;
    }    
  
    if (params.galleryItemGap !== '0.28333rem') {
        output += `
        .gallery {
               margin: calc(1.7rem + 1vw) -${params.galleryItemGap};
        }
        .gallery__item {
               padding: ${params.galleryItemGap};
        }
        
        .gallery__item a::after {
               bottom: ${params.galleryItemGap};
               height: calc(100% - ${params.galleryItemGap} * 2);              
               left: ${params.galleryItemGap};
               right: ${params.galleryItemGap};
               top: ${params.galleryItemGap};
               width: calc(100% - ${params.galleryItemGap} * 2);  
        }`;
    }
    
    if(params.galleryZoom !== true) {
        output += `   
        .pswp--zoom-allowed .pswp__img {
            cursor: default !important  
        }`;    	 
    }

    if(params.lazyLoadEffect === 'fadein') {
        output += ` 
         img[loading] {
               opacity: 0;
         }

         img.is-loaded {
               opacity: 1;
               transition: opacity .6s cubic-bezier(.215,.61,.355,1), transform .2s ease-out!important; 
         }`;    	 
    } 
    return output;
}

module.exports = generateOverride;
