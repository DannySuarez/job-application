import bearDetailsApi from './bearDetails-api.js';

const tbody = document.getElementById('allOrders');

const allOrders = bearDetailsApi.getAll();

for(let i = 0; i < allOrders.length; i++) {
    const order = allOrders[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');

    const link = document.createElement('a');

    const searchParams = new URLSearchParams();

    searchParams.set('name', order.name);

    link.href = 'orders.html?' + searchParams.toString();

    link.textContent = order.name;
    nameCell.appendChild(link);
    tr.appendChild(nameCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = order.age;
    tr.appendChild(ageCell);

    const accessoriesCell = document.createElement('td');
    let accessoriesList = '';
    if(order.accessories) {
        accessoriesList = order.accessories.join(', ');
    }
    accessoriesCell.textContent = accessoriesList;
    tr.appendChild(accessoriesCell);

    const moodCell = document.createElement('td');
    moodCell.textContent = order.mood;
    tr.appendChild(moodCell);

    tbody.appendChild(tr);

}