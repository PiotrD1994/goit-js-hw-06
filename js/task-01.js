const listHeaders = document.querySelectorAll('#categories li.item')
console.log("Number of categories:", listHeaders.length)
  
listHeaders.forEach((item) => {
    const categoryName = item.querySelector("h2").textContent;
    const categoryElemets = item.querySelectorAll("ul li").length;
    console.log("Category:", categoryName);
    console.log("Elements", categoryElemets)
})

