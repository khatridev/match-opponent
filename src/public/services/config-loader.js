import { matchStatus } from "../services/components/matchStatus.js";

async function loadTeams() {
	const res = await fetch('/api/config');
	const data = await res.json();

	const grid = document.querySelector("#teams-grid");
	data.teams.forEach(team => {
		const row = document.createElement('div');
		const teamSpan = document.createElement('span');
		row.id = `${team.name}`
		row.className = 'm-2'
		teamSpan.className = 'text-blue-500 bg-yellow-500 p-3 m-5 w-32';
		teamSpan.innerText = `${team.name}`;
		row.appendChild(teamSpan);
		row.appendChild(matchStatus(team.matches));
		grid.appendChild(row);
	});
}

loadTeams();