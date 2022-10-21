import React, {useState, useEffect} from 'react'
import ComponentWithSubscription from "./components/ComponentWithSubscription";

function App() {
  const [source, setSource] = useState('people')
  const [toggleColor, setToggleColor] = useState(true)
  const [data, setData] = useState([])
  const [showSubComponent, setShowSubComponent] = useState(true)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   console.log('render')
  // })
  //
  // useEffect(() => {
  //   console.log('ComponentDidMount')
  // }, [])

  useEffect(() => {
    console.log('source changed')
    setLoading(true)
    fetch(`https://swapi.dev/api/${source}`)
      .then(response => response.json())
      .then(json => setData(json.results))
      .then(() => setLoading(false))

    return () => {
      console.log('clean type')
    }
  }, [source])

  return (
    <div className='h-100 container'>
      <h1 style={{color: toggleColor ? 'black' : 'red'}}>Источник: {source}</h1>
      <div className='h-50 row'>
        <div className='col-6'>
          <div className='me-4 btn-group'>
            <button className='btn btn-primary' onClick={() => setSource('people')}>Персонажи</button>
            <button className='btn btn-primary' onClick={() => setSource('starships')}>Корабли</button>
            <button className='btn btn-primary' onClick={() => setSource('planets')}>Планеты</button>
          </div>
          <button className='btn btn-success' onClick={() => setToggleColor(!toggleColor)}>Сменить цвет</button>

          <div className='h-100 row'>
            {
              loading ?

                <div className="h-100 d-flex justify-content-center align-items-center">
                  <div className='spinner-border'>
                  </div>
                </div>

                :
                <ul className='mt-3 list-group'>
                  {data.map(item => <li className='list-group-item' key={item.name}>{item.name}</li>)}
                </ul>
            }
          </div>
        </div>

        <div className='col-6'>
          <button className='btn btn-primary ml-1'
                  onClick={() => setShowSubComponent(!showSubComponent)}>{showSubComponent ? 'Скрыть' : 'Показать'} дочерний
            компонент
          </button>
          {showSubComponent && <ComponentWithSubscription/>}
        </div>
      </div>
    </div>
  )
}

export default App
