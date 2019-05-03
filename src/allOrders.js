import bearDetailsApi from './bearDetails-api.js';
import makeOrderRow from './make-order-row.js';

const tbody = document.getElementById('allOrders');

const allOrders = bearDetailsApi.getAll();

for(let i = 0; i < allOrders.length; i++) {
    const order = allOrders[i];
    const tr = makeOrderRow(order);
    tbody.appendChild(tr);
}