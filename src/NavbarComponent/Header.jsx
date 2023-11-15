import { Link } from 'react-router-dom'
import RoleNav from './RoleNav'
import logo from '../images/e_logo.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Header = () => {
  const [categories, setCategories] = useState([])

  const retrieveAllCategories = async () => {
    const response = await axios.get(
      'http://localhost:8080/api/category/fetch/all?start=0&count=12'
    )
    return response.data
  }

  useEffect(() => {
    const getAllCategories = async () => {
      const allCategories = await retrieveAllCategories()
      if (allCategories) {
        setCategories(allCategories.categories)
      }
    }

    getAllCategories()
  }, [])

  return (
    <div>
      <nav class="navbar  navbar-expand-lg custom-bg text-color">
        <div class="container-fluid text-color">
          <img
            src={logo}
            width="65"
            height="auto"
            class="d-inline-block align-top"
            alt=""
          />
          <Link to="/" class="navbar-brand">
            <i>
              <b className="text-color ms-2"> Shop</b>
            </i>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-color"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b> Shop By categories</b>
                </a>
                <ul class="dropdown-menu custom-bg text-color">
                  {categories.map((category) => {
                    return (
                      <li>
                        <Link
                          to={`/product/category/${category.id}/${category.name}`}
                          class="dropdown-item  text-center"
                        >
                          <b>{category.name}</b>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li class="nav-item">
                <Link to="/aboutus" class="nav-link active" aria-current="page">
                  <b className="text-color">About Us</b>
                </Link>
              </li>

              <li class="nav-item"></li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
