 'use strict'

fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => response.json())
    .then((result) => {
        const usersData = result.data;
         
        usersData.map((element) => {   
            console.log(' ' + element.last_name);
        });

        usersData.forEach((element) => {
            if (element.last_name[0] === 'F') {
                console.log('  ' + element.last_name + ':');
                for (const item in element) {
                     console.log(' '.repeat(4) + item + ': ' + element[item] + ',');
                 }
             }
        });

        const reduceUser = usersData.reduce((accumulator, item, index, array) => {
            let resString = `${item.first_name} ${item.last_name}`;
            if (index !== array.length - 1) {
                resString += ', ';
            } else {
                resString += '.';
            }
            accumulator += resString;
            return accumulator;
        }, '');
        console.log(
            `Наша база содержит данные следующих пользователей: ${reduceUser}`);

        let arrayKeys = [];
        let arrayKeysFilter = [];
               
        arrayKeys = usersData.reduce((container, obj) => [...container, ...Object.keys(obj)], []);
        arrayKeysFilter = [...new Set(arrayKeys)];
        console.log(arrayKeysFilter.join(', '));
     })
    
