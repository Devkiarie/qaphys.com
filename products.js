let previewContainer = document.querySelector('.products__preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products__container .products').forEach(products =>{
    products.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = products.getAttribute('data-name');
        previewBox.forEach(preview =>{
           let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});