function sentToSpan(element) {
    const target = document.getElementById('display-area');

    target.innerHTML=`<img src="${element.src}" style="object-fit:"cover";width:""100%;height:"100%";">`

}