import React from 'react'
import styled from 'styled-components';

const PostModal = (props) => {
    return (
        <Container>
            PostMOdal
        </Container>
    )
};

const Container = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: 999;
color: black;
background-color: rgba(0, 0, 0, 0.8);
`;

export default PostModal
