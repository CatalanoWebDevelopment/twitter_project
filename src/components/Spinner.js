import React from 'react'
import { Container } from 'reactstrap'

export default function Spinner() {
    return (
        <Container className="text-center">
            <i className="fas fa-spinner fa-pulse no_results_spinner"></i>
            <p>No results found, please either search for something or modify your search query.</p>
        </Container>
    )
};