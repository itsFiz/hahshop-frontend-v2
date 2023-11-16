import { Link } from 'react-router-dom'
import CategoryNavigator from '../CategoryComponent/CategoryNavigator'

const ProductCard = (product) => {
  const descriptionToShow = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description
    } else {
      const truncatedText = description.substring(0, maxLength)
      return truncatedText + '...'
    }
  }

  return (
    <div className="col">
      <div class="card product-card rounded-card custom-bg h-100 shadow-lg glass-product">
        <img
          src={'http://localhost:8080/api/product/' + product.item.image1}
          class="card-img-top img-fluid rounded"
          alt="img"
          style={{
            maxHeight: '300px', // Adjust the maximum height as needed
            width: 'auto',
            margin: '0 auto',
          }}
        />

        <div class="card-body text-color">
          <h5 style={{ fontSize: '14px' }}>
            Category:{' '}
            <CategoryNavigator
              item={{
                id: product.item.category.id,
                name: product.item.category.name,
              }}
            />
          </h5>
          <h5 class="card-title d-flex justify-content-between">
            <div>
              <b>{product.item.name}</b>
            </div>
          </h5>
          <h5
            className="card-text"
            style={{ fontSize: '15px', fontWeight: 'normal' }}
          >
            {descriptionToShow(product.item.description, 50)}
          </h5>
        </div>
        <div class="card-footer">
          <div className="d-flex justify-content-between mt-2">
            <Link
              to={`/product/${product.item.id}/category/${product.item.category.id}`}
              className="btn bg-color custom-bg-text"
            >
              Add to Cart
            </Link>

            <div className="text-color">
              <p>
                <span>
                  <h4 style={{ fontSize: '20px', color: '#FFF' }}>
                    RM {product.item.price}
                  </h4>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
