import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCatalogItems } from '../../../flux/actions/catalogActions';
import CatalogContainer from './CatalogContainer';

const mapStateToProps = state => ({
  products: state.catalog.products
});

const mapDispatchToProps = dispatch => ({
  getCatalogItems: query => dispatch(getCatalogItems({ query }))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CatalogContainer)
);
