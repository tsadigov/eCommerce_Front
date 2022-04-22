function search(){
    sessionStorage['searchString'] = document.getElementById('search-text').value;
    window.location.href = "./search.html";
}