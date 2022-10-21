import React, {useEffect} from 'react'

export default function ComponentWithSubscription() {
  useEffect(() => {
    console.log('ComponentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])


  const mouseMoveHandler = event => console.log(event)

  return (
    <div className='alert alert-danger'>
      Я дочерний компонент
    </div>
  )
}


