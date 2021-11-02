
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled  from 'styled-components';
import { Wrapper, Card } from './CommonComponents';

const Column = styled.div`
    /* display : flex;
    flex-direction */
`;

const SearchBar = styled.input`
    padding : 10px 20px;
    /* width: 100%; */
    margin : 10px;
    border-radius: 3px;
    border: solid 1px black;
    &::focus{
        outline: none;
    }
`;


const UserCard = (props) => {

    const { id, name, username, email } = props;

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then(res => res.json())
            .then(data => setAlbums(data))
            .catch(err => alert(err.message))
    }, [])

    return <Card>
        <Link to={{
            pathname : `/albums/${id}`,
            state : {albums : albums}
        }} >{name}</Link>
        <p>{username}</p>
        <p>{email}</p>
        <p>Albums : {albums.length}</p>
    </Card>

}


const Home = () => {

    const [users, setUsers] = useState([]);

    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => alert(err.message))

    }, []);

    const searchUsers = (e) => {
        const value = e.target.value.toLowerCase();
        const results = users.filter(user => user.name.toLowerCase().includes(value));
        console.log(results);
        setSearchResults(results);
    }

    const filteredValues = () => searchResults.length === 0 ? users : searchResults;

    return <Wrapper>
        <h3>Home</h3>
        <SearchBar type="text" onChange={(e) => searchUsers(e)} placeholder="Search Users"/>
        <Column>
            {filteredValues().map(user => (<UserCard id={user.id} name={user.name} username={user.username} key={user.id} />))}
        </Column>
    </Wrapper>;
}

export default Home;


