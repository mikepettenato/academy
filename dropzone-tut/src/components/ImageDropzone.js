import React, {useCallback, useState} from 'react'
import {useDropzone} from "react-dropzone";

import './ImageDropzone.css'

const ImageDropzone = () => {

    const [image, setImage] = useState({})

    // creates a callback function to be used as a parameter
    // to the onDropzone hook.  An optimization that can be
    // made here is to pass the dependencies to teh useCallback
    // hook.  This will memoize the onDrop lamda function and
    // only return a different one in the event a dependency has
    // changed.  This will be more optimal for component rendering.
    const onDrop = useCallback(uploadedFiles => {

        // Read the files that have been dropped
        uploadedFiles.forEach(file => {
            const reader = new FileReader()

            reader.onabort = () =>
                console.log('file reader aborted')

            reader.onerror = () =>
                console.log('file reader failed')

            reader.onload = () => {
                const dataUrl = reader.result
                console.log(dataUrl)
                setImage({
                    url: dataUrl
                })
            }

            // Read the file as a data url
            reader.readAsDataURL(file)
        })
    }, [])

    // getRootProps - properties that will be set on the parent
    //                element of the dropzone input element.
    //                The parent element controls the width
    //                and height of the dropzone
    // getInputProps - properties that will be set on the input
    //                 element.  These properties are needed
    //                 to support the dropzone's click and
    //                 drag events.
    const {getRootProps, getInputProps,
        acceptedFiles, rejectedFiles} =
        useDropzone({
            onDrop,
            accept: 'image/*',
            multiple: false
        })

    const isAcceptedFiles = acceptedFiles.length > 0
    const isRejectedFiles = rejectedFiles.length > 0
    return (
            <div>
                <div {...getRootProps()}
                     className="dropzone">
                    {/*The dropzone input div*/}
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop an image here,
                        or click to select image files</p>
                </div>
                <div className="image">
                    {isRejectedFiles &&
                    <h3>This is not an image!</h3>}
                    {isAcceptedFiles &&
                    <img src={image.url}
                         alt="image dropzone"></img>}
                </div>
            </div>
    )

}

export default ImageDropzone
