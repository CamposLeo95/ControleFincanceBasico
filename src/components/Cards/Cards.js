import './Cards.css'

const Cards = ({pendente, recebido, total}) => {
  return (
    <div className="container">
        <div className="box_cards">
            <div className="card">
                <h1>Pendente</h1>
                <span>R$ {pendente}</span>
            </div>
            <div className="card">
                <h1>Recebido</h1>
                <span>R$ {recebido}</span>
            </div>
            <div className="card">
                <h1>Total</h1>
                <span>R$ {total}</span>
            </div>
        </div>
    </div>
  )
}

export default Cards;