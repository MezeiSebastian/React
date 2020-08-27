import React from "react";
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-html-table';

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response =await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
  }

  renderTableData() {
    return this.state.person.map((person, index) => {
       const { id, name} = person //destructuring
       return (
          <Row key={id}>
             <Cell>{name}</Cell>
          </Row>
       )
    })
 }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

      

    return (
      <Table>
      <Header>
      <HeaderCell key="Name">Name</HeaderCell>
      </Header>
    <Body>
     {this.renderTableData()}
    </Body>
  </Table>
    );
  }
}
