document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const dateTime = document.getElementById('dateTime');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button onclick="completeTask(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function completeTask(button) {
        const task = button.parentNode;
        task.classList.toggle('completed');
    }

    function deleteTask(button) {
        const task = button.parentNode;
        taskList.removeChild(task);
    }

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        dateTime.textContent = now.toLocaleDateString('en-US', options);
    }

    // Initial call to display date and time
    updateDateTime();

    // Update date and time every second
    setInterval(updateDateTime, 1000);

    document.getElementById('taskInput').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    window.addTask = addTask;
    window.completeTask = completeTask;
    window.deleteTask = deleteTask;
});
