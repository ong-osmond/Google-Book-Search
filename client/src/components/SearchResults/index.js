import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css"


// Search Results List
export function SearchResultsList({children}) {
  return (
    <ul className="list-group">{children}</ul>
    );
}

  // Render search result item from API call
export class SearchResultsListItem extends React.Component{

    render(){
     return (
      <li>
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{this.props.title}<span> by {this.props.authors.join(", ")}
              </span></h3>
              <p>
                {this.props.description}
              </p>
              <a
                target="_blank"
                href={this.props.link}
                rel="noopener noreferrer"
              >
                View Book
              </a>
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }