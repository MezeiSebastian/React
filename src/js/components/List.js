import React from "react";
import { connect } from "react-redux";
import Table, {
  Body,
  Cell,
  Row,
} from 'terra-html-table';

const mapStateToProps = state => {
  return { 
    id: state.id,
    articles: state.articles };
};

const ConnectedList = ({ articles,id }) => (
  <Table>
   <Body>
    {articles.map(el => (
      <Row>
      <Cell key={el.id}>{el.title}</Cell>
      </Row>
    ))}
    
    </Body>
  </Table>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
