import GalleryItem from "./GalleryItem";
import { useContext } from "react";
import {DataContext} from '../context/DataContext'


 function Gallery() {
    const data = useContext(DataContext)
    const myData = data.result.read()

    const display = myData.map((item, index) => {
        return(
            <GalleryItem item={item} key={index} />
        )
    });


// const Gallery = (props) => {
//     const data = props.data.result.read()

//     const display = data.map((item, index) => {
//         return (
//             <GalleryItem item={item} key={index} />
//         )
//     })

    return (
        <div>
            {display}
        </div>
    )
}


export default Gallery
