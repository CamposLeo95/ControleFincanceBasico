import './Cards.css'

const Cards = () => {
  return (
    <div className="container">
        <div className="box_cards">
            <div className="card">
                <h1>Pendente</h1>
                <span>$0,00</span>
            </div>
            <div className="card">
                <h1>Recebido</h1>
                <span>$0,00</span>
            </div>
            <div className="card">
                <h1>Total</h1>
                <span>$0,00</span>
            </div>
        </div>
    </div>
  )
}

export default Cards;