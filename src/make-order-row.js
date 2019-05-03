function makeOrderRow(order) {
    const tr = document.createElement('tr');

    const nameCell = makeNameCell(order.name);
    tr.appendChild(nameCell);

    const ageCell = makeTextCell(order.age);
    tr.appendChild(ageCell);

    const accessoriesCell = makeAccessoriesCell(order.accessories);
    tr.appendChild(accessoriesCell);

    const moodCell = makeTextCell(order.mood);
    tr.appendChild(moodCell);

    return tr;
}
function makeNameCell(name) {
    const nameCell = document.createElement('td');

    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', name);
    link.href = 'orders.html?' + searchParams.toString();
    link.textContent = name;
    nameCell.appendChild(link);
    
    return nameCell;
}
function makeTextCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}
function makeAccessoriesCell(accessories) {
    let accessoriesList = '';
    if(accessories) {
        accessoriesList = accessories.join(', ');
    }
    const cell = makeTextCell(accessoriesList);
    return cell;
}

export default makeOrderRow;