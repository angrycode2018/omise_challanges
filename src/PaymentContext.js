import React from 'react'
import JsonServer from './services/JsonServer'


const api = new JsonServer()

const getData = async() => await api.get('payments')

const PaymentContext = React.createContext(getData())

export default PaymentContext