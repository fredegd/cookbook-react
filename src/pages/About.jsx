import { useEffect, useState } from "react";
import { client } from "../client";
import { Container, Row } from "react-bootstrap";
import PersonCard from "../components/PersonCard";

export default function About() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "cookbookAuthor",
      })
      .then((response) => {
        // console.log(response.items, "huhu")
        setAuthors(response.items);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(authors);

 return (
    <Container fluid>
      <Row className="person-container df-flex-md-row justify-content-center gap-5 py-5">
        {authors.map((author) => {
          return (
            <PersonCard title={author.fields.authorName} body={author.fields.authorDescription} imgSrc={author.fields.authorImg.fields.file.url} />
          );
        })}
      </Row>
    </Container>
  );
}
