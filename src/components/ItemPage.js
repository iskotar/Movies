import React from 'react';
import { connect } from 'react-redux'

function ItemPage({item}) {

  return (
    <>
      {item && item.Plot}
    </>
  );
}

const mapStateToProps = (state) => ({
  item: state.currentItem
})

export default connect(mapStateToProps)(ItemPage);
