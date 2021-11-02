import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap : wrap;
`;

const ImageContainer = styled.div`
    height : 40vh;
    margin: 5px;
    background-color : white;
    padding : 5px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    img {
        max-width:100%;
        max-height : 100%;
    }
`;

const Photos = () => {

    const { state } = useLocation(),
        { photos } = state;

    console.log(photos);

    return (<div>
        <h3>Photos</h3>
        <Container>
            {photos.map(photo => (<div key={photo.id}>
                <ImageContainer>
                    <img src={`${photo.url}`} alt="" />
                </ImageContainer>
            </div>))}
        </Container>
    </div>);
}

export default Photos;