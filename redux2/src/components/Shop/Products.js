import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    description: "my First book i ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "my second book",
    description: "my second book i ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
