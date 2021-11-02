import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Wrapper, Card } from "./CommonComponents";

const Album = (props) => {

    const { id, title } = props;

    const [photos, setPhotos] = useState([]);

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then(res => res.json())
            .then(data => setPhotos(data))
            .catch(err => alert(err.message))

    }, []);

    return <Card>
        <Link to={{
            pathname : `/photos/${id}`,
            state : { photos }
        }}>
            <h5>{title}</h5>
        </Link>
        <p>{photos.length}</p>
    </Card>
}


const Albums = (props) => {

    /* Here 'id' can be fetched from props and used to fetch albums making a request but this triggers 
    additional HTTP requests which slow downs the app. So instead I used react-router-dom api to 
    pass state from one route to another. */

    const location = useLocation();

    const { state } = location;

    const { albums } = state;

    return (
        <Wrapper>
            <h3>Albums</h3>
            {albums.map(album => (<Album key={album.id} id={album.id} title={album.title} />))}
        </Wrapper>
    );
}

export default Albums;
