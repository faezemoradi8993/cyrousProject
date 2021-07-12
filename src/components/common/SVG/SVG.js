import React from 'react';

const getSVG = name => {
    switch (name) {
        case 'about':
            return(
               
    <path fill="#b2b7d2" d="M24.75 8A16.75 16.75 0 1 0 41.5 24.75 16.753 16.753 0 0 0 24.75 8zm0 7.429a2.837 2.837 0 1 1-2.837 2.837 2.837 2.837 0 0 1 2.837-2.837zm3.782 17.155a.811.811 0 0 1-.81.81h-5.944a.811.811 0 0 1-.81-.81v-1.62a.811.811 0 0 1 .81-.81h.81v-4.323h-.81a.811.811 0 0 1-.81-.81V23.4a.811.811 0 0 1 .81-.81H26.1a.811.811 0 0 1 .81.81v6.754h.81a.811.811 0 0 1 .81.81z" transform="translate(-8 -8)"/>

            );

        case 'rectangle':
            return(
             
              
    <rect id="Rectangle_714" data-name="Rectangle 714" width="48" height="48" fill="none"/>
 
              
            );

        default:
            return <path />
    }
}

const SVG = ({
    name = ' ',
    style = { },
    fill = '#000000',
    viewBox = ' ',
    width = ' ',
    className = ' ',
    id = ' ',
    stroke = ' ',

}) => (
    <svg
        width={width}
        style={style}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id={id}
     
    >
        {getSVG(name)}
    </svg>
);
export default SVG;