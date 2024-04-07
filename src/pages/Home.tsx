import invitations from '../lib/data.json'
import NotFound from './404'
import Header from '../components/Header'

const Home = () => {
    const urlSearch = new URLSearchParams(window.location.search)
    const name = urlSearch.get('name')

    if (!name) return <NotFound />
    
    if (!invitations.some(people => people.name === name)) return (
        <div className="">You has not invited!</div>
    )
    return (
        <Header></Header>
    )
    
}

export default Home
