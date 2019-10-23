import React, { Component } from 'react';
import { Card } from './card.js';
import uuid from 'uuid/v1'
import './Rating.css';

class Rating extends Component {
    constructor(props) {
        super(props)
        this.state={
            photos:
                [
                ]
        }
    }

    componentWillMount() {
        this.getData()
    }

    getData() {
        this.setState({
            photos:[
                {
                    id: uuid(),
                    name: "Street 1",
                    image: "null",
                    description: "a trashcan",
                    starsSelected: 0,
                },
                {
                    id: uuid(),
                    name: "Street 2",
                    image: "null",
                    description: "two trashcans",
                    starsSelected: 0,
                },
                {
                    id: uuid(),
                    name: "Street 3",
                    image: "null",
                    description: "three trashcans",
                    starsSelected: 0,
                },
            ]
        });
    }

    OnChange(id, starsSelected) {
        this.setState(
            [...this.state.photos].map((photo) => {
                if(photo.id === id) {
                    photo.starsSelected = starsSelected
                }
            })
        );
    }

    render() {
        return (
            <div className="main-body">
                {[...this.state.photos].map((photo, index) => {
                    let name = photo.name
                    let image = photo.image
                    let description = photo.description
                    let starsSelected = photo.starsSelected
                    let id = photo.id
                    return(
                        <Card
                            key={index}
                            name={name}
                            image={image}
                            starsSelected={starsSelected}
                            description={description}
                            id={id}
                            change={(id, starsSelected) => this.OnChange(id, starsSelected)}
                        />
                    )
                })}
            </div>
        );
    }
}
export default Rating;
