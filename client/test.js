let fetchAllTickets = async function () {
  try {
    const response = await fetch('http://localhost:3000/ticket', {
      method: 'GET'
    });
    const result = await response.json();
    console.log('fetchAllTickets');
    console.log(result);
  } catch (error) {
    console.error('Ошибка при получении всех тикетов:', error);
  }
}

let fetchTickets = async function (from, to, status) {
  let url = new URL('http://localhost:3000/ticket');
  if (from) url.searchParams.append('from', from);
  if (to) url.searchParams.append('to', to);
  if (status) url.searchParams.append('status', status);

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
    });

    const result = await response.json();
    console.log('fetchTickets');
    console.log(result);
  } catch (error) {
    console.error('Ошибка при получении тикетов:', error);
  }
}

let fetchTicket = async function (id) {
  try {
    const response = await fetch('http://localhost:3000/ticket/' + id, {
      method: 'GET'
    });
    const result = await response.json();
    console.log('fetchTicket');
    console.log(result);
  } catch (error) {
    console.error('Ошибка при получении тикета:', error);
  }
}

let createNewTicket = async function(text) {
  try {
    const response = await fetch('http://localhost:3000/ticket', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({ text })
    });
    const result = await response.json();
    console.log('createNewTicket');
    console.log(result);
  } catch (error) {
    console.error('Ошибка при создании нового тикета:', error);
  }
}

let changeStatus = async function(id, status) {
  try {
    const response = await fetch('http://localhost:3000/ticket/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({ status })
    });
    const result = await response.json();
    console.log('changeStatus');
    console.log(result);
  } catch (error) {
    console.error('Ошибка при изменении статуса тикета:', error);
  }
}

let resolveTicket = async function(id, resolutionText) {
  try {
    const response = await fetch(`http://localhost:3000/ticket/${id}/resolve`, {
      method: 'PATCH',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({ resolutionText })
    });
    const result = await response.json();
    console.log('resolveTicket');
    console.log(result);
  } catch (error) {
    console.error('Ошибка при разрешении тикета:', error);
  }
}

let cancelTicket = async function(id, cancellationReason) {
  try {
    const response = await fetch(`http://localhost:3000/ticket/${id}/cancel`, {
      method: 'PATCH',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({ cancellationReason })
    });
    const result = await response.json();
    console.log('cancelTicket');
    console.log(result);
  } catch (error) {
    console.error('Ошибка при отмене тикета:', error);
  }
}

fetchAllTickets();
//fetchTicket(3);
//fetchTickets('2025-01-01', '2025-08-25');
//createNewTicket('Привет, мир!');
//changeStatus(3, 'in-progress');
//resolveTicket(1, 'Установили новый сервер, а также камеру и самостреляющий дробовик напротив входной двери');
//cancelTicket(4, 'Увы, с этим мы ничего не можем сделать')
