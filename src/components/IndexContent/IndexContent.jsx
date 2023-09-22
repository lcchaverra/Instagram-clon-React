import Histories from "../histories/Histories"
import NewsContainer from "./NewsContainer"

const IndexContent = () => {
  return (
    <>
        <main className="index-content-container">
            <Histories/>
            <NewsContainer/>
        </main>
    </>
  )
}

export default IndexContent