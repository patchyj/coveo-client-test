/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCatalogItems } from '../../../../flux/actions/catalogActions';
import CatalogContainer from './CatalogContainer';

const mapStateToProps = state => ({
  products: state.catalog.products,
  loading: state.catalog.loading
});

const mapDispatchToProps = dispatch => ({
  getCatalogItems: (query, api, options = {}) =>
    dispatch(getCatalogItems({ query, api, options }))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CatalogContainer)
);
