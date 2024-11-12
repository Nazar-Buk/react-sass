import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

//import "../styles/pages/_products.scss"; // підключив стилі які не є в main.scss,
//але будь уважний бо той клас може читатися в інших файлах

// ТАК РОБИ В ТОМУ ВИПАДКУ ЯКЩО ТИ НЕ ПІДКЛЮЧИВ СТИЛІ ДО main.scss

const Products = () => {
  return (
    <div>
      <b className="product-title">Products page</b>
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
};

export default Products;
