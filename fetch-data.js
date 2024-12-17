async function fetchUserDta() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');

        users.forEach((user) => {
            const listIteam  = document.createElement('li');
            listIteam.textContent = user.name;
            userList.appendChild(listIteam);
        });

        dataContainer.appendChild(userList);
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        dataContainer.textContent = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserDta)