import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { getImages } from "./gallerySlice";

const Wrapper = styled.div`
    background-color: #fff;

    h3{
        font-size: 48px;
        text-align: center;
        color: #bf4f74;
    }

    p {
        font-size: 16px;
        color: #888;
        font-weight: semi-bold;
        margin-bottom: 24px;
        text-align: center;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 28px;
        list-style-type: none;

        @media (min-width: 740px) and (max-width: 1023px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 739px) {
            grid-template-columns: 1fr;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    }

`

function App() {
    const images = useSelector(state => state.gallery.images);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getImages())
    }, [])

    return (
        <Wrapper className='gallery'>
            <h3 className='gallery__title'>
                Gallery Title
            </h3>
            <p className='gallery__desc'>
                this is gallery description
            </p>
            <ul className='gallery__images'>
                {photos.map((photo) => (
                    <li className='gallery__image' key={photo.id}>
                        <img
                            src={photo.download_url}
                            alt='photo__item'
                        />
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}

export default App;
