import { useRef, useState } from "react"

const Imageview = () => {

const [imgFile, setImgFile] = useState();
const imgRef = useRef();

    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
        }
    }

    return  (
        <div>
            <input type="file" onChange={ saveImgFile } ref={ imgRef }/><br /><br />
            <img src={ imgFile } alt="" />
        </div>
    )
}

export default Imageview;