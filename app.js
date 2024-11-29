const product = document.querySelector('.product');
const api = 'https://boykot.kg/api/v1/products/';

function getUrl() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (const el of data.results) {
                const backgroundColor = el.status === true ? 'green' : 'red';
                product.innerHTML += `
                  <div style="border: 1px solid black; width: 1500px; height: 100px; display: flex; justify-content: space-between;">
                      <h2>${el.brand}</h2>
                      <img src="${el.logo}" alt="" >
                      <div class="boolen" style="background-color: ${backgroundColor}; width: 200px; height: 40px; border-radius: 5px; align-items: center; display: flex; margin-top: 40px; justify-content: center">
                        ${el.status}
                      </div>
                  </div>
                `;
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}
getUrl();
