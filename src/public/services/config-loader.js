async function loadTeams() {
	const res = await fetch('/api/config');
	const data = await res.json();

	const tbody = document.querySelector("#teams-table tbody")
	data.teams.forEach(team => {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${team.name}</td>
			<td>${team.wins}</td>
			<td>${team.losses}</td>
			`;
			tbody.appendChild(row);
	});
}

loadTeams();