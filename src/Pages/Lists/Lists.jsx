import React from 'react'
import { Link } from 'react-router-dom'

import './Lists.scss'

function Lists() {
    const [users, setUsers] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        ;(async () => {
            const res = await fetch('https://reqres.in/api/users?page=2')

            const data = await res.json()

            if (data?.data) {
                setUsers([...data?.data])
                setLoading(false)
            }
        })()
    }, [])

    return (
        <section className="lists">
            <div className="container">
                <h1 className="lists__heading">Lists</h1>

                <ul className="lists-list ">
                    {users?.length > 0 &&
                        users.map((user) => (
                            <li
                                className="lists-item list-group-item"
                                key={user.id}
                            >
                                <Link className="lists-link" to={'#'}>
                                    <strong>
                                        {user.first_name + ' ' + user.last_name}
                                    </strong>
                                    <img
                                        className="lists-image img-fluid rounded"
                                        src={user.avatar}
                                        alt={
                                            user.first_name +
                                            ' ' +
                                            user.last_name +
                                            "'s avatar"
                                        }
                                        width={100}
                                        height={100}
                                    />
                                </Link>
                            </li>
                        ))}
                </ul>

                {loading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border " role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Lists
