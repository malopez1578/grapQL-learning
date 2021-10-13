import { gql, useQuery } from '@apollo/client'

function App() {
  const EXCHANGE_RATES = gql`
    query {
      characters(page: 2, filter: { name: "rick" }) {
        info {
          count
        }
        results {
          name
        }
      }
      location(id: 1) {
        id
      }
      episodesByIds(ids: [1, 2]) {
        id
      }
    }
  `
  const { loading, error, data } = useQuery(EXCHANGE_RATES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)

  return <div> </div>
}

export default App
