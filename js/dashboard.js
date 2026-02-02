let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

document.getElementById("ticketForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const ticket = {
    id: Date.now(),
    name: name.value,
    department: department.value,
    priority: priority.value,
    issue: issue.value,
    status: "Open",
    createdAt: new Date().toLocaleString()
  };

  tickets.push(ticket);
  localStorage.setItem("tickets", JSON.stringify(tickets));

  alert("Ticket submitted successfully!");
  this.reset();
});

