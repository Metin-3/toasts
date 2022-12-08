const content = document.getElementById("content");
const toasts = document.getElementById("toasts");
const duration = document.getElementById("duration");
const cancelable = document.getElementById("cancelable");
const addButton = document.getElementById("add-button");
const clearBtn = document.getElementById("clear-button");
const success = document.getElementById("success");
const error = document.getElementById("error");


addButton.addEventListener("click", () => {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    const testMsg = document.createElement("p");
    toast.appendChild(testMsg);
    toasts.appendChild(toast);

    if (success.checked) {
        testMsg.innerText = "success"
        toast.classList.add("success-toast");
    } else {
        testMsg.innerText = "error"
        toast.classList.add("error-toast");
    }

    if (content.value) {
        testMsg.innerText = `${content.value}`

    }

    if (cancelable.checked) {
        const button = document.createElement("button");
        button.innerText = "x";
        toast.appendChild(button);
    }

    if ((duration.value == "") && (duration.value < 500) && duration.value.isNaN) {
        setTimeout(function () {
            toast.remove()
        }, 500)
    } else {
        setTimeout(function () {
            toast.remove();
        }, duration.value)
    }
})




