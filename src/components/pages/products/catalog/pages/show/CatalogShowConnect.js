/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CatalogShow from './CatalogShow';

const mapStateToProps = state => ({
  selected: state.catalog.selected
});

export default withRouter(connect(mapStateToProps)(CatalogShow));
