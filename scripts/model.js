import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from "../classes/block";
import myImage from '../assets/ort.jpg'

const tempStr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum similique dolor consectetur ipsam repellat sed, voluptatem eos hic rem aliquid, sequi ad provident iure corrupti fugiat molestiae totam atque architecto.';

export const model = [
    new TitleBlock("Hello, Braude !"),
    new TextBlock (tempStr),
    new ColumnsBlock([tempStr, tempStr, tempStr]),
    new ImageBlock (myImage)
]



/**A function that represents our data. An array of blocks
const model = [ 
    {
        type: "title",
        data: "Hello, Braude !" 
    },
    {
        type: "text",
        data: tempStr, 
    },
    {
        type: "columns",
        data: [tempStr, tempStr, tempStr], //array  
    },
    {
        type: "image",
        data: "assets/ort.jpg", //img
    }

];*/ 



