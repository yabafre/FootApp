import axios from 'axios';

const API_URL = 'https://www.thesportsdb.com/api/v1/json/3';

export default {
    getLeagueTable(leagueId) {
        return axios.get(`${API_URL}/lookuptable.php?l=${leagueId}&s=2022-2023`);
    },
    getLastEventsForClub(clubId) {
        const response = axios.get(`${API_URL}/eventslast.php?id=${clubId}`);
        return response;
    },
};
