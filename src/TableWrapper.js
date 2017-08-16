import React, { Component } from 'react';
import ReactTable from 'react-table';

function onButtonClick(e) {
  const row = e.row;
  if (row) {
    window.alert(`You clicked on the '${row.make} ${row.model}'`);
  }
}

class TableWrapper extends Component {
  render() {
    const data = [
      {
        make: 'Ford',
        model: 'Ranger',
        color: 'green',
        id: 0,
      },
      {
        make: 'Toyota',
        model: 'Tacoma',
        color: 'blue',
        id: 1,
      },
      {
        make: 'Nissan',
        model: 'Frontier',
        color: 'white',
        id: 2,
      },
    ];

    const columns = [
      {
        Header: 'Make',
        accessor: 'make',
      },
      {
        Header: 'Modal',
        accessor: 'model',
      },
      {
        Header: 'Color',
        accessor: 'color',
      },
      {
        Header: 'Actions',
        Cell: row => <button onClick={() => onButtonClick(row)}>Edit</button>
      }
    ];

    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
        />
      </div>
    );
  }
}

export default TableWrapper;
