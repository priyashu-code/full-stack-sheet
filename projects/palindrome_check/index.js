const input = document.getElementById("input");
const result = document.getElementById("result");

function reverseString(str) {
    return str.split("").reverse().join("");
}

function Check() {
    const value = input.value.trim();
    const reverse = reverseString(value);

    if (value === reverse && value !== "") {
        result.textContent = `"${value}" is a palindrome ✅`;
        result.style.color = "green";
    } else {
        result.textContent = `"${value}" is not a palindrome ❌`;
        result.style.color = "red";
    }
}

// Trigger check on Enter key
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Check();
    }
});
