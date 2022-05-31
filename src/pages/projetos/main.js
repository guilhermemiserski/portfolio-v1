function requestUserRepos(){
    
    const xhr = new XMLHttpRequest();
    
    const url = `https://api.github.com/users/guilhermemiserski/repos`;
   
    xhr.open('GET', url, true);
    
    xhr.onload = function () {
    
        const data = JSON.parse(this.response);
        
        for (let i in data) {

            let ul = document.getElementById('userRepos');
    
            let li = document.createElement('li');
            
            li.classList.add('list-group-item');
            li.classList.add('list-group-item-light');
            li.setAttribute('id','li');
        
            li.innerHTML = (`
                <p><strong>Projeto:</strong> ${data[i].name}</p>
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            `);
            
            ul.appendChild(li);
        
        }

    }
    
    xhr.send();
    
}

requestUserRepos();