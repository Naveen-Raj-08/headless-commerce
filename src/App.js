import { gql } from '@apollo/client';
import { Sample } from './Components/Sample';

export default function App() {

  const PRODUCTS = gql`
  query getProducts{
  products(
    filter: {category_id: {eq: "3"}},
    pageSize: 100,
    currentPage: 1
  ) {
    total_count
    items {
      name
      sku
      thumbnail {
        url
        label
        position
        disabled
      }
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
        maximum_price {
          regular_price {
            value
            currency
          }
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
      }
    }
  }
}
`;

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <Sample product={PRODUCTS} />
    </div>
  );
}