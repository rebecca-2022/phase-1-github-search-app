document.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector("#github-form");
    form.addEventListener('submit', function(event){
        event.preventDefault()
        let search = event.target.search.value
        serachGitHub(search)
        //define variables
    const displayUser = document.querySelector('#user-list')
    const displayRepoList = document.querySelector('#repos-list')
    displayUser.textContent = ''
    displayRepoList.textContent =''


    //fetch from github server
function serachGitHub() {
    fetch(`https://api.github.com/search/users?q= ${search}`)
    .then(res => res.json())
    .then(data => {console.log(data)


        data.items.forEach(user => {
            console.log(user)
            const userList = document.createElement('li')
            userList.setAttribute('class', 'all-users')
            userList.innerHTML = `
                <div class='content'>
                    <h3> User: ${user.login}</h3>
                    <p> URL: ${user.html_url}</p>
                    <div class ='repos'>
                    <button class='repo-button' style='margin-bottom: 25px'>
                    Repositories
                    </button>
                    </div>
                    <img src=${user.avatar_url} />
                </div>`
            displayUser.appendChild(userList);

            const repoButton = document.querySelector('.repo-button')
            console.log(repoButton)
            repoButton.addEventListener('click', function() {
                fetch(user.repos_url)
            .then(res => res.json())
            .then(data => {
                data.forEach(repo => {
                    const repoCard = document.createElement('li')
                    repoCard.innerHTML = `
                    <h4> ${repo.name} </h4>
                    <p> ${repo.html_url}</p>`
                    displayRepoList.appendChild(repoCard)
            })
            })
        })
    })
})
}
})
}) 