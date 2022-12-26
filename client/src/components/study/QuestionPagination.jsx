import { NavLink, Link } from "react-router-dom"

import "./questions.css"

const QuestionPagination = (props) => {
  const page = parseInt(props.page)
  const previousPage = page - 1 > 1 ? page - 1 : 1
  const nextPage = page + 1 > 20 ? 20 : page + 1

  return (
    <ul className="pagination-list">
      <li>
        <Link to="/questions/pages/1">{"<<"}</Link>
      </li>

      <li>
        <Link to={`/questions/pages/${previousPage}`}>{"<"}</Link>
      </li>

      {page - 2 > 0 && (
        <li>
          <Link to={`/questions/pages/${page - 2}`}>{page - 2}</Link>
        </li>
      )}

      {page - 1 > 0 && (
        <li>
          <Link to={`/questions/pages/${page - 1}`}>{page - 1}</Link>
        </li>
      )}

      <li>
        <NavLink to={`/questions/pages/${page}`}>{page}</NavLink>
      </li>

      {page + 1 < 20 && (
        <li>
          <Link to={`/questions/pages/${page + 1}`}>{page + 1}</Link>
        </li>
      )}

      {page + 2 < 20 && (
        <li>
          <Link to={`/questions/pages/${page + 2}`}>{page + 2}</Link>
        </li>
      )}

      <li>
        <Link to={`/questions/pages/${nextPage}`}>{">"}</Link>
      </li>

      <li>
        <Link to={"/questions/pages/20"}>{">>"}</Link>
      </li>
    </ul>
  )
}

export default QuestionPagination
