import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import SearchForm from "../components/SearchForm/SearchForm";
import List from "../components/List/List";
import React from "react";

const Home = () => {
    return (
        <Container>
            <Hero/>
            <SearchForm/>
            <List/>
        </Container>
    )
};


export default Home;