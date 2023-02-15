let errorParagraph = document.getElementById("error")
console.log(errorParagraph)


function purchase() {
    console.log('Button Cliked');
    errorParagraph.textContent = "Something went wrong, please try again"
}
