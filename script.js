document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("infi-list"); 

    
    function addListItem(content) {
        const listItem = document.createElement("li");
        listItem.textContent = content; 
        list.appendChild(listItem); 
    }

    
    for (let i = 1; i <= 10; i++) {
        addListItem(`Item ${i}`);
    }

    
    list.addEventListener("scroll", () => {
    
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            for (let i = 0; i < 2; i++) {
                addListItem(`Item ${list.children.length + 1}`);
            }
        }
    });
});

