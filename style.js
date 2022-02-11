// add button event lisernar
document.getElementById('submitComment').addEventListener('click',function(){

    // add user comment
    const commentBox=document.getElementById('newComment');
    const userComment=commentBox.value;

    // create paragraph
    const Comment=document.createElement('p');
    Comment.innerText=userComment;
    
    // appent a new comment
    const commetContaine=document.getElementById('commetContaine');
    commetContaine.appendChild(Comment);

    // cleare the comment box
    commentBox.value=''

})