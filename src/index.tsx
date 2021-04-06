import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs';

createServer({
	models: {
		transaction: Model,
	},
	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelance de website',
					type: 'deposit',
					category: 'Dev',
					amount: 6000,
					createdAt: new Date('2021-02-13 09:20:00'),
				},
				{
					id: 2,
					title: 'Pedido Ifood',
					type: 'withdraw',
					category: 'Comida',
					amount: 150,
					createdAt: new Date('2021-02-13 09:50:00'),
				}
			],
		})
	},
	routes() {
		this.namespace = 'api'; 

		this.get('/transactions', ()=> {
			return this.schema.all('transaction');
		})

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody)
			return schema.create('transaction', data)
		})
	}
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// layoult link:
// https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy)