import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import SaveBtn from "../SaveBtn";
import "./style.css";

// Search Results List
export function SearchResultsList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// Render search result item from API call
export class SearchResultsListItem extends React.Component {
  render() {
    return (
      <li>
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>
                {this.props.title}
                <span> by {this.props.authors.join(", ")}</span>
              </h3>
              <p>
                {this.props.description}{" "}
              </p>
              <a
                  target="_blank"
                  href={this.props.link}
                  rel="noopener noreferrer"
                >
                      View Book
                </a>
            </Col>
            <Col size="xs-1 sm-1">
              <SaveBtn
                disabled={!this.props.title}
                authors={
                  this.props.authors
                    ? this.props.authors
                    : ["No Author Available"]
                }
                title={this.props.title}
                description={
                  this.props.description
                    ? this.props.description
                    : "No Description Available"
                }
                link={this.props.link}
                thumbnail={this.props.thumbnail ? this.props.thumbnail : "#"}
              >
                Save Book
              </SaveBtn>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }
}
